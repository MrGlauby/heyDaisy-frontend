import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdqQKSWLtDy7Gvn7xbTXDArEKKUTz1T6s",
  authDomain: "videocall-f46bf.firebaseapp.com",
  projectId: "videocall-f46bf",
  storageBucket: "videocall-f46bf.appspot.com",
  messagingSenderId: "634250908182",
  appId: "1:634250908182:web:54fcea456fbcf6e7b1db37",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const Video = () => {
  const pcRef = useRef(null);
  const webcamVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const callInputRef = useRef(null);

  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      pcRef.current = new RTCPeerConnection(servers);
    };

    initialize();
  }, []);

  const startWebcam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(stream);

    stream.getTracks().forEach((track) => {
      pcRef.current.addTrack(track, stream);
    });

    pcRef.current.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        setRemoteStream((prevStream) => {
          if (prevStream) {
            prevStream.addTrack(track);
            return prevStream;
          }
          return new MediaStream([track]);
        });
      });
    };

    webcamVideoRef.current.srcObject = stream;
  };

  const createOffer = async () => {
    const callDoc = firestore.collection("calls").doc();
    const offerCandidates = callDoc.collection("offerCandidates");
    const answerCandidates = callDoc.collection("answerCandidates");

    callInputRef.current.value = callDoc.id;

    pcRef.current.onicecandidate = (event) => {
      event.candidate && offerCandidates.add(event.candidate.toJSON());
    };

    const offerDescription = await pcRef.current.createOffer();
    await pcRef.current.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });

    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (!pcRef.current.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pcRef.current.setRemoteDescription(answerDescription);
      }
    });

    answerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const candidate = new RTCIceCandidate(change.doc.data());
          pcRef.current.addIceCandidate(candidate);
        }
      });
    });
  };

  const answerCall = async () => {
    const callId = callInputRef.current.value;
    const callDoc = firestore.collection("calls").doc(callId);
    const answerCandidates = callDoc.collection("answerCandidates");
    const offerCandidates = callDoc.collection("offerCandidates");

    pcRef.current.onicecandidate = (event) => {
      event.candidate && answerCandidates.add(event.candidate.toJSON());
    };

    const callData = (await callDoc.get()).data();
    const offerDescription = callData.offer;

    await pcRef.current.setRemoteDescription(
      new RTCSessionDescription(offerDescription)
    );

    const answerDescription = await pcRef.current.createAnswer();
    await pcRef.current.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await callDoc.update({ answer });

    offerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const data = change.doc.data();
          pcRef.current.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });

    pcRef.current.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={startWebcam}
          disabled={localStream !== null}
        >
          Start Webcam
        </button>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <video
            ref={webcamVideoRef}
            autoPlay
            muted
            className="w-64 h-48 border border-gray-400 rounded"
          />
          <p className="mt-2">Local Stream</p>
        </div>
        <div className="flex flex-col items-center ml-8">
          <video
            ref={remoteVideoRef}
            autoPlay
            className="w-64 h-48 border border-gray-400 rounded"
          />
          <p className="mt-2">Remote Stream</p>
        </div>
      </div>
      <div className="my-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={createOffer}
          disabled={localStream === null}
        >
          Call
        </button>
        <input
          ref={callInputRef}
          type="text"
          placeholder="Enter call ID"
          className="mt-2 px-2 py-1 border border-gray-400 rounded"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed ml-2"
          onClick={answerCall}
          disabled={localStream !== null}
        >
          Answer
        </button>
      </div>
    </div>
  );
};

export default Video;

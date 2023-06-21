import "../../src/App.css";
import io from "socket.io-client";
import { useState } from "react";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";


const socket = io.connect("http://localhost:3000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
    <Navbar />
    {/* <div className="App m-auto">
      {!showChat ? (
        <div className="joinChatContainer m-auto">
          <h3>Join A Chat</h3>
          <input className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={joinRoom}>Join A Room</button>
        </div>
      ) : ( */}
        <ChatWindow socket={socket} username={username} room={room} />
      {/* )} */}
    {/* </div> */}
    <ChatInput />
    <Footer />
    </>

  );
}

export default App;
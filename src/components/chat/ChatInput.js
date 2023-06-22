// import React, { useRef, useState } from 'react';
// import '../../App.css';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   apiKey: "AIzaSyAV4AWF2WZgV-zeN8vW5btm5EECZLQSps4",
//   authDomain: "heydaisy-4ccc5.firebaseapp.com",
//   databaseURL: "https://heydaisy-4ccc5-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "heydaisy-4ccc5",
//   storageBucket: "heydaisy-4ccc5.appspot.com",
//   messagingSenderId: "116004096032",
//   appId: "1:116004096032:web:3370cfaa74ca95f4c71445",
//   measurementId: "G-KMVKHBMY31"})

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

// function ChatInput() {

//   const [user] = useAuthState(auth);

//   return (
//     <div className="flex justify-center">
//     <div className=" bg-base-200 rounded-md max-w-400 m-4">
//       <header>
//         <h1>Chat with firebase </h1>
//         <SignOut />
//       </header>

//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>

//     </div>
//     </div>
//   );
// }

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//     <>
//       <button className="" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p className="">Do not violate the community guidelines or you will be banned for life!</p>
//     </>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="rounded-md btn-primary flex justify-center bg-base-200 rounded-md max-w-400 m-4" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue} className="btn btn-primary">Send</button>

//     </form>
//   </>)
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img className="rounded-md" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p className="chat-bubble" >{text}</p>
//     </div>
//   </>)
// }

// export default ChatInput;

import "../../src/App.css";
import { useState } from "react";
import AuthPage from "../components/chat/AuthPage";
import ChatPage from "../components/chat/ChatPage";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

import io from 'socket.io-client';

// Connect to the server
// const socket = io('http://localhost:3002');

// Send a message
// socket.emit('message', 'Hello, server!');

// Receive a message
// socket.on('message', message => {
//   console.log('Received message:', message);
// });




function Chat() {
    const [user, setUser] = useState(undefined);
  
    if (!user) {
      return (
        <>
          <Navbar />
          <AuthPage onAuth={(user) => setUser(user)} />
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <ChatPage user={user} />
          <Footer />

        </>
      );
    }
  }
  
  export default Chat;
  

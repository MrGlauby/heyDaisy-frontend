import "../../src/App.css";
// import io from "socket.io-client";
import { useState } from "react";
import AuthPage from "../components/chat/AuthPage";
import ChatPage from "../components/chat/ChatPage";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

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
  

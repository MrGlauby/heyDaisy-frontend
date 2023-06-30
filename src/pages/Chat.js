import "../../src/App.css";
import { useState } from "react";
import AuthPage from "../components/chat/AuthPage";
import ChatPage from "../components/chat/ChatPage";

function Chat() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return (
      <>
        <AuthPage onAuth={(user) => setUser(user)} />
      </>
    );
  } else {
    return (
      <>
        <ChatPage user={user} />
      </>
    );
  }
}

export default Chat;

import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatWindow({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className = "flex justify-center bg-base-200 rounded-md max-w-400 m-4 ">
    <div className="bg-base-200 ml-400 rounded-md border-2 px-8 py-2">
      <div className="flex items-center ">
        <h1 className="flex items-center ">Live Chat</h1>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="chat-bubble">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="chat-footer opacity-50">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="input input-bordered w-full max-w-xs">
        <input className="border-2 rounded-md mr-5"
          type="text"
          value={currentMessage}
          placeholder="Say hi..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button className="btn btn-primary" onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
    </div>
  );
}

export default ChatWindow;
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

import Sidebar from "../main/Sidebar";

const ChatPage = (props) => {
  const chatProps = useMultiChatLogic(
    "286c08c5-5015-484c-94f9-c980b4e6c57e",
    props.user.username,
    props.user.secret
  );

  return (
    <div className="flex">
        <Sidebar />
    <div className="justify-center m-8 w-screen h-screen grid grid-cols-1">
      <div className="h-[48rem] m-8" >
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} />
      </div>
      </div>
    </div>
  );
};

export default ChatPage;

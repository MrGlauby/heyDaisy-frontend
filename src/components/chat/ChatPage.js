import "../../App.css";

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
      <div className="justify-center m-1 w-screen h-[48rem] grid grid-cols-1 ">
        <div className="h-[44rem] m-6 border-1 p-px border-slate-200 rounded-lg bg-slate-200/50">
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow {...chatProps} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

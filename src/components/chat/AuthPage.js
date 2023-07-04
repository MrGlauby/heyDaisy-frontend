import axios from "axios";
import { StateContext } from "../../stateContext";
import { useContext } from "react";
import Sidebar from "../main/Sidebar";
import { UilCommentUpload } from "@iconscout/react-unicons";
import { UilCommentDots } from "@iconscout/react-unicons";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://heydaisy-chat-backend-zewf.onrender.com/authenticate", {
        username: value,
      })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };
  const { user, users } = useContext(StateContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex justify-center rounded-md max-w-400 pt-4 m-auto">
        <form
          onSubmit={onSubmit}
          className="bg-slate-100/50 p-4 m-8 rounded-lg"
        >
          <div className="m-5 text-5xl font-bold max-w-4xl items-center text-center">
            Let's go! | ¡Vamos! | Andiamo! | Los geht's!
          </div>
          <br></br>
          <div className="m-5 text-3xl  font-bold max-w-4xl items-center text-center"></div>
          <br></br>
          <div className="chat chat-start">
            <div className="chat-bubble bg-primary ml-10 text-2xl">
              Set a username to get started :)
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              className="border-2 rounded-md mr-5 my-10 text-2xl p-2"
              name="username"
              placeholder="Type in username..."
              value={user.firstName}
            />
            <button className="btn btn-primary text-xl" type="submit">
              Enter
              <UilCommentDots />
            </button>
          </div>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;

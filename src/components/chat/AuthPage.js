import axios from "axios";
import { StateContext } from "../../stateContext";
import { useContext } from "react";
import Sidebar from "../main/Sidebar";
import { UilCommentUpload } from "@iconscout/react-unicons";
import { UilCommentDots } from '@iconscout/react-unicons'

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
    <>
      <Sidebar />
      <div className="flex justify-center rounded-md max-w-400 m-4 my-24">
        <form onSubmit={onSubmit} className="">
          <div className="m-5 text-2xl">
            Be brave and start chatting with likeminded learners around the
            world!
          </div>
          <br></br>
          <div className="m-5 flex text-2xl items-center justify-center">
            Set a username to get started
          </div>

          <div className="flex items-center justify-center">
            <input
              className="border-2 rounded-md mr-5 my-10 text-xl"
              name="username"
              placeholder="Type in username..."
              value={user.firstName}
            />
            <button className="btn btn-primary text-lg" type="submit">
              Enter
              <UilCommentDots />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthPage;

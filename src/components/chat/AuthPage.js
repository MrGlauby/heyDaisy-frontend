import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://heydaisy-chat-backend-zewf.onrender.com/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className = "flex justify-center bg-base-200 rounded-md max-w-400 m-4 my-24">
      <form onSubmit={onSubmit} className="">
        <div className="">Be brave and start chatting with likeminded learners around the world! 👋</div>
        <br></br>
        <div className="">Set a username to get started</div>

        <div className="flex items-center">
          <input className="border-2 rounded-md mr-5 my-10" name="username" placeholder="Type in username..." />
          <button className="btn btn-primary" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
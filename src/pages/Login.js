import React from "react";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
//import Loader from ".Loader";
import { loginUser } from "../utils/authUtils";
import { Link } from "react-router-dom";
import { StateContext } from "../stateContext";

export default function Login({
  isAuthenticated,
  setIsAuthenticated,
  /*loading,
  setLoading,*/
  setToken,
}) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  const { user, setUser } = useContext(StateContext);
  console.log("one single user", user);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //setLoading(true);
      if (!email || !password) return "Please fill out all the fields";

      // const { token } = await loginUser({ email, password });
      const res = await loginUser({ email, password });

      localStorage.setItem("token", res.token);
      console.log("another one", res.token);
      setToken(res.token);
      setIsAuthenticated(true);
      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      //setLoading(false);
    } catch (error) {
      //setLoading(false);
      console.log("fehler");
      return error.message;
    }
  };

  if (isAuthenticated) return <Navigate to="/myprofile" />;
  if (isAuthenticated) return <Navigate to="/myprofile" />;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-wrap w-2/4 text-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
            Whether you're a beginner or an advanced learner, we give you the ideal platform to connect with likeminded individuals to achieve your language goals!</p> <br></br>
            <br></br>
            <div className="flex justify-around">
            <p className="font-bold">Let's go!  |  ¡Vamos!  |  Andiamo!  |  Los geht's!</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn btn-primary form-control mt-6"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

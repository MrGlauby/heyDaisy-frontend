import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import Loader from "./Loader";
import { registerUser } from "../utils/authUtils";
import { Link } from "react-router-dom";

import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";


export default function Register({
  isAuthenticated,
  setIsAuthenticated,
  setToken,
}) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    language: "",
  });

  const { email, password, language } = formState;

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // setLoading(true);
      if (!email || !password || !language)
        return "Please fill out all the fields";
      const formData = {
        email,
        password,
        language,
      };
      const response = await registerUser(formData);
      console.log("response", response);
      const { token } = response.data;
      localStorage.setItem("token", token);
      setToken(token);
      setIsAuthenticated(true);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      return error.response?.data.error || error.message;
    }
  };
  if (isAuthenticated) return <Navigate to="/login" />;

  return (


    <div>
      <Navbar/>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-wrap w-2/4 text-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
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
              <select
                className="select select-primary w-full max-w-xs"
                id="language"
                name="language"
                value={language}
                onChange={handleChange}
              >
                <option disabled value="">
                  language you want to learn
                </option>
                <option>Italian</option>
                <option>German</option>
                <option>Spanish</option>
                <option>Portuguese</option>
              </select>
              <div className="form-control mt-6">
              <Link to="MyStudentProfile" className="btn btn-primary" onClick={handleSubmit}>Signup</Link>

              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}


import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { useEffect, useState, useContext } from "react";
import { StateContext } from "./stateContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentGallery from "./pages/StudentGallery";
import SingleStudent from "./components/main/SingleStudent";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { getUser } from "./utils/authUtils";
import MyStudentProfile from "./pages/MyStudentProfile";
import StudentProfile from "./pages/StudentProfile";
import PrivateRoute from "./components/main/PrivateRoute";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

import Blog from "./pages/Blog";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext(StateContext);

  console.log("user in app.js", user);

  useEffect(() => {
    const validateToken = async () => {
      try {
        setLoading(true);
        const res = await getUser(user._id);
        // setUser(user);
        console.log("resssssssssss", res);
        setIsAuthenticated(true);
      } catch (error) {
        console.error(error.message);
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      validateToken();
    }
  }, [token]);

  console.log("uuuuuuuuuuuser", user);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} user={user} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="download" element={<Download />} />
        <Route path="contact" element={<Contact />} />

        <Route path="blog" element={<Blog />} />

        <Route path="faq" element={<Faq />} />
        <Route
          path="login"
          element={
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken}
            />
          }
        />
        <Route
          path="register"
          element={
            <Register
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken}
            />
          }
        />
        {/* <Route
          path="protected"
          element={<PrivateRoute loggedIn={isAuthenticated} />}
        > */}
        <Route path="chat" element={<Chat token={token} />} />
        <Route path="students" element={<StudentGallery token={token} />} />
        <Route path="student/:_id" element={<StudentProfile token={token} />} />
        <Route path="myprofile" element={<MyStudentProfile token={token} />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VideoCalls from "./pages/VideoCalls";
import StudentGallery from "./pages/StudentGallery";
import SingleStudent from "./components/main/SingleStudent";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { getUser } from "./utils/authUtils";
import MyStudentProfile from "./pages/MyStudentProfile";
import StudentProfile from "./pages/StudentProfile";

// //Pedro Tech Start
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");
// //Pedro Tech End
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      try {
        setLoading(true);
        const user = await getUser(token);
        setUser(user);
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

  /*  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };
*/
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="download" element={<Download />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chat" element={<Chat />} />
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
        {/* <Route path="videocall" element={<VideoCalls />} /> */}
        <Route path="students" element={<StudentGallery />} />
        <Route path="student/:_id" element={<StudentProfile />} />
        <Route path="myprofile" element={<MyStudentProfile />} />
      </Routes>
    </>
  );
}

export default App;

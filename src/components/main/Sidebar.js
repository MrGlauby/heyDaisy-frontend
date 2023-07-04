import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className="flex mt-8 sticky">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/students">Other Students</Link>
          </li>
          <li>
            <Link to="/chat">Chatrooms</Link>
          </li>
          <li>
            <Link to="/events">Upcoming Events</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

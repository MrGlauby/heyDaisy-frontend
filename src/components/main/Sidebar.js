import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className="flex absolute mt-8">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <Link to="/students">User Gallery</Link>
          </li>
          <li>
            <a>Chat</a>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <a>Create Channel</a>
          </li>
          <li>
            <a>Open Channels</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

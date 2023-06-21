import React from "react";

export default function Sidebar() {
  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <a>User Gallery</a>
        </li>
        <li>
          <a>Chat</a>
        </li>
        <li>
          <a>Events</a>
        </li>
        <li>
          <a>Create Channel</a>
        </li>
        <li>
          <a>Open Channels</a>
        </li>
      </ul>
    </div>
  );
}

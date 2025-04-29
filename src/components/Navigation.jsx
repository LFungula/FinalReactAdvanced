import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Events</Link>
        </li>
        <li>
          <Link to="/event/new">Add a new event</Link>
        </li>
        <li>
          <Link to="/users">Our registered users</Link>
        </li>
      </ul>
    </nav>
  );
};

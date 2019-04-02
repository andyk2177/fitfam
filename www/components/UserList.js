import React, { useState, useEffect } from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <a href="#">
            <img src={user.photo} alt={user.username} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default UserList;

import React, { useState, useEffect } from "react";
import Link from "next/link";

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link
            href={`/index.js?username=${user.username}`}
            as={`/${user.username}`}
          >
            <img src={user.photo} alt={user.username} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserList;

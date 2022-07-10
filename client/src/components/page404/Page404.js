import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Account Setting</button>
      <button>Log Out</button>
    </div>
  );
};

export default Header;

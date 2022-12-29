import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: 40,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: 900,
          display: "flex",
          alignItems: "center",
          gap: 20,
          margin: "0 auto",
        }}
      >
        <h1>Rid Hafiz</h1>
        <menu
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <Link to={"/"}> Home </Link>
          <Link to={"/about"}> About </Link>
          <Link to={"/contact"}> Contact </Link>
          <Link to={"/blog"}> Blog </Link>
        </menu>
      </div>
    </nav>
  );
}

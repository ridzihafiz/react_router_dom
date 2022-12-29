import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100vw",
        height: 180,
        backgroundColor: "black",
        color: "white",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Created by Rid Hafiz</h1>
        <menu
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/blog"}>Blog</Link>
        </menu>
      </div>
    </footer>
  );
}

import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header--logo">
        <img src={process.env.PUBLIC_URL + "/images/Troll-Face.png"} alt="logo" className="troll-face" />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
}

import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImg, setMemeImg] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImg(memesArray[randomNumber].url);
  }
  return (
    <div class="meme">
      <div className="meme--form">
        <input
          type="text"
          placeholder="Top Text"
          className="meme--form-input input-1"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="meme--form-input input-2"
        />
        <button className="meme--btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <figure className="meme--figure">
        <img src={memeImg} alt="memeImg" className="memeImage" />
      </figure>
    </div>
  );
}

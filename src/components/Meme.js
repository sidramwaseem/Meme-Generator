import React from "react";

export default function Meme() {
  return (
    <div class="meme">
      <form className="meme--form">
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
        <button className="meme--btn">Get a new meme image</button>
      </form>
    </div>
  );
}

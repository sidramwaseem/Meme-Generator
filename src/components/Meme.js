import React from "react";
import memesData from "../memesData.js";

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages,setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevImg => {
      return {
        ...prevImg,
        randomImage: url,
      }
    })
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
        <img src={meme.randomImage} alt="memeImg" className="memeImage" />
      </figure>
    </div>
  );
}

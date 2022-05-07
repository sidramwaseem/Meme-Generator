import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);


  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json)
      .then((data) => setAllMemeImages(data.data.memes))
  }, []);

  function getMemeImage(event) {

    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevImg) => {
      return {
        ...prevImg,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevImg) => {
      return {
        ...prevImg,
        [name]: value,
      };
    });
  }

  return (
    <div class="meme">
      <div className="meme--form">
        <input
          name="topText"
          type="text"
          placeholder="Top Text"
          className="meme--form-input input-1"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          name="bottomText"
          type="text"
          placeholder="Bottom Text"
          className="meme--form-input input-2"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="meme--btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <figure className="meme--figure">
        <img src={meme.randomImage} alt="memeImg" className="memeImage" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </figure>
    </div>
  );
}

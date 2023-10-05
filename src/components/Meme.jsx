import React from "react";
import memesData from "../memeData.jsx";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "./memeimg.png",
  });

  function memeButtonClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage((prevMemeImage) => ({
      ...prevMemeImage,
      randomImage: url,
    }));
  }

  return (
    <div>
      <main>
        <div className="text-search">
          <input
            type="text"
            placeholder="Shut up"
            className="form--input"
            id="search-bar"
          />
          <input
            type="text"
            placeholder="and take my money"
            className="form--input"
            id="search-bar2"
          />
          <button className="meme-button" onClick={memeButtonClick}>
            Get a new meme image 🖼️
          </button>
        </div>
      </main>
      <img src={memeImage} />
    </div>
  );
}

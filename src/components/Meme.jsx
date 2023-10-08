import React from "react";
import memeData from "../memeData.jsx";

export default function Meme() {
  const [meme, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "./memeimg.png",
  });

  function handleText(event) {
    const { name, value } = event.target;
    setMemeImage((prevMemeImage) => {
      return {
        ...prevMemeImage,
        [name]: value,
      };
    });
  }

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function memeButtonClick() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
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
            onChange={handleText}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="and take my money"
            className="form--input"
            id="search-bar2"
            onChange={handleText}
            name="bottomText"
            value={meme.bottomText}
          />
          <button className="meme-button" onClick={memeButtonClick}>
            Get a new meme image 🖼️
          </button>
        </div>
      </main>
      <div className="meme">
        <img src={meme.randomImage} className="memeimg" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

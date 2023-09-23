import React from "react";
import memesData from "../memeData.jsx";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function memeButtonClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    //const url = memesArray[randomNumber].url;
  }

  return (
    <div>
      <main>
        <div className="text-search">
          <input type="text" placeholder="Shut up" id="search-bar" />
          <input type="text" placeholder="and take my money" id="search-bar2" />
          <button className="meme-button" onClick={memeButtonClick}>
            Get a new meme image 🖼️
          </button>
        </div>
      </main>
      <img src="{memeImage}" />
    </div>
  );
}

import memesData from "../memeData.jsx";

export default function Meme() {
  function memeButtonClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
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
    </div>
  );
}

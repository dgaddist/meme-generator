export default function Meme() {
  return (
    <div>
      <span className="text-search">
        <form>
          <input type="text" placeholder="Shut up" id="search-bar" />
        </form>
        <form>
          <input type="text" placeholder="and take my money" id="search-bar2" />
        </form>
      </span>
      <button className="meme-button">Get a new meme image 🖼️</button>
    </div>
  );
}

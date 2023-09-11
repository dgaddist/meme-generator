export default function Meme() {
  return (
    <div>
      <main>
        <form className="text-search">
          <input type="text" placeholder="Shut up" id="search-bar" />
          <input type="text" placeholder="and take my money" id="search-bar2" />
          <button className="meme-button">Get a new meme image 🖼️</button>
        </form>
      </main>
    </div>
  );
}

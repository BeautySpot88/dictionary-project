import logo from "./book.gif";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="AppLogo" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/BeautySpot88/dictionary-project">
              Ebele
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

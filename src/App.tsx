import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h2>Header</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/private">Private page</Link>
          </nav>
        </div>
      </header>

      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={<Private />} />
          </Routes>
        </div>
      </main>

      <footer>
        <div>
          <h3>Footer</h3>
          <ul>
            <li>Col 1 - Line 1</li>
            <li>Col 1 - Line 2</li>
            <li>Col 1 - Line 3</li>
            <li>Col 1 - Line 4</li>
          </ul>
          <ul>
            <li>Col 2 - Line 1</li>
            <li>Col 2 - Line 2</li>
            <li>Col 2 - Line 3</li>
            <li>Col 2 - Line 4</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

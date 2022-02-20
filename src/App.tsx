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
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

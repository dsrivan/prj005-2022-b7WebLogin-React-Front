import React, { useContext } from "react";
import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="App">
      <header>
        <div>
          <h2>Header</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/private">Private page</Link>
            {auth.user && (
              <button className="btnLogOut" onClick={handleLogOut}>
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/private"
              element={
                <RequireAuth>
                  <Private />
                </RequireAuth>
              }
            />
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

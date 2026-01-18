import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/project";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <NavLink className="navbar-brand" to="/" style ={{ fontWeight: 'bold', border : '2px solid white', padding: '5px', borderRadius: '5px' }}>
          NYPD
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/project">
                Project
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

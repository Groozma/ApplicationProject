import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.scss";

function Nav() {
  // Navigation bar with internal links for site structure and crawlability
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
          <ul className={`nav-menu ${open ? "show" : ""}`}>
            <li><Link to="/ApplicationProject">Home</Link></li>
            <li><Link to="/ApplicationProject/About">About</Link></li>
            <li><Link to="/ApplicationProject/Programs">Programs</Link></li>
            <li><Link to="/ApplicationProject/Testimonials">Testimonials</Link></li>
            <li><Link to="/ApplicationProject/Contact">Contact</Link></li>
            <li><Link to={"/ApplicationProject/Gallery"}>Gallery</Link></li>
            <li><Link to={"/ApplicationProject/NeatStuff"}>Neat Stuff</Link></li>
          </ul>
          <button 
            className="nav-toggle" 
            aria-label="toggle navigation"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
      </nav>
    </>
  );
}

export default Nav;

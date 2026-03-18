import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  // Navigation bar with internal links for site structure and crawlability
  return (
    <>
      <nav>
        <Link to="/ApplicationProject">Home</Link>
        <Link to="/ApplicationProject/Programs">Programs</Link>
        <Link to="/ApplicationProject/Testimonials">Testimonials</Link>
        <Link to="/ApplicationProject/Contact">Contact</Link>
        <Link to={"/ApplicationProject/Gallery"}>Gallery</Link>
        <Link to={"/ApplicationProject/NeatStuff"}>Neat Stuff</Link>

      </nav>
    </>
  );
}

export default Nav;

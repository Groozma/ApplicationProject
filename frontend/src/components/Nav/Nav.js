import { Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Programs from "../../Pages/Programs/Programs";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/Contact">Contact</Link> |{" "}
        <Link to="/Programs">Programs</Link>
      </nav>
    </>
  );
}

export default Nav;

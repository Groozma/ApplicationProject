import { Link } from "react-router-dom";


function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/Contact">Contact</Link> |{" "}
        <Link to="/Programs">Programs</Link> | <Link to={"/Gallery"}>Gallery</Link>
      </nav>
    </>
  );
}

export default Nav;

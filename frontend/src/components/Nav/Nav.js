import { Link } from "react-router-dom";


function Nav() {
  return (
    <>
      <nav>
        <Link to="/ApplicationProject">Home</Link> | <Link to="/ApplicationProject/Contact">Contact</Link> |{" "}
        <Link to="/ApplicationProject/Programs">Programs</Link> | <Link to={"/ApplicationProject/Gallery"}>Gallery</Link>
      </nav>
    </>
  );
}

export default Nav;

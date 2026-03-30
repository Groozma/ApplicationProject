import "./Header.scss";
import logo from "../../images/logo.png";
import headerImage from "../../images/header-img.png"

function Header() {
  // Displays site logo and program title for branding and SEO-friendly alt text
  return (
    <div className="header">
      {/* <img src={logo} alt="Onward Social Skills logo" className="logo" /> */}
      <div className="name">Onward Social Skills</div>
      {/* <div>Social Skills Program for kids from 5-18</div> */}
      <img src={headerImage} className="header-image" />
    </div>
  );
}

export default Header;

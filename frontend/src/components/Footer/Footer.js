import "./Footer.scss";

function Footer() {
  // Displays developer credits and site footer information
  return (
    <div className="footer">
      <div className="developers">
        <div>Developed by</div>
        <br />
        <div>Adhip Bashar</div>
        <div>Haresh Kadayat</div>
        <div>Ryan Maguire</div>
        <br />
      </div>
      <div className="copyright">
      <div>&copy; 2026 All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;

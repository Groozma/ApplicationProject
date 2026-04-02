import facebook from "../../images/Facebook_Logo_Primary.png";
import "./Facebook.scss";

function Facebook() {
  // Displays Facebook link with proper SEO-friendly alt text
  return (
    <div className="facebook">
      <h3>Follow us on Facebook</h3>
      <a
        href="https://www.facebook.com/onwardsocialskills"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="Facebook logo" width={90} height={90} />
      </a>
    </div>
  );
}

export default Facebook;

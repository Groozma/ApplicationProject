import AboutOnward from "../../components/AboutOnward/AboutOnward";
import News from "../../components/News/News";
import BeingDifferent from "../../components/BeingDifferent/BeingDifferent";
import Service from "../../components/Service/Service";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <div>
        <AboutOnward />
        <div className="service-news">
          <Service />
          <News />
        </div>
      </div>
      <BeingDifferent />
      <br />
    </div>
  );
}

export default About;

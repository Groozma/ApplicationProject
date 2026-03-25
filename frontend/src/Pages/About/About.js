import AboutOnward from "../../components/AboutOnward/AboutOnward";
import News from "../../components/News/News";
import BeingDifferent from "../../components/BeingDifferent/BeingDifferent";
import Service from "../../components/Service/Service";

import './About.scss'

function About()  {
    return(
        <div className="about">
            <div>
                <AboutOnward />
                <div>
                    <Service />
                    <News />
                </div>
            </div>
            <BeingDifferent />
        </div>
    )
}

export default About;
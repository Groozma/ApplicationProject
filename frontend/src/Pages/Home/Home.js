import schoolImg from "../../images/school.jpg";
import summerImg from "../../images/summer.png";
import neatImg from "../../images/neat.png";
import testimonialImg from "../../images/testimonial.png";
import "./Home.scss";

import AboutUs from "../../components/AboutUs";
import Facebook from "../../components/Facebook/Facebook";

function Home() {
  return (
    <div className="home">
      <div>Welcome to Onward Sun</div>

      <Facebook />
      <AboutUs />

      <div>
        <h2>Onward Makes A Difference...</h2>

        <div>
          <img src={schoolImg} alt="School Program" />
          <h3>School Year Program</h3>
          <p>
           Social Skills Enrichment for Children Developed to meet the needs of children aged 5-18 years. Presented in a fun, hands-on, self-empowering format, designed… just for kids.
          </p>
        </div>

        <div>
          <img src={summerImg} alt="Summer Camp" />
          <h3>Summer Camp</h3>
          <p>
            The Onward summer program has four weeks that fit together and will encourage your child's growth throughout the summer. It is recommended (but not essential) that a child enroll for all four weeks for maximum self-esteem and social skills enrichment.
          </p>
        </div>

        <div>
          <img src={neatImg} alt="Neat Stuff" />
          <h3>Neat Stuff</h3>
          <p>Take a look at some things Onward has been doing.</p>
        </div>

        <div>
          <img src={testimonialImg} alt="Testimonials" />
          <h3>Testimonials</h3>
          <p>" Thanks for everything you have done for me…I have really enjoyed all of it. I have met a lot of....</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
import AboutUs from "../../components/AboutUs";
import Facebook from "../../components/Facebook/Facebook";

function Home() {
  return (
    <>
      <p>
        <div>Welcome to Onward Sun</div>
      </p>
      <Facebook />
      <AboutUs />

      <h2>Onward Makes A Difference...</h2>

      <div>
        <h3>School Year Program</h3>
        <p>
        Social Skills Enrichment for children aged 5-18 years.
        A fun program designed to build confidence and social skills.
        </p>
      </div>

      <div>
        <h3>Summer Camp</h3>
        <p>
        The Onward summer program encourages children's growth
        and development through activities and teamwork.
        </p>
      </div>

    </>
  );
}

export default Home;
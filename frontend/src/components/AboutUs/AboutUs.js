import "./AboutUs.scss";
function AboutUs() {
  return (
    <div className="about-us">
      <h2>OUR MISSION</h2>
      <ul>
        <li>To build strong character by teaching skills that empower</li>
        <li>To help kids learn that they can make a difference in their own lives</li>
        <li>
          To teach each child to believe in themselves, their strengths and
          their ability to make successful choices
        </li>
      </ul>

      <div className="difficulty-box">
        <h3>Is your child having difficulty with…</h3>
        <ul>
          <li>Self esteem</li>
          <li>Anger</li>
          <li>Friendship</li>
          <li>Problem Solving</li>
          <li>Feeling Identification</li>
          <li>Co operation</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
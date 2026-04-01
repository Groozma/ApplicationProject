import "./Cost.scss";

function Cost() {
  // Displays program pricing with clear semantic structure
  return (
    <>
      <div>
        <br />
        <p>Inital interview and assessment:</p>
        <p className="price">$160</p>
      </div>
      <div>
        <br />
        <p>Social Skills Training:</p>
        <p className="price">$260 per month</p>
        <br />
      </div>
    </>
  );
}

export default Cost;

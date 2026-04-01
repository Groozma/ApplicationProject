import ParentInfo from "../../ParentInfo/ParentInfo";
import "./SummerCamps.scss";

function SummerCamps() {
  // Displays summer camp section with placeholder information
  return (
    <>
      <div className="summer">
        <br />
        <h2>Summer Camps</h2>
        <p>
          <b>Information for Summer Camps will be available at a later date.</b>
        </p>
        <br />
        <br />
        <ParentInfo />
      </div>
      <div className="summer"></div>
    </>
  );
}

export default SummerCamps;

import SchoolYearProgram from "../../components/Programs/SchoolYearProgram/SchoolYearProgram";
import SummerCamps from "../../components/Programs/SummerCamps/SummerCamps";
import TeenGroup from "../../components/Programs/TeenGroup/TeenGroup";
import ParentInfo from "../../components/ParentInfo";
import Refund from "../../components/Refund/Refund";
import "./Programs.scss";

function Programs() {
  // Programs page combining all program sections and refund information
  return (
    <>
      <div className="programs">
        <SchoolYearProgram />
        {/* <div className="line"></div> */}
        <TeenGroup />
        {/* <div className="line"></div> */}
        <SummerCamps />
        {/* <div className="line"></div> */}
        <ParentInfo />
      </div>
      <div>
        <Refund phone="(519) 641-4781" />
      </div>
    </>
  );
}

export default Programs;

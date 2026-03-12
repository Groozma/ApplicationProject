import SchoolYearProgram from "../../components/Programs/SchoolYearProgram/SchoolYearProgram";
import SummerCamps from "../../components/Programs/SummerCamps/SummerCamps";
import TeenGroup from "../../components/Programs/TeenGroup/TeenGroup";
import ParentInfo from "../../components/ParentInfo";
import './Programs.scss';

function Programs() {
  return (
    <div className="programs">
      <SchoolYearProgram />
      {/* <div className="line"></div> */}
      <TeenGroup />
      {/* <div className="line"></div> */}
      <SummerCamps />
      {/* <div className="line"></div> */}
      <ParentInfo />
    </div>
  );
}

export default Programs;

import SchoolYearProgram from "../../components/Programs/SchoolYearProgram/SchoolYearProgram";
import SummerCamps from "../../components/Programs/SummerCamps/SummerCamps";
import TeenGroup from "../../components/Programs/TeenGroup/TeenGroup";
import ParentInfo from "../../components/ParentInfo";

function Programs() {
  return (
    <>
      <SchoolYearProgram />
      <hr />
      <TeenGroup />
      <hr />
      <SummerCamps />
      <hr />
      <ParentInfo />
    </>
  );
}

export default Programs;

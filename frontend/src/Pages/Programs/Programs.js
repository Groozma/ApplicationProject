import SchoolYearProgram from "../../components/Programs/SchoolYearProgram/SchoolYearProgram";
import SummerCamps from "../../components/Programs/SummerCamps/SummerCamps";
import TeenGroup from "../../components/Programs/TeenGroup/TeenGroup";

function Programs() {
  return (
    <>
      <SchoolYearProgram />
      <hr />
      <TeenGroup />
      <hr />
      <SummerCamps />
    </>
  );
}

export default Programs;

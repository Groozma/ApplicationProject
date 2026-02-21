import Header from "../../components/Header";
import SchoolYearProgram from "../../components/Programs/SchoolYearProgram";
import SummerCamps from "../../components/Programs/SummerCamps";
import Footer from "../../components/Footer";

function Programs() {
  return (
    <>
      <Header />
      <hr />
      <SchoolYearProgram />
      <SummerCamps />
      <hr />
      <Footer />
    </>
  );
}

export default Programs;

import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Facebook from "../../components/Facebook/Facebook";


function Home() {
  return (
    <>
      <Header />
      <Nav />
      <hr />
      <p>
        <div>Welcome to Onward Sun</div>
      </p>
      <Facebook />
      <hr />
      <Footer />
    </>
  );
}

export default Home;
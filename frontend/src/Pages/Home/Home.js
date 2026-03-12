import Facebook from "../../components/Facebook/Facebook";
import "./Home.scss";

function Home() {
  // Home page displaying welcome message and Facebook feed
  return (
    <div className="home">
      Welcome to Onward Sun
      <Facebook />
    </div>
  );
}

export default Home;

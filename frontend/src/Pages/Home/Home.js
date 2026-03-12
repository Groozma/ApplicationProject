import Facebook from "../../components/Facebook/Facebook";
import "./Home.scss";

function Home() {
  // Home page displaying welcome message and Facebook feed
  return (
    <>
      <p>
        <div>Welcome to Onward Sun</div>
      </p>
      <Facebook />
    </>
  );
}

export default Home;

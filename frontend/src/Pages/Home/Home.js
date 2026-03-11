import Facebook from "../../components/Facebook/Facebook";

function Home() {
  return (
    <>
      <p>
        <div>Welcome to Onward Sun</div>
      </p>
      <Facebook />
      <section>
  <h2>About Our Program</h2>
  <p>
    Onward Sun offers engaging programs designed to help children learn,
    grow, and develop new skills through fun and educational activities.
    Our programs focus on creativity, teamwork, and personal development
    in a supportive environment.
  </p>
</section>
<section>
  <h2>Contact Us</h2>
  <p>
    Parents and guardians can contact us via email:
    <a href="mailto:info@onwardsun.com"> info@onwardsun.com</a>
  </p>
</section>
<section>
  <h2>Program Age Ranges</h2>
  <ul>
    <li>Little Explorers Program: Ages 4 - 6</li>
    <li>Junior Adventurers Program: Ages 7 - 9</li>
    <li>Young Leaders Program: Ages 10 - 12</li>
    <li>Teen Development Program: Ages 13 - 16</li>
  </ul>
</section>
    </>
  );
}

export default Home;

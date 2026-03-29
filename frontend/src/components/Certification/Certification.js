import "./Certification.scss";

function Certification() {
  // Displays certification info with an SEO-friendly external link
  return (
    <>
      <div className="certification">
        <h2>Certification</h2>
        Certified Member of the <br />
        <a href="https://oacyc.org/" target="_blank" rel="noopener noreferrer">
          Ontario Association of Child and Youth Care
        </a>
      </div>
    </>
  );
}

export default Certification;

import Form from "../../components/Form/Form";
import Address from "../../components/Address/Address";
import "./Contact.scss";
import Certification from "../../components/Certification/Certification";
import AppointmentBooking from "../../components/AppointmentBooking/AppointmentBooking";
import Feedback from "../../components/Feedback/Feedback";
import SignUp from "../../components/SignUp/SignUp";

function Contact() {
  return (
    <div className="contact">
      <div className="card">
        <h2>Contact Us</h2>
        <br />
        <p>
          Parents and guardians can contact us via email:
          <a href="mailto:onward@live.ca"> onward@live.ca</a>
        </p>
        <br />
        <hr />
        <br />
        <Feedback />
      </div>

      <div className="card">
        <AppointmentBooking />
        <Form />
      </div>

      <div className="map">
        <Address />
      </div>

      <div className="card signup">
        <Certification />
        <br />
        <hr />
        <br />
        <SignUp />
      </div>
    </div>
  );
}

export default Contact;

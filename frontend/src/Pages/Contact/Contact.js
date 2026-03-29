import Form from "../../components/Form/Form";
import Address from "../../components/Address/Address";
import "./Contact.scss";
import Certification from "../../components/Certification/Certification";
import AppointmentBooking from "../../components/AppointmentBooking";
import Feedback from "../../components/Feedback";

function Contact() {
  return (
    <>
      <h2>Contact Us</h2>

      <p>
        Parents and guardians can contact us via email:
        <a href="mailto:onward@live.ca"> onward@live.ca</a>
      </p>

      <AppointmentBooking />

      <div className="contact">
        <Form />
        <Address />
      </div>

      <Feedback />

      <div>
        <Certification />
      </div>
    </>
  );
}

export default Contact;
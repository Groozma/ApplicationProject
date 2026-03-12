import Form from "../../components/Form/Form";
import Address from "../../components/Address/Address";
import "./Contact.scss";
import Certification from "../../components/Certification/Certification";

function Contact() {
  // Contact page layout combining form, address, and certification components
  return (
    <>
      <div className="contact">
        <Form />
        <Address />
      </div>
      <div>
        <Certification />
      </div>
    </>
  );
}

export default Contact;

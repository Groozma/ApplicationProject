import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.scss";

function Form() {
  // Contact form with accessible labels and SEO-friendly structure
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);

    emailjs
      .sendForm("service_b6gkh8d", "template_1ptipct", form.current, {
        publicKey: "GH2Hwd5DAh6TeNLf8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setEmailSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div className="form">
      <div className="title">E-mail Us:</div>

      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            maxLength={50}
            value={name}
            onChange={handleNameChange}
            name="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            maxLength={75}
            value={email}
            onChange={handleEmailChange}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            maxLength={100}
            value={subject}
            onChange={handleSubjectChange}
            name="title"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            maxLength={1000}
            value={message}
            onChange={handleMessageChange}
            name="message"
          />
        </div>

        {isInvalid && <div>Please fill in all boxes</div>}

        <button aria-label="Submit contact form">Submit</button>

        {emailSent && <div>Email Sent!</div>}
      </form>
    </div>
  );
}

export default Form;

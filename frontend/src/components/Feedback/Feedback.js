import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || message === "") {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
        emailjs
          .sendForm("service_b6gkh8d", "template_v9k65oe", form.current, {
            publicKey: "GH2Hwd5DAh6TeNLf8",
          })
          .then(
            () => {
              console.log("SUCCESS!");
              setName("");
              setMessage("");
              setFeedbackSent(true);
            },
            (error) => {
              console.log("FAILED...", error.text);
            },
          );
      }
  };

  return (
    <div>
      <h2>Feedback</h2>
      <br />
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label>
            <b>Name:</b>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='name'
            />
          </label>
        </div>

        <div>
          <label>
            <b>Message:</b>
            <br />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
            />
          </label>
        </div>
        {isInvalid && <div>Please fill in all boxes</div>}

        <button type="submit">Submit Feedback</button>

        {feedbackSent && <div>Feedback Sent!</div>}
      </form>
    </div>
  );
}

export default Feedback;

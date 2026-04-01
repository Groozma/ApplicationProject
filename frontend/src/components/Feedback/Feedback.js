import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setMessage("");
  };

  return (
    <div>
      <h2>Feedback</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <b>Name:</b>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            />
          </label>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;

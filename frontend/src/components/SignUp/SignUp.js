import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function SignUp() {
  const [email, setEmail] = useState("");
  const [preference, setPreference] = useState("both");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!email) return;

    try {
      await addDoc(collection(db, "signup"), {
        email,
        preference,
        createdAt: new Date(),
      });

      alert("Thank you for signing up!");
      setEmail("");
      setPreference("signup");
    } catch (error) {
      console.error("Error adding email: ", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <div className="options">
          <label>
            <input
              type="radio"
              name="preference"
              value="newsletter"
              checked={preference === "newsletter"}
              onChange={(event) => setPreference(event.target.value)}
            />
            Newsletter <br />
          </label>

          <label>
            <input
              type="radio"
              name="preference"
              value="emailnotifications"
              checked={preference === "emailnotifications"}
              onChange={(event) => setPreference(event.target.value)}
            />
            Email Notifications <br />
          </label>

          <label>
            <input
              type="radio"
              name="preference"
              value="both"
              checked={preference === "both"}
              onChange={(event) => setPreference(event.target.value)}
            />
            Both
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;

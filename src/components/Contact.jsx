import React, { useState } from "react";
import "./styles/Contact.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contactcontainer">
      <div className="header">
        <img src="/logo.svg" alt="The Playground Logo" />
        <h1>THE PLAYGROUND</h1>
        <p>SPORTS FOR ALL</p>
      </div>
      <div className="content">
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows="5"
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="social">
          <a href="tel:+91 8727876120">
            <i className="fas fa-phone-alt"></i>
            +91 8727876120
          </a>
          <a href="mailto:contact@theplaygroundsports.com">
            <i className="fas fa-envelope"></i>
            contact@theplaygroundsports.com
          </a>
        </div>
        <div className="sign-in">
          <button type="button">SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import "../styles/contact.css";
import email from "../assets/email.png";
import mobile from "../assets/mobile.png";
import MotionWrap from "../wrapper/MotionWrap";
import AppWrap from "../wrapper/AppWrap";
import { client } from "../client";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputHandler = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const contact = {
      _type: "contact",
      name: formDetails.name,
      email: formDetails.email,
      message: formDetails.message,
    };

    client
      .create(contact)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="contact container" id="contact">
      <h2 className="contact__heading">Take A Coffee & Chat With Me</h2>
      <div className="contact__links">
        <div className="contact__email">
          <img src={email} alt="email" />
          <a href="mailto:avinash.90527@gmail.com">avinash.90527@gmail.com</a>
        </div>
        <div className="contact__phone">
          <img src={mobile} alt="phone" />
          <a href="tel:+91 9832702088">+91 9832702088</a>
        </div>
      </div>
      <div className="contact__form">
        <div className="form__name">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            onChange={inputHandler}
          />
        </div>
        <div className="form__email">
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            onChange={inputHandler}
          />
        </div>
        <div className="form__name">
          <textarea
            name="message"
            id="form-message"
            cols="30"
            rows="5"
            placeholder="Your Message"
            onChange={inputHandler}
          ></textarea>
        </div>
        <button type="submit" className="form__btn" onClick={submitHandler}>
          {isLoading ? "Sending..." : "send message"}
        </button>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(Contact), "contact", "white-bg");

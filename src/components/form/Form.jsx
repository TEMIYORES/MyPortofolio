import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aeje3ro",
        "template_wpggvmr",
        form.current,
        "KB_ewm-VYxvmItmpX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div className="form_input">
        <input type="text" placeholder="Your Name" name="user_name" required />
      </div>
      <div className="form_input">
        <input
          type="email"
          placeholder="Your Email"
          name="user_email"
          required
        />
      </div>

      <div className="form_input">
        <textarea
          rows="10"
          placeholder="Write Message"
          name="message"
          required
        ></textarea>
      </div>

      <button className="submit_btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

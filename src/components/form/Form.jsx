import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./form.css";
import { Cancel } from "@mui/icons-material";

export const Form = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const form = useRef();
  const clearAll = () => {
    setPhoneNumber("");
    setFullname("");
    setEmail("");
    setMessage("");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsMessageSent(true);
    emailjs
      .sendForm(
        "service_aeje3ro",
        "template_wpggvmr",
        form.current,
        "KB_ewm-VYxvmItmpX"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div className="form_input">
        <input
          type="text"
          placeholder="Enter your full name please..."
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
      </div>
      <div className="form_input">
        <input
          type="email"
          placeholder="Enter your email address..."
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form_input">
        <PhoneInput
          name="phone_number"
          className="form_input_phone"
          placeholder="Enter phone number..."
          value={phoneNumber}
          required
          onChange={(value) => {
            setPhoneNumber(value);
          }}
        />
      </div>

      <div className="form_input">
        <textarea
          rows="10"
          placeholder="Write Message (Want to build a website?)"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="btn_holder">
        <button className="submit_btn" type="submit">
          Submit
        </button>
        <button className="clear_btn" onClick={clearAll}>
          Clear
        </button>
      </div>
      {isMessageSent && (
        <div className="message_banner">
          <span className="message_banner_text">
            <Cancel
              className="message_banner_icon"
              onClick={() => setIsMessageSent(false)}
            />
            Message sent to Qayyum Ibrahim 🚀
          </span>
        </div>
      )}
    </form>
  );
};

export default Form;

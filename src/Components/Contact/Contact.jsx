import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  // simple web3 form used for contact email used = ameyshrotri77@gmail.com
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "249b191e-f4c1-45de-8f3e-ff1d5f72e5df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We value your feedback and are here to assist with any inquiries.
          Please fill out our contact form for questions, support, or comments.
          Our team is dedicated to providing prompt and helpful responses to
          ensure your experience with us is positive and productive. We look
          forward to connecting with you!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@greatstack.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            placeholder="Enter your message..."
            rows="6"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

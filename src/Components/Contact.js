import React, { useState } from "react";
import vector from "../images/vector_contact.png";
import dev from "../images/developer_sitting.png";
import Alert from "./Alert";

function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const submit_form = (e) => {
    e.preventDefault();
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.message.value = "";

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-vector">
        <div className="vector-image"></div>
        <div className="contact-title">
          <h3 className="contact-head">Contact</h3>
          <div className="bar"></div>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-section">
          <div className="form-image">
            <img src={dev} alt="Developer" />
          </div>
          <div className="form">
            {showAlert && (
              <Alert message="Message Sent Successfully" type="success" />
            )}
            <form
              onSubmit={submit_form}
              action=""
              className="contact_form"
              id="contact_form"
            >
              <p className="form-title">Have a question? I have answers.</p>

              <div className="input-group">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="Contact No. (Optional)"
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

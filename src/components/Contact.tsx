import React, { useState } from "react";

const Contact: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <>
      {/* Contact Section Start */}
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>
        <div className="contact-email">
          <i className="bx bx-envelope"></i>
          <a href="mailto:aabr2612@gmail.com">aabr2612@gmail.com</a>
        </div>

        {/* Contact Form */}
        <form id="contact-form" onSubmit={handleSubmit}>
          {/* Input Box */}
          <div className="input-box">
            {/* Name Input */}
            <div className="input-field">
              <input type="text" name="name" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            {/* Email Input */}
            <div className="input-field">
              <input type="email" name="email" placeholder="Email" required />
              <span className="focus"></span>
            </div>
          </div>
          {/* Input Box */}
          <div className="input-box">
            {/* Contact Number Input */}
            <div className="input-field">
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                required
              />
              <span className="focus"></span>
            </div>
            {/* Email Subject */}
            <div className="input-field">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          {/* Message Textarea */}
          <div className="textarea-field">
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>
          {/* Submit Button */}
          <div className="btn-box btns">
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>

        {showNotification && (
          <div
            id="notification"
            className="notification"
            style={{ display: "block" }}
          >
            Message sent successfully!
          </div>
        )}
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default Contact;

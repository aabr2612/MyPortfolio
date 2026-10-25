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
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="heading">
            Contact <span>Me</span>
          </h2>
        </div>

        <div className="contact-email">
          <i className="bx bx-envelope"></i>
          <a href="mailto:aabr2612@gmail.com">aabr2612@gmail.com</a>
        </div>

        {/* Contact Form */}
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
              />
            </div>
          </div>

          <div className="textarea-field">
            <textarea
              name="message"
              cols={30}
              rows={7}
              placeholder="Tell me about your project or opportunity..."
              required
            ></textarea>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">
              <i className="bx bx-paper-plane"></i> Send Message
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

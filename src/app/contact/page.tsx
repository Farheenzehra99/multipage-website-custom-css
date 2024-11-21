"use client";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section>
      <div className="contact-bg">
        <h1 className="contact-title">
          Contact{" "}
          <span className="contact-highlight">Me</span>
        </h1>
        <form className="contact-form">
          <div className="form-grid">
            {/* Left Side */}
            <div className="form-left">
              <div>
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="form-input"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="form-right">
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="form-textarea"
                />
              </div>
              <button type="submit" className="submit-btn">
                <a href="mailto:farheen11099@gmail.com">Send Message</a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

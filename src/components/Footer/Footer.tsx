
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 3, name: "About", link: "/#" },
  { id: 2, name: "Services", link: "/#" },
  { id: 4, name: "Contact", link: "/#" },
];

function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-overlay">
        <div className="footer-container">
          <div className="footer-section">
            <a className="footer-logo">CoffeeLover</a>
            <p className="footer-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              tempore ea, illo cumque corporis expedita nulla numquam
            </p>
            <a
              className="footer-button"
              href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/"
            >
              Follow us
            </a>
          </div>

          <div className="footer-links-container">
            <div className="footer-section">
              <h1 className="footer-heading">Important Links</h1>
              <ul className="footer-menu">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a className="footer-link" href={data.link}>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h1 className="footer-heading">Address</h1>
              <div className="footer-contact-info">
                <p>Hyderabad Pakistan</p>
                <p>+92 1234567890</p>
              </div>

              <div className="footer-social-icons">
                <a href="https://www.facebook.com/profile.php?id=61552506270420">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.instagram.com/farheen11099/">
                  <FaInstagram className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-rights">
          &copy; {new Date().getFullYear()} Syeda Farheen Zehra | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;

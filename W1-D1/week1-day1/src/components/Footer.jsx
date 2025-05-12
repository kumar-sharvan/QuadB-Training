import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4 "
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      <div className="container text-center">
        <hr className="border-light mt-4" />
        <div className="row">
          {/* Address Section */}
          <div className="col-md-6">
            <h5 className="mb-3 text-info">Address</h5>
            <ul
              className="list-unstyled text-start mx-auto"
              style={{ maxWidth: "250px" }}
            >
              <li className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-envelope me-2"></i>
                <a
                  href="mailto:kumarsharvan844506@gmail.com"
                  className="text-light text-decoration-none"
                >
                  kumarsharvan844506@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-phone me-2"></i>
                <a
                  href="tel:7488695863"
                  className="text-light text-decoration-none"
                >
                  +91 7488695863
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="fa-solid fa-location-dot me-2"></i>
                <span>Nayagaon East, Bihar, India - 844506</span>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-6">
            <h5 className="mb-3 text-success">Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light" title="Twitter">
                <FaTwitter size={26} className="text-info" />
              </a>
              <a
                href="https://www.linkedin.com/in/sharvan-kumar-443263320/"
                className="text-light"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={26} className="text-primary" />
              </a>
              <a
                href="https://github.com/kumar-sharvan"
                className="text-light"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={26} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light mt-4" />
        <h4 className="text-success">Made with ❤️ By Sharvan</h4>
      </div>
    </footer>
  );
};

export default Footer;

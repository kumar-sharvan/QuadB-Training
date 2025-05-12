import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      errors.phone = "Phone number must be at least 10 digits";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_23qb8pc", // Replace with your EmailJS Service ID
          "template_x2mzeag", // Replace with your EmailJS Template ID
          formData,
          "Lsyh0t-i2TrMt160C" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response);
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.error("Error sending email:", error);
            setStatus("Failed to send message. Try again later.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="py-5 text-center bg-dark text-white"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      <div className="container">
        <h2 className="section-title mb-4 text-info">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-4 bg-secondary text-white rounded shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control bg-dark text-white border-0 shadow-sm ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control bg-dark text-white border-0 shadow-sm ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control bg-dark text-white border-0 shadow-sm ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Message</label>
                  <textarea
                    name="message"
                    className={`form-control bg-dark text-white border-0 shadow-sm ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg shadow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {status && <p className="mt-3">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

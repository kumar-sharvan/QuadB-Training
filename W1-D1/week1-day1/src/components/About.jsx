import React from "react";
import boy from "../assets/boy.svg";

function About() {
  return (
    <section
      id="about"
      className="d-flex align-items-center"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        color: "#fff",
        padding: "6rem 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Side (Text Content) */}
          <div
            className="col-lg-6 pe-lg-5"
            style={{
              animation: "fadeInLeft 0.8s ease-out",
            }}
          >
            <h2 className="fw-bold text-info mb-4 display-5">Who I am</h2>
            <p className="lead mb-4 fs-4">
              My name is <span className="text-info">Sharvan Kumar</span>. I'm a
              Full-stack Web Developer.
            </p>
            <div className="about-content" style={{ lineHeight: "1.8" }}>
              <p className="mb-3">
                I have been passionate about new technologies and computers
                since childhood. That's why I chose Computer Science
                Engineering. In college, I realized it was not for me. I
                remember the first time I wrote a code using the C language;
                words failed to express how I felt in that moment.
              </p>
              <p className="mb-0 fst-italic text-muted">
                It was the turning point in my life.
              </p>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div
            className="col-lg-6 d-flex justify-content-center"
            style={{
              animation: "fadeInRight 0.8s ease-out",
            }}
          >
            <img
              src={boy}
              alt="About Sharvan Kumar"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                maxWidth: "80%",
                filter: "drop-shadow(0 0 20px rgba(13, 202, 240, 0.3))",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import boy_home from "../assets/boy_home.png";
import resume from "../assets/resume3.pdf";

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center min-vh-100 bg-dark text-white position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        padding: "80px 0",
      }}
    >
      {/* Animated background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div
          className="position-absolute top-20 start-20 rounded-circle bg-primary"
          style={{ width: "300px", height: "300px", filter: "blur(80px)" }}
        ></div>
        <div
          className="position-absolute bottom-10 end-10 rounded-circle bg-info"
          style={{ width: "400px", height: "400px", filter: "blur(100px)" }}
        ></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div
            className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0"
            data-aos="fade-right"
          >
            <h4 className="text-info mb-3">Full-stack Web Developer</h4>
            <h1
              className="fw-bold display-4 mb-4"
              style={{ lineHeight: "1.2" }}
            >
              Hi, I'm <span className="text-info">Sharvan</span> Kumar
            </h1>
            <p className="lead mb-4 opacity-75" style={{ maxWidth: "500px" }}>
              My passion for software lies with dreaming up ideas and making
              them come true with elegant interfaces. I take great care in the
              experience, architecture, and code quality of the things I build.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a
                href={resume}
                className="btn btn-outline-info px-4 py-2 rounded-pill"
                download={resume}
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="btn btn-info px-4 py-2 rounded-pill"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="position-relative d-inline-block">
              <div
                className="rounded-circle overflow-hidden border border-4 border-info border-opacity-25"
                style={{
                  width: "300px",
                  height: "300px",
                  margin: "auto",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={boy_home}
                  alt="Sharvan Kumar"
                  className="img-fluid h-100 w-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{ background: "linear-gradient(to right, #1a2980, #26d0ce)" }}
    >
      <div className="container">
        <a className="navbar-brand fs-4 fw-bold" href="#">
          Sharvan Kumar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-white hover-primary fs-4 fw-bold"
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white hover-primary fs-4 fw-bold"
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white hover-primary fs-4 fw-bold"
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white hover-primary fs-4 fw-bold"
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

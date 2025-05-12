import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import book from "../assets/book.png";
import gemini from "../assets/gemini.png";
import note from "../assets/note.png";

const projects = [
  {
    title: "Notes App",
    image: note, // Use the correct image import
    description:
      "The Notes App is a simple and efficient tool for organizing thoughts, to-do lists, and important ideas. Users can create, edit, delete, and save notes in real time.",
    tech: ["React", "Node", "Express", "MongoDB"],
    playLink: "https://notes-app-jywp.onrender.com/",
    githubLink: "https://github.com/kumar-sharvan/Notes-App",
  },
  {
    title: "BookStore App",
    image: book, // Use the correct image import
    description:
      "The BookStore App is an online platform where users can browse, search, and purchase books across various genres. It includes features like search, user authentication, and shopping cart.",
    tech: ["React", "Node", "Express", "MongoDB"],
    playLink: "https://bookstoreapp-client.onrender.com/",
    githubLink: "https://github.com/kumar-sharvan/bookStoreApp",
  },
  {
    title: "Gemini Clone",
    image: gemini, // Use the correct image import
    description:
      "The Gemini Clone is an AI-powered chatbot that provides instant answers, text generation, and automation using NLP. It supports voice and text input.",
    tech: ["React", "Bootstrap", "API"],
    playLink: "https://geminiclone-cv0o.onrender.com/", // Replace with actual live demo link
    githubLink: "https://github.com/kumar-sharvan/GeminiClone", // Replace with actual GitHub repo link
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-5 text-center bg-dark text-white"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      <div className="container">
        <h2 className="section-title mb-4 text-info display-4 fw-bold">
          Projects
        </h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card project-card bg-teal text-white h-100">
                <div className="card-body d-flex flex-column text-dark">
                  <h3 className="card-title">{project.title}</h3>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid mb-3 rounded"
                    style={{ height: "200px", objectFit: "cover" }} // Fixed height & fit
                  />
                  <p className="card-text flex-grow-1 text-dark">
                    {project.description}
                  </p>
                  <div className="tech-stack mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-light text-dark">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-icons mt-auto d-flex justify-content-between">
                    {/* Play (Live Project) Button */}
                    <a
                      href={project.playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light rounded-circle me-2"
                    >
                      <i className="fas fa-play"></i>
                    </a>

                    {/* GitHub (Source Code) Button */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light rounded-circle"
                    >
                      <i className="fas fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

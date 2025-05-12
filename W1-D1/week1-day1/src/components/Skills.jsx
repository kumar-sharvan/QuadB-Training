import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "NPM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-5 text-center text-white"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      <div className="container">
        <h2 className="section-title mb-4 text-info">Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-md-3 col-sm-4 col-6 mb-4" key={index}>
              <div className="card skill-card text-center">
                <div className="card-body">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo mb-2"
                  />
                  <p className="mb-0">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

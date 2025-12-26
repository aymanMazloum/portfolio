import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

/* =======================
   Projects Data
======================= */
const projectsData = [
  {
    title: "Cipherkey App",
    description: "Angular & Firebase Cipherkey App",
    image: "/assets/cipherkey.png",
    liveLink: "https://cipherkeyy.netlify.app/",
    githubLink: "#",
  },
  {
    title: "Personal Portfolio",
    description: "My own React portfolio website",
    image: "/assets/portfolio.png",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce Mini App",
    description: "Products + Cart + Firebase backend",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    liveLink: "#",
    githubLink: "#",
  },
];

/* =======================
   Single Project Card
======================= */
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.06)
    `;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <Col md={6} lg={4} data-aos="fade-up">
      <div
        className="project-card tilt-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
        />

        <div className="overlay">
          
          <h5>{project.title}</h5>
          <p>{project.description}</p>

          <div className="mt-2">
            <Button
              variant="primary"
              className="me-2"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              disabled={project.liveLink === "#"}
            >
              Live
            </Button>

            <Button
              variant="outline-light"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              disabled={project.githubLink === "#"}
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

/* =======================
   Projects Section
======================= */
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="projects" className="py-5 bg-light">
      <Container>
        <h2
          className="text-center mb-5"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          My Projects
        </h2>

        <Row className="g-4">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

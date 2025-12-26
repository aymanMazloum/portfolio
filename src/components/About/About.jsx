import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "./About.css";

const About = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

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
      scale(1.05)
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
    <section id="about" className="about-section">
      <Container>
        <h2 className="about-title">About Me</h2>

        <div className="about-card">
          <Row className="align-items-center g-5">

            <Col md={5}>
              <div
                className="image-wrapper tilt-card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="image-glow"></div>
                <img
                  src="/assets/ayman.jpg"
                  alt="Ayman"
                  className="about-image"
                />
              </div>
            </Col>

            {/* النص */}
            <Col md={7}>
              <p className="about-text">
                Hi, I’m <span className="highlight">Ayman</span> 👋  
                A passionate Software Developer specialized in React & Firebase.
              </p>
              <p className="about-text">
                I build modern, performant, and visually polished applications.
              </p>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;

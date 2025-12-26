// src/components/FluffyHero.jsx
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fluffy-hero-section vh-100 d-flex justify-content-center align-items-center text-center">
      <Container className={`fluffy-card ${showContent ? 'fade-in' : ''}`}>
        <h1 className="fluffy-text">Hi, I'm <span className="my_name">Ayman</span></h1>
        <h2 className="fluffy-subtitle">
          I'm a
          <span className="writer fluffy-text-writer">
            <Typewriter
              words={[' Software Developer', ' Web & Mobile Apps']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <div className="mt-4">
          <Button variant="primary" href="#projects" className="me-2">View Projects</Button>
          <Button variant="outline-light" href="#contact">Contact Me</Button>
        </div>
      </Container>

      {/* Fluffy moving background layers */}
      <div className="fluffy-layer fluffy-layer1"></div>
      <div className="fluffy-layer fluffy-layer2"></div>
      <div className="fluffy-layer fluffy-layer3"></div>
    </div>
  );
};

export default Hero;

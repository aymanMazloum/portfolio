import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTop(true);
      else setShowTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-light py-4 position-relative">
      <Container className="text-center">
        {/* Social Icons */}
        <div className="mb-3">
          <a href="https://github.com/ayman9mazloum" target="_blank" rel="noreferrer" className="text-light mx-2">
            <FaGithub size={25} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-light mx-2">
            <FaLinkedin size={25} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-light mx-2">
            <FaTwitter size={25} />
          </a>
          <a href="https://facebook.com/aymazloum" target="_blank" rel="noreferrer" className="text-light mx-2">
            <FaFacebook size={25} />
          </a>
          <a href="https://instagram.com/ayman5mazloum" target="_blank" rel="noreferrer" className="text-light mx-2">
            <FaInstagram size={25} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0" style={{ fontFamily: 'Roboto, sans-serif' }}>
          &copy; {new Date().getFullYear()} Ayman. All rights reserved.
        </p>

        {/* Back to Top Button */}
        {showTop && (
          <div className="back-to-top" onClick={scrollTop}>
            <FaArrowUp size={20} />
          </div>
        )}
      </Container>
    </footer>
  );
};

export default Footer;

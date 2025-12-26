import React from "react";
import MyNavbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);


  return (
    <>
      <MyNavbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

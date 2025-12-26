import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebase";
import AOS from "aos";
import "aos/dist/aos.css";

const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      await addDoc(collection(db, "contacts"), formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div id="contact" className="py-5 bg-dark text-light">
      <Container data-aos="fade-up">
        <h2 className="text-center mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Me</h2>
        {success && <Alert variant="success">Message sent successfully!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">Send Message</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;

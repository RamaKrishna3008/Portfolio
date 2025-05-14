import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const response = await fetch('https://formspree.io/f/mldboqvr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Something went wrong. Try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>mandalaneni.sivaramakrishna@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p>+91 85559 68162</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={24} />
              <div>
                <h3>Location</h3>
                <p>Guntur, India</p>
              </div>
            </div>

</div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};


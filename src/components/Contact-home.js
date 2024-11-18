import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact-home.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    option: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      option: formData.option,
      projectDetails: formData.projectDetails,
    };

    // Send the email
    emailjs.send(
      'service_kbejay6',      // Replace with your EmailJS service ID
      'template_qdvopnf',      // Replace with your EmailJS template ID
      templateParams,
      'TISMraFfv-i5gAsXB'           // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
    }).catch((error) => {
      console.log('FAILED...', error);
      alert("Failed to send the message.");
    });

    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      option: '',
      projectDetails: ''
    });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-info">
        <h1>The design & dev agency you've been looking for.</h1>
        <p className='text1' style={{ marginTop: '20px', color:'white' }}>Ready to elevate your online presence? Drop us a message below, and let’s start a conversation about your website.</p>
        <p style={{ marginTop: '20px', color:'black' }}><strong>Let's chat: +91 8368327503</strong></p>
        <ul>
          <li>Best Design</li>
          <li>Results Driven</li>
          <li>Problem Solving</li>
          <li>Transparent</li>
          <li>Independent</li>
          <li>Competent</li>
        </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Become a client</h2>
      <div className="input-group">
        <div className="input-box">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="input-box">
        <label>Company email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-box">
        <label>How did you find Rompweb?</label>
        <select
          name="option"
          value={formData.option}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Option</option>
          <option value="Google">Google</option>
          <option value="Referral">Referral</option>
          <option value="Social Media">Social Media</option>
        </select>
      </div>
      <div className="input-box">
        <label>Project Details</label>
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows="5"
          placeholder="To better assist you, please describe how we can help..."
          required
        />
      </div>
      <button type="submit" className="submit-btn">Send a message</button>
    </form>
    </div>
  );
};

export default ContactForm;

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './Contact.module.css';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);

  // Expose open/close methods to parent
  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false)
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setIsOpen(false);
    // Add your backend/email hook here
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              onChange={handleChange}
              className={styles.inputField}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              onChange={handleChange}
              className={styles.inputField}
            />
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your message..." 
              required 
              onChange={handleChange}
              className={styles.textArea}
            ></textarea>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    )
  );
});

export default Contact;
import React from 'react';
import styles from './Header.module.css';

const Header = ({ contactRef }) => {
  const handleContactClick = (e) => {
    e.preventDefault();
    contactRef.current.openModal();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Pharaoh</div>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#blog">Blog</a></li>
          <li>
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className={styles.navLink}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
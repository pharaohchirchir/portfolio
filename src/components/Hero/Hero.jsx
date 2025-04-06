import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        {/* Left Section - Content */}
        <div className={styles.contentColumn}>
          <motion.div
            className={styles.textGroup}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>
              Transforming Raw Data<br />
              <span className={styles.highlight}>Into Strategic Insights</span>
            </h1>

            <p className={styles.subtitle}>
              I am an experienced Data Analyst bridging the gap between complex dataset and actionable insights that drive strategic decision-making and organizational growth.
            </p>

            <div className={styles.ctaGroup}>
              <motion.a
                href="#projects"
                className={styles.primaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <svg className={styles.ctaIcon} viewBox="0 0 24 24">
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://chirchirp.github.io/resume/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Resume
                <svg className={styles.ctaIcon} viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Profile & Education */}
        <motion.div 
          className={styles.profileColumn}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Photo */}
          <div className={styles.profileCard}>
            <div className={styles.profileImage} />
          </div>

          {/* Education Section */}
          <div className={styles.educationCard}>
            <h2 className={styles.educationTitle}>Education</h2>
            <div className={styles.educationList}>
              <div className={styles.educationItem}>
                <h3>Master of Science in Data Analytics</h3>
                <p className={styles.institution}>Nexford University</p>
                <p className={styles.duration}>Nov 2023 – Dec 2024</p>
              </div>

              <div className={styles.educationItem}>
                <h3>Bachelor of Economics and Statistics</h3>
                <p className={styles.institution}>Chuka University</p>
                <p className={styles.duration}>Sep 2012 – Nov 2016</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
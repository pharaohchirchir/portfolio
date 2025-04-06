import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: 'Sales Data Analysis',
      description: 'Analyzed sales data to uncover revenue trends and customer behavior insights.',
      skills: ['SQL', 'Excel', 'Power BI'],
      link: 'https://github.com/Chirchirp/Sales-Data-Analysis',
      image: 'https://img.lovepik.com/photo/50063/6351.jpg_wh860.jpg'
    },
    {
      title: 'AI Trends & Insights',
      description: 'Evaluated global AI growth and its impact across industries using visual analytics.',
      skills: ['Python', 'Pandas', 'Data Visualization', 'Statistics'],
      link: 'https://github.com/Chirchirp/The-Rise-of-Artificial-Intelligence-Trends-Impact-and-Insights.ipynb',
      image: 'https://th.bing.com/th/id/OIP.EfnkrQ3bhMPBY9sKNlTwIgHaF_?rs=1&pid=ImgDetMain'
    },
    {
      title: 'Consumer Insights for Beats',
      description: 'Segmented user data to uncover listening patterns with visual storytelling.',
      skills: ['Python', 'Pandas', 'Matplotlib'],
      link: 'https://colab.research.google.com/drive/1XNxkdTQ6K0fG2OkM0QLvi35e9zQ_1ODe?usp=sharing',
      image: 'https://img.lovepik.com/photo/50031/3401.jpg_860.jpg'
    },
    {
      title: "Customer Churn Prediction",
      description: "XGBoost model with 89% accuracy and a Flask API for deployment.",
      skills: ["Python", "XGBoost", "Flask"],
      link: "https://github.com/Chirchirp/Final-Project--Model-Deployment",
      image: "https://miro.medium.com/v2/resize:fit:1358/1*iJUr0X5H_rZz6WGa1Gv35A.jpeg"
    },
    {
      title: "Fraud Detection Model",
      description: "ML models identifying fraudulent transactions with a 97% recall rate.",
      skills: ["Python", "Logistic Regression", "Isolation Forest"],
      link: "https://colab.research.google.com/drive/1ISRR1X1zJjAfEP9fE-_q_JMjLkc1YIa3?usp=sharing",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "HR Analytics Dashboard",
      description: "Interactive Power BI dashboard tracking key HR metrics.",
      skills: ["Power BI", "DAX"],
      link: "https://github.com/Chirchirp/Power-BI-Project-on-Employee-Attrition",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "SQL Data Mining",
      description: "Complex queries for cleaning, transforming and reporting data.",
      skills: ["SQL", "Data Mining"],
      link: "https://github.com/Chirchirp/Data-Analysis-with-SSMS",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=60"
    }
  ];

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      
      <div className={styles.grid}>
        {visibleProjects.map((project, index) => (
          <div 
            key={`${project.title}-${index}`}
            className={`${styles.card} ${styles.fadeIn}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.cardImage}
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.skills}>
              <strong>Skills:</strong>
              <div className={styles.skillTags}>
                {project.skills.map(skill => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.projectLink}
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {allProjects.length > 3 && (
        <div className={styles.moreProjects}>
          <button 
            onClick={() => setShowAll(prev => !prev)}
            className={styles.viewAllProjectsBtn}
            aria-expanded={showAll}
          >
            {showAll 
              ? 'Minimize Projects ↑'
              : `View All Projects (${allProjects.length - 3} hidden) →`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;

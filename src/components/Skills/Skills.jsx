import React from 'react';
import styles from './Skills.module.css';

// Sample icons (replace with your own paths or SVG imports)
import pythonIcon from '../../assets/icons/python.png';
import postgresIcon from '../../assets/icons/postgres.png';
import mssqlIcon from '../../assets/icons/mssql.png';
import dockerIcon from '../../assets/icons/docker.png';
import RIcon from '../../assets/icons/r.png';
import gitIcon from '../../assets/icons/git.png';

import communicationIcon from '../../assets/icons/communication.png';
import teamworkIcon from '../../assets/icons/teamwork.png';
import adaptabilityIcon from '../../assets/icons/adaptability.png';
import criticalThinkingIcon from '../../assets/icons/thinking.png';

const Skills = () => {
  // You can add or remove skills as needed
  const technicalSkills = [
    { name: 'Python', icon: pythonIcon },
    { name: 'Postgres', icon: postgresIcon },
    { name: 'MSSQL', icon: mssqlIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'R', icon: RIcon },
    { name: 'Git', icon: gitIcon },
  ];

  const softSkills = [
    { name: 'Communication', icon: communicationIcon },
    { name: 'Teamwork', icon: teamworkIcon },
    { name: 'Adaptability', icon: adaptabilityIcon },
    { name: 'Critical Thinking', icon: criticalThinkingIcon },
  ];

  return (
      
    <section className={styles.skills} id="skills">
      <h2 className={styles.sectionTitle}>Skills</h2>
      {/* Technical Skills */}
      <div className={styles.skillsSection}>
        <h3 className={styles.sectionSubtitle}>Technical Skills</h3>
        <ul className={styles.skillsList}>
          {technicalSkills.map((skill) => (
            <li key={skill.name} className={styles.skillItem}>
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className={styles.skillIcon}
              />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Soft Skills */}
      <div className={styles.skillsSection}>
        <h3 className={styles.sectionSubtitle}>Soft Skills</h3>
        <ul className={styles.skillsList}>
          {softSkills.map((skill) => (
            <li key={skill.name} className={styles.skillItem}>
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className={styles.skillIcon}
              />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

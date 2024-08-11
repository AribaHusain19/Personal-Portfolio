import React from "react";

import styles from "./About.module.css";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
              Skilled in creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.js. I focus on crafting intuitive user experiences and have experience with Material-UI and Bootstrap for design and styling.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
              Proficient in developing robust backend systems using Node.js and Express.js. I handle server-side logic, API development, and database management with MongoDB. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Structures & Algorithms (DSA)</h3>
              <p>
              Strong foundation in DSA, with practical experience in solving complex problems efficiently. I've tackled over 800 problems on GeeksforGeeks, showcasing my problem-solving abilities and optimizing algorithms for better performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
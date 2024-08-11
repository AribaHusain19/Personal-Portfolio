import React from "react";

import styles from "./Contact.module.css";
import email from "../../assets/contact/emailIcon.png";
import github from "../../assets/contact/githubIcon.png";
import linkedIn from "../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:aribahusain1908@email.com">aribahusain1908@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedIn}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ariba-husain-2b2aa3234">linked.com/Ariba Husain</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/AribaHusain19">github.com/AribaHusain19</a>
        </li>
      </ul>
    </footer>
  );
};
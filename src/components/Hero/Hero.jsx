
import React from "react";

import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ariba</h1>
        <p className={styles.description}>
        A dedicated full-stack Web developer with expertise in JavaScript, React.js, Node.js, and MongoDB
        along with strong background in Data Structures and Algorithms.

        </p>
        <a href="mailto:aribahusain1908@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

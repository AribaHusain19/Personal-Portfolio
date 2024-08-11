

import React from 'react';
import styles from "./Skills.module.css";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import node from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";
import mongodb from "../../assets/skills/mongodb.png";
import javascript from "../../assets/skills/javascript.png";
import express from "../../assets/skills/express.png";
import c from "../../assets/skills/c.png";
import cpp from "../../assets/skills/c++.png";
import MySQL from "../../assets/skills/MySQL.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import Tailwind from "../../assets/skills/tailwind.png";

const skillsData = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JavaScript" },
  { img: react, name: "React.js" },
  { img: node, name: "Node.js" },
  { img: express, name: "Express.js" },
  { img: mongodb, name: "MongoDB" },
  { img: MySQL, name: "MySQL" },
  { img: bootstrap, name: "Bootstrap" },
  { img: Tailwind, name: "Tailwind CSS" },
  { img: c, name: "C" },
  { img: cpp, name: "C++" },
];

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.grid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={skill.img} alt={skill.name} className={styles.skillImage} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

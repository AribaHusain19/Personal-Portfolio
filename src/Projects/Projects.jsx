


import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

// Importing project images from the assets folder
import currency from "../assets/projects/currency_converter.png";
import petpals from "../assets/projects/petpals.png";
import Rock_Paper from "../assets/projects/Rock Paper Scissor.png";
import tictactoe from "../assets/projects/tic-tac-toe.png";
//import project3Image from "../assets/projects/project3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Petpals",
      imageSrc: petpals,
      description: "A fullStack webapp for pet adoption,with detailed petprofiles and adoption process.",
      skills: ["React","node","express","mongoDB"],

    },
    {
      title: "Currency Converter",
      imageSrc: currency,
      description: "A web app for quick and easy currency conversions with real-time exchange rates.",
      skills: ["HTML", "CSS", "JavaScript"],
   
    },
 
    {
      title: "Rock Paper Scissor",
      imageSrc: Rock_Paper,
      description: "A classic game that lets users play the classic rock-paper-scissors game against the computer.",
      skills: ["HTML", "CSS", "JavaScript"],
      
    },
    {
      title: "Tic Tac Toe",
      imageSrc:tictactoe,
      description: "A simple game for two players to compete in classic tic-tac-toe in a user friendly interface.",
      skills: ["HTML", "CSS", "JavaScript"],
      
    }
    // Add more projects as needed
  ];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};


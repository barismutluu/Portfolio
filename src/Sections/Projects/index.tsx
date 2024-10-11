import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

import ProjectCard from "../../Components/ProjectCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import mineSweeperGame from "../../Assets/projects/mineSweeper.png";
import sportCenter from "../../Assets/projects/sportcenter.png";
import veterinary from "../../Assets/projects/veterinary.png";
import tourism from "../../Assets/projects/tourism.png";
import libraryApp from "../../Assets/projects/libraryApp.png";

const projects = [
  {
    image: veterinary,
    title: "Veterinary Management System",
    description: `The Veterinary Management System is an API developed for managing veterinary clinic operations. It allows staff to perform various tasks and can be tested using Swagger UI`,
    link: "",
    gitLink: "https://github.com/barismutluu/Veterinary-Management-System",
    tech: ["Java ", "Spring Boot","Spring Data JPA","Hibernate","Maven"],
  },
  {
    image: mineSweeperGame,
    title: "Mine Sweeper Game",
    description: `The text-based MineSweeper game is implemented using a 2D array, where users specify matrix dimensions and mines are randomly placed. The game ends when the user selects a mine, while successfully opening all safe cells leads to a win..`,
    link: "",
    gitLink: "https://github.com/barismutluu/MineSweeperGame",
    tech: ["Java"],
  },
  {
    image: sportCenter,
    title: "Sport Center",
    description: `The responsive web page for the sports center that includes a variety of classes, top trainers, a BMI calculator and an active Google Map.`,
    link: "https://sport-center-ten.vercel.app/",
    gitLink: "https://github.com/barismutluu/SportCenter",
    tech: ["HTML","CSS","JavaScript"],
  },
  {
    image: tourism,
    title: "Tourism Agency Application",
    description: `This project was developed to digitalize the daily operations of the Tourism Agency and optimize customer reservation processes.`,
    link: "",
    gitLink: "https://github.com/barismutluu/TurizmAcenteSistemi",
    tech: ["Java", "PostgreSQL","Swagger API"],
  },
  {
    image: libraryApp,
    title: "Library App",
    description: `No authentication is needed, so everyone can try the page without providing any information. 
LibraryApp is a library management system that enables users to perform CRUD operations for Publisher, Category, Book, Author, and Book Purchase. It is a Single Page Application (SPA) built with React Router.`,
    link: "https://amazing-zuccutto-1606de.netlify.app/",
    gitLink: "https://github.com/barismutluu/LibraryApp",
    tech: ["React", "React Router", "Bootstrap", "Tailwind Css"],
  },
];

function Projects() {
  return (
    <div id="projects" className="pr-12 xl:p-0">
      <h1 className="w-screen text-center text-4xl text-shadows-100 pt-24 pb-12 font-bold ">
        Projects
      </h1>
      <VerticalTimeline lineColor="#595DE5" className="">
        {projects.map((item, key) => (
          <ProjectCard key={key} props={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Projects;

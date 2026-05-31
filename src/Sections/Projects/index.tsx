import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

import ProjectCard from "../../Components/ProjectCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import libraryApp from "../../Assets/projects/libraryApp.png";
import mineSweeperGame from "../../Assets/projects/mineSweeper.png";
import sportCenter from "../../Assets/projects/sportcenter.png";
import tourism from "../../Assets/projects/tourism.png";
import veterinary from "../../Assets/projects/veterinary.png";

const projects = [
  {
    title: "Selenium Web Test Automation Framework",
    description: `A Java and Selenium WebDriver automation framework for an end-to-end Kitapyurdu user flow. It uses Page Object Model, JUnit 5, Maven, WebDriverManager, Log4j2, ordered test execution and reusable page actions for maintainable UI test automation.`,
    gitLink: "https://github.com/barismutluu/Selenium-Web-Otomasyon-Proje-odevi",
    category: "Test Automation",
    tech: ["Java", "Selenium WebDriver", "JUnit 5", "Maven", "POM", "Log4j2"],
  },
  {
    title: "A101 Test Automation Practicum - Final Case",
    description: `A Selenium-based e-commerce test automation project covering real user flows on Hepsiburada. The cases validate login and guest checkout paths, product search, adding products from different sellers and cart verification.`,
    gitLink: "https://github.com/barismutluu/A101-Practicum-Final-Case",
    category: "Test Automation",
    tech: ["Java", "Selenium", "JUnit", "TestNG", "Maven", "POM"],
  },
  {
    title: "Mini Billing & Charging API",
    description: `A backend API concept for telecom-style billing and charging operations. It focuses on customer balance tracking, charge calculation, usage records and clean REST endpoints that reflect real business workflows.`,
    gitLink: "https://github.com/barismutluu/mini-billing-charging-api",
    category: "Backend API",
    tech: ["Java", "Spring Boot", "REST API", "PostgreSQL", "Swagger"],
  },
  {
    title: "Telecom CRM API",
    description: `A CRM-focused backend API for managing telecom customers, subscriptions, products and service lifecycle operations. It is a stronger portfolio signal because it models a real domain instead of generic CRUD only.`,
    gitLink: "https://github.com/barismutluu/telecom-crm-api",
    category: "Backend API",
    tech: ["Java", "Spring Boot", "REST API", "PostgreSQL", "CRM"],
  },
  {
    title: "Task Manager API",
    description: `A task management REST API covering users, tasks, status tracking and CRUD operations. It is a practical backend project for showing layered API design, validation and maintainable service structure.`,
    gitLink: "https://github.com/barismutluu/task-manager-api",
    category: "Backend API",
    tech: ["Java", "Spring Boot", "REST API", "Validation", "PostgreSQL"],
  },
  {
    title: "Product Carousel",
    description: `A responsive product carousel that fetches product data, caches it in localStorage, persists favorite selections, calculates discount labels and provides manual and automatic slider controls.`,
    gitLink: "https://github.com/barismutluu/ProductCarousel",
    category: "Frontend",
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage", "Fetch API"],
  },
  {
    image: veterinary,
    title: "Veterinary Management System",
    description: `The Veterinary Management System is an API developed for managing veterinary clinic operations. It allows staff to perform various tasks and can be tested using Swagger UI.`,
    gitLink: "https://github.com/barismutluu/Veterinary-Management-System",
    category: "Backend API",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "Maven"],
  },
  {
    image: mineSweeperGame,
    title: "Mine Sweeper Game",
    description: `The text-based MineSweeper game is implemented using a 2D array, where users specify matrix dimensions and mines are randomly placed. The game ends when the user selects a mine, while successfully opening all safe cells leads to a win.`,
    gitLink: "https://github.com/barismutluu/MineSweeperGame",
    category: "Java",
    tech: ["Java"],
  },
  {
    image: sportCenter,
    title: "Sport Center",
    description: `The responsive web page for the sports center that includes a variety of classes, top trainers, a BMI calculator and an active Google Map.`,
    link: "https://sport-center-ten.vercel.app/",
    gitLink: "https://github.com/barismutluu/SportCenter",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: tourism,
    title: "Tourism Agency Application",
    description: `This project was developed to digitalize the daily operations of the Tourism Agency and optimize customer reservation processes.`,
    gitLink: "https://github.com/barismutluu/TurizmAcenteSistemi",
    category: "Desktop / Backend",
    tech: ["Java", "PostgreSQL", "Swagger API"],
  },
  {
    image: libraryApp,
    title: "Library App",
    description: `LibraryApp is a library management system that enables users to perform CRUD operations for Publisher, Category, Book, Author, and Book Purchase. It is a Single Page Application built with React Router.`,
    link: "https://amazing-zuccutto-1606de.netlify.app/",
    gitLink: "https://github.com/barismutluu/LibraryApp",
    category: "Frontend",
    tech: ["React", "React Router", "Bootstrap", "Tailwind CSS"],
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

import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import CSS from "../../Assets/tech/css.png";
import GIT from "../../Assets/tech/git.png";
import GITHUB from "../../Assets/tech/github.png";
import HTML from "../../Assets/tech/html.png";
import JAVA from "../../Assets/tech/Java.png";
import JS from "../../Assets/tech/javascript.png";
import MONGODB from "../../Assets/tech/mongodb.png";
import REACTJS from "../../Assets/tech/reactjs.png";
import SPRING from "../../Assets/tech/Spring.png";
import Skills, { type Skill } from "./Skills";
import TAILWIND from "../../Assets/tech/tailwind.png";
import {
  SiApachemaven,
  SiJunit5,
  SiPostgresql,
  SiSelenium,
  SiTypescript,
} from "react-icons/si";

const skills: Skill[] = [
  { name: "Java", image: JAVA },
  { name: "Spring Boot", image: SPRING },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Selenium WebDriver", icon: SiSelenium, color: "#43b02a" },
  { name: "JUnit 5", icon: SiJunit5, color: "#25a162" },
  { name: "Maven", icon: SiApachemaven, color: "#c71a36" },
  { name: "React", image: REACTJS },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", image: JS },
  { name: "MongoDB", image: MONGODB },
  { name: "Git", image: GIT },
  { name: "GitHub", image: GITHUB },
  { name: "Tailwind CSS", image: TAILWIND },
  { name: "CSS", image: CSS },
  { name: "HTML", image: HTML },
];

function About() {
  return (
    <div className="flex flex-col w-full lg:w-1/3 justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full md:pt-48">
        <div className="text-4xl tracking-wide whitespace-nowrap md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-serif text-shadows-100 text-center lg:text-left relative lg:bottom-24 bottom-0 w-full">
          <h1>
            <span className="sr-only">
              Barış Mutlu - Java Backend Developer ve Test Otomasyonu
            </span>
            <TypeAnimation
              sequence={[
                ".",
                200,
                "..",
                200,
                "...",
                200,
                "Hi!",
                1000,
                "Hi! I am",
                500,
                "Hi! I'm Baris",
                2000,
                "Hi! I'm Baris Mutlu",
                500,
                "Hi! I'm Baris",
              ]}
              wrapper="span"
              cursor={false}
              repeat={0}
              style={{ height: "1em" }}
            />
          </h1>
          <div className=" text-2xl md:text-3xl tracking-wide font-bold font-serif text-shadows-100">
            <TypeAnimation
              sequence={[7500, "a Software Developer", 700, "a Backend API Developer"]}
              wrapper="p"
              cursor={false}
              repeat={0}
            />
          </div>
        </div>
        <p className="lg:w-full w-9/12 mt-24 lg:mt-12 lg:text-left tracking-widest px-6 md:px-0 text-xl text-shadows-100 font-bold relative lg:bottom-24">
          Self learner focused on software development, backend APIs and
          practical domain-driven projects. I build REST APIs with Java and
          Spring Boot, model workflows such as telecom CRM and billing, and also
          care about software quality through test automation practices.
        </p>
      </div>
      <div
        className="flex justify-center items-center flex-wrap gap-x-8 gap-y-10 lg:mt-0 mt-8 lg:w-full w-11/12"
        aria-label="Technical skills"
      >
        <Fade cascade direction="up" delay={0.1} triggerOnce>
          {skills.map((item) => {
            return (
              <div key={item.name}>
                <Skills skill={item} />
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}

export default About;

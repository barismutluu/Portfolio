import PP from "./../../Assets/wallpapers/Barış Mutlu Background Removed.png";
import "./styles.css";

function AboutMe() {
  return (
    <div id="about-me" className=" xl:p-0">
      <h3 className="w-screen text-center text-4xl text-shadows-100 pt-24 font-bold pb-4">
        About Me
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-36 p-12">
        <img
          src={PP}
          alt="Profile"
          className=" w-72 max-w-full drop-shadow-2xl profile"
        />
        <div className="max-w-2xl flex flex-col gap-4 pb-20">
          <h3 className="text-3xl text-shadows-100 font-bold">Barış Mutlu</h3>
          <p className="text-justify text-shadows-100 text-xl">
            After completing my education in Computer Engineering and gaining academic experience in computer programming and web design, I chose to pursue a career in software development. During this journey, I have acquired essential skills in HTML, CSS, and JavaScript, and developed strong proficiency in{" "}
            <span className="font-bold">React </span> 
            for frontend development. On the backend, I have focused on{" "}
            <span className="font-bold"> Java </span>,
            utilizing frameworks such as Spring Boot. I have also completed projects including a{" "}
            <span className="font-bold"> Veterinary Management System </span>,
            <span className="font-bold"> MineSweeper Game </span>,
            <span className="font-bold">Tourism Agency Application</span> and{" "}
            <span className="font-bold">LibraryApp</span>, which you can explore in the{" "}
            <a href="#projects" className="underline font-bold">
              Project Section
            </a>
            .
          </p>
          <h4 className="text-2xl text-shadows-100 font-bold">
            My Technical Skills
          </h4>
          <ol className="flex gap-4 lg:gap-x-8 lg:gap-y-2 justify-start items-center flex-wrap">
            <li className="text-shadows-100 bullet">React</li>
            <li className="text-shadows-100 bullet">Angular</li>
            <li className="text-shadows-100 bullet">Django</li>
            <li className="text-shadows-100 bullet">Python</li>
            <li className="text-shadows-100 bullet">JavaScript</li>
            <li className="text-shadows-100 bullet">Spring</li>
            <li className="text-shadows-100 bullet">Java</li>
            <li className="text-shadows-100 bullet">Mongo DB</li>
            <li className="text-shadows-100 bullet">Git</li>
            <li className="text-shadows-100 bullet">Tailwind Css</li>
            <li className="text-shadows-100 bullet">Bootstrap</li>
            <li className="text-shadows-100 bullet">HTML</li>
            <li className="text-shadows-100 bullet">CSS</li>
          </ol>
          <h4 className="text-2xl text-shadows-100 font-bold">
            My Soft Skills
          </h4>
          <ol className="flex gap-4 lg:gap-x-8 lg:gap-y-2 justify-start items-center flex-wrap">
            <li className="text-shadows-100 bullet">Problem Solving</li>
            <li className="text-shadows-100 bullet">Teamwork</li>
            <li className="text-shadows-100 bullet">Effective Communication</li>
            <li className="text-shadows-100 bullet">Creative Thinking</li>
            <li className="text-shadows-100 bullet">Decision Maker</li>
            <li className="text-shadows-100 bullet">Self Learning</li>
            <li className="text-shadows-100 bullet">Self Motivation</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

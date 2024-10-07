import "./styles.css";

import { AiFillMediumCircle } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import resume from "../../Assets/certificates/Baris_MUTLU.pdf";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <div className="bg-onecolor-100 footer" id="links">
      <div className="flex flex-wrap justify-center items-center md:gap-24 gap-4 text-center text-2xl font-bold tracking-widest py-8 md:py-24">
        <a href="https://github.com/barismutluu" target="_blank" rel="noreferrer">
          <div className="relative">
            <div className="logo-div cursor-pointer flex flex-col scale-50 md:scale-100 justify-center items-center">
              <BsGithub size={120} className="mb-4 logo" />
              <h3 data-text="GitHub">GitHub</h3>
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/barissmutlu/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative">
            <div className="logo-div cursor-pointer flex flex-col scale-50 md:scale-100 justify-center items-center">
              <AiOutlineLinkedin size={120} className="mb-4 logo" />
              <h3 data-text="Linkedn">Linkedn</h3>
            </div>
          </div>
        </a>
        <a href="https://medium.com/@baris_mutlu" target="_blank" rel="noreferrer">
          <div className="relative">
            <div className="logo-div cursor-pointer flex flex-col scale-50 md:scale-100 justify-center items-center">
              <AiFillMediumCircle size={120} className="mb-4 logo" />
              <h3 data-text="Medium">Medium</h3>
            </div>
          </div>
        </a>
        <a href={resume} target="_blank" rel="noreferrer">
          <div className="relative">
            <div className="logo-div cursor-pointer flex flex-col scale-50 md:scale-100 justify-center items-center">
              <BsFileEarmarkPdf size={120} className="mb-4 logo" />
              <h3 data-text="Resume">Resume</h3>
            </div>
          </div>
        </a>
      </div>
      <div className="text-white w-screen flex justify-center items-center text-lg tracking-wider pb-2">
        Barış Mutlu - Portfolio Page - {year.toString()}
      </div>
    </div>
  );
}

export default Footer;

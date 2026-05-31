import "react-vertical-timeline-component/style.min.css";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

const WorkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
};

type ProjectCardProps = {
  props: {
    title: string;
    description: string;
<<<<<<< HEAD
    link: string;
    image: string;
    tech: string[];
    gitLink: string;
=======
    link?: string;
    image?: string;
    tech: string[];
    gitLink: string;
    category?: string;
>>>>>>> master
  };
};

function ProjectCard(props: ProjectCardProps) {
<<<<<<< HEAD
  const { title, description, link, image, tech, gitLink } = props.props;
=======
  const { title, description, link, image, tech, gitLink, category } =
    props.props;
>>>>>>> master
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#ffffff55",
        color: "#4144A6",
        boxShadow: "0px 0px 90px 0px #595DE544",
        borderRadius: "20px 0 20px 20px",
        padding: "0",
      }}
      contentArrowStyle={{ borderRight: "24px solid  #ffffff" }}
      date={title}
      dateClassName="vertical-date mx-10"
      iconStyle={{ background: "#A452F2", color: "#fff" }}
      visible={false}
      icon={<WorkIcon />}
      // onTimelineElementClick={() => window.open(`${link}`, "_blank")}
    >
      <figure>
<<<<<<< HEAD
        <img src={image} alt="" className="w-full rounded-t-xl" />
        <blockquote className="blockquote">
=======
        {image ? (
          <img src={image} alt={`${title} preview`} className="w-full rounded-t-xl" />
        ) : (
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-t-xl bg-onecolor-100 px-6 text-center text-white">
            <span className="text-sm font-bold uppercase tracking-widest text-double-300">
              {category || "Project"}
            </span>
            <strong className="mt-3 text-2xl">{title}</strong>
          </div>
        )}
        <blockquote className="blockquote">
          {category && (
            <p className="px-6 pt-5 text-sm font-bold uppercase tracking-widest text-similar-100">
              {category}
            </p>
          )}
>>>>>>> master
          <p className="px-6 text-left">{description}</p>
          {tech && (
            <figcaption className="flex gap-6 justify-center items-middle py-2 flex-wrap">
              {tech.map((item, key) => (
                <span
                  className="bg-main py-1 px-3 rounded-lg text-white"
                  key={key}
                >
                  {" "}
                  {item}{" "}
                </span>
              ))}
            </figcaption>
          )}
          <figcaption className="flex gap-6 justify-center items-middle pt-8 pb-2">
<<<<<<< HEAD
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-white py-1 px-2 md:px-10 rounded-lg text-similar-100 hover:bg-similar-100 font-bold hover:text-white border-2 border-similar-100 transition-all duration-300"
            >
              {" "}
              Live{" "}
            </a>
=======
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="bg-white py-1 px-2 md:px-10 rounded-lg text-similar-100 hover:bg-similar-100 font-bold hover:text-white border-2 border-similar-100 transition-all duration-300"
              >
                Live
              </a>
            )}
>>>>>>> master
            <a
              href={gitLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white py-1 px-2 md:px-10 rounded-lg text-similar-100 hover:bg-similar-100 font-bold hover:text-white border-2 border-similar-100 transition-all duration-300"
            >
              {" "}
              GitHub{" "}
            </a>
          </figcaption>
        </blockquote>
      </figure>
    </VerticalTimelineElement>
  );
}

export default ProjectCard;

import "./styles.css";

import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  image?: string;
  icon?: IconType;
  color?: string;
};

function Skills(props: { skill: Skill }) {
  const { skill } = props;
  const Icon = skill.icon;

  return (
    <div
      className="skills relative flex h-16 w-16 items-center justify-center"
      data-label={skill.name}
      title={skill.name}
      aria-label={skill.name}
    >
      {skill.image && (
        <img
          src={skill.image}
          alt={`${skill.name} logo`}
          className="h-16 w-16 object-contain transition-all duration-500 hover:-translate-y-3"
        />
      )}
      {Icon && (
        <Icon
          aria-hidden="true"
          className="h-14 w-14 transition-all duration-500 hover:-translate-y-3"
          style={{ color: skill.color }}
        />
      )}
    </div>
  );
}

export default Skills;

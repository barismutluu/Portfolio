import "./styles.css";

function Skills(props: { skill: string }) {
  const { skill } = props;
  return (
    <div className="skills w-16" key={`skilldiv${skill}`}>
      <img
        key={`skillimg${skill}`}
        src={skill}
        alt=""
        className="hover:-translate-y-3 transition-all duration-500 "
      />
    </div>
  );
}

export default Skills;

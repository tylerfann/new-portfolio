import { SKILLS } from "@/utils/skills";
const Skills = () => {
  return (
    <div>
      {Object.keys(SKILLS).map((category) => (
        <div className="m-5" key={category}>
          <div key={category}>{category}</div>
          <ul>
            {SKILLS[category].map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;

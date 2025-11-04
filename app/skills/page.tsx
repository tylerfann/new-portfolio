import { SKILLS } from "@/utils/skills";
const Skills = () => {
  return (
    <div>
      {Object.keys(SKILLS).map((category) => (
        <div className="m-5">
          <div key={category}>{category}</div>
          <ul>
            {SKILLS[category].map((skill) => <li>{skill}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;

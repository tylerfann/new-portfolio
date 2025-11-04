import ExperienceCard from "./ExperienceCard";

const ExperienceList = ({ experience }) => (
  <div>
    {experience.map((item) => {
      return <ExperienceCard {...item} key={item.company} />;
    })}
  </div>
);

export default ExperienceList;

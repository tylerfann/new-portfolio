const ExperienceCard = ({ company, location, jobTitle, dates, bulletPoints }) => {
  return (
    <div className="m-5">
      <p>{company}</p>
      <p>{jobTitle}</p>
      <p>{location}</p>
      <p>{dates}</p>
      <ul>
        {bulletPoints.map((point, index) => (
          <li key={`point-${index}`}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
import { SkillProps } from "../skill";

export default function SkillLayout({ skillName, skillValue }: SkillProps) {
  const skillContainerStyle = {
    width: `${skillValue}%`,
  };

  return (
    <>
      <div className="clearfix" role="region" aria-label={`${skillName} skill`}>
        <h4>{skillName}</h4>
        <div className="skill-value" aria-label={`${skillValue} percent proficiency`}>{skillValue}%</div>
      </div>
      <div
        data-value={skillValue}
        className="skill-container"
        role="progressbar"
        aria-valuenow={skillValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skillName} proficiency`}
      >
        <div
          className="skill-percentage"
          style={skillContainerStyle}
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
}

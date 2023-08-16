import { SkillProps } from "../skill";

export default function SkillLayout({ skillName, skillValue }: SkillProps) {
  const skillContainerStyle = {
    width: `${skillValue}%`,
  };

  return (
    <>
      <div className="clearfix">
        <h4>{skillName}</h4>
        <div className="skill-value">{skillValue}%</div>
      </div>
      <div data-value={skillValue} className="skill-container">
        <div className="skill-percentage" style={skillContainerStyle}></div>
      </div>
    </>
  );
}

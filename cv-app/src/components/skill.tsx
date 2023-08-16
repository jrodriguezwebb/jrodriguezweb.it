import SkillLayout from "./theme-components/skill-layout";

export interface SkillProps {
  skillName: string;
  skillValue: number;
}

export default function Skill({ skillName, skillValue }: SkillProps) {
  return (
    <SkillLayout skillName={skillName} skillValue={skillValue}></SkillLayout>
  );
}

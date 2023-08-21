import BlockTitle from "@/components/theme-components/block-title";
import Certificate from "@/components/certificate";
import Column from "@/components/layout/column";
import MainLayout from "@/components/theme-components/main-layout";
import Row from "@/components/layout/row";
import Skill from "@/components/skill";
import Skills from "@/components/skills";
import StandardPage from "@/components/layout/standard-page";
import Timeline from "@/components/theme-components/timeline";
import TimelineItem from "@/components/theme-components/time-line-item";
import { certificateData } from "@/data/certificates";
import { codingSkills, designSkills } from "@/data/skills";
import { timelineItemsExperience } from "@/data/experience";
import { timelineItemsStudies } from "@/data/studies";

export default function Resume() {
  return (
    <StandardPage>
      <MainLayout title="Resume" subtitle="13 Years of Experience">
        <Row>
          <Column xs={12} sm={6}>
            <BlockTitle>
              <h2>Education</h2>
            </BlockTitle>

            <Timeline>
              {timelineItemsStudies.map((item, index) => (
                <TimelineItem
                  key={index}
                  period={item.period}
                  company={item.company}
                  title={item.title}
                  description={item.description}
                />
              ))}
              ;
            </Timeline>
          </Column>

          <Column xs={12} sm={6}>
            <BlockTitle>
              <h2>Experience</h2>
            </BlockTitle>

            <Timeline>
              {timelineItemsExperience.map((item, index) => (
                <TimelineItem
                  key={index}
                  period={item.period}
                  company={item.company}
                  title={item.title}
                  description={item.description}
                />
              ))}
              ;
            </Timeline>
          </Column>
        </Row>

        <Column xs={12} sm={6}>
          <BlockTitle>
            <h2>Certificates</h2>
          </BlockTitle>
        </Column>
        <Row>
          {certificateData.map((certificate, index) => (
            <Column key={index} xs={12} sm={6}>
              <Certificate certificate={certificate} />
            </Column>
          ))}
        </Row>

        <Row>
          <Column xs={12} sm={6}>
            <div className="p-40"></div>
          </Column>
        </Row>

        <Row>
          <Column xs={12} sm={6}>
            <BlockTitle>
              <h2>Design Skills</h2>
            </BlockTitle>

            <Skills>
              {designSkills.map((skill, index) => (
                <Skill
                  key={index}
                  skillName={skill.skillName}
                  skillValue={skill.skillValue}
                />
              ))}
            </Skills>
          </Column>

          <Column xs={12} sm={6}>
            <BlockTitle>
              <h2>Coding Skills</h2>
            </BlockTitle>

            <Skills>
              {codingSkills.map((skill, index) => (
                <Skill
                  key={index}
                  skillName={skill.skillName}
                  skillValue={skill.skillValue}
                />
              ))}
            </Skills>
          </Column>
        </Row>
      </MainLayout>
    </StandardPage>
  );
}

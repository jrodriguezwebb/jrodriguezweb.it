import BlockTitle from "./theme-components/block-title";
import Column from "./layout/column";
import HomeTopSection from "./home-top-section";
import Item from "./theme-components/item";
import MainLayout from "./theme-components/main-layout";
import Row from "./layout/row";
import Section from "./section";
import Service from "./service";
import Services from "./services";
import Skill from "./skill";
import Skills from "./skills";
import Subtitle from "./layout/subtitle";
import { codingSkills, designSkills } from "@/data/skills";
import { servicesMock, servicesMock2 } from "@/data/services";
import HomeButtons from "./home-buttons";

export default function Home() {
  const services = servicesMock;
  const services2 = servicesMock2;

  return (
    <MainLayout>
      <HomeTopSection>
        <Section key="specialities">
          <Item>
            <h4>Fullstack-developer - Frontend / Backend</h4>
          </Item>
        </Section>
        <Section key="description">
          <h1>Jesús Rodríguez</h1>
          <p>
            I am Jesús Alfredo Rodríguez Pérez, a seasoned Full Stack Developer
            with over 13 years in web technology. My journey fuses frontend and
            backend development. Equipped with skills and innovation, I navigate
            diverse technologies like TypeScript, JavaScript, PHP, Angular,
            React, Ionic, NodeJS, and more. Crafting captivating user
            experiences focused on UI design, robust APIs, databases like MySQL,
            and Agile methodologies. As a Full Stack Developer, I unite both
            worlds, creating fluid connections and delivering end-to-end
            solutions. Proficient in English and Spanish, I effectively engage
            stakeholders and teams. My goal is to craft impactful web solutions
            with innovation and user-centricity.
          </p>
        </Section>
        <Section key="buttons">
          <HomeButtons />
        </Section>
      </HomeTopSection>
      <Subtitle>
        <h2>What I Do</h2>
      </Subtitle>
      <Row>
        <Column xs={12} sm={6}>
          <Services>
            {services.map((service, i) => (
              <Service key={i} icon={service.icon}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </Service>
            ))}
          </Services>
        </Column>
        <Column xs={12} sm={6}>
          <Services>
            {services2.map((service, i) => (
              <Service key={i} icon={service.icon}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </Service>
            ))}
          </Services>
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
  );
}

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
import { backendSkills, frontendSkills } from "@/data/skills";
import { servicesMock, servicesMock2 } from "@/data/services";
import HomeButtons from "./home-buttons";

export default function Home() {
  const services = servicesMock;
  const services2 = servicesMock2;

  return (
    <MainLayout>
      <HomeTopSection>
        <div key="specialities" aria-label="Professional specialties">
          <h4>Fullstack-developer - Frontend / Backend</h4>
        </div>
        <div key="description" aria-label="Professional introduction">
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
        </div>
        <div key="buttons" aria-label="Action buttons">
          <HomeButtons />
        </div>
      </HomeTopSection>
      <Subtitle aria-label="Services section">
        <h2>What I Do</h2>
      </Subtitle>
      <Row>
        <Column xs={12} sm={6}>
          <Services aria-label="First set of services">
            {services.map((service, i) => (
              <Service key={i} icon={service.icon}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </Service>
            ))}
          </Services>
        </Column>
        <Column xs={12} sm={6}>
          <Services aria-label="Second set of services">
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
          <BlockTitle aria-label="Backend skills">
            <h2>Backend Skills</h2>
          </BlockTitle>

          <Skills aria-label="Backend skills list">
            {backendSkills.map((skill, index) => (
              <Skill
                key={index}
                skillName={skill.skillName}
                skillValue={skill.skillValue}
              />
            ))}
          </Skills>
        </Column>

        <Column xs={12} sm={6}>
          <BlockTitle aria-label="Frontend skills">
            <h2>Frontend Skills</h2>
          </BlockTitle>

          <Skills aria-label="Frontend skills list">
            {frontendSkills.map((skill, index) => (
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

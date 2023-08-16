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
import { servicesMock } from "@/data/services";
import HomeButtons from "./home-buttons";

export default function Home() {
  const services = servicesMock;

  return (
    <MainLayout>
      <HomeTopSection>
        <Section key="specialities">
          <Item>
            <h4>Frontend-developer</h4>
          </Item>
          <Item>
            <h4>Backend-developer</h4>
          </Item>
        </Section>
        <Section key="description">
          <h1>Alex Smith</h1>
          <p>
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            a placerat sapien pretium eu.
          </p>
        </Section>
        <Section key="buttons">
          <HomeButtons />
        </Section>
      </HomeTopSection>
      <Subtitle>
        <h2>What I Do</h2>
      </Subtitle>
      <Services>
        {/* Iterating services */}
        {services.map((service, i) => (
          <Service key={i} icon={service.icon}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </Service>
        ))}
      </Services>

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

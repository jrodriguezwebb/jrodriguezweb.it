//TODO: investigar
"use client";
import Button from "./button";
import Counters from "./counters";
import HomeTopSection from "./home-top-section";
import Item from "./theme-components/item";
import MainLayout from "./theme-components/main-layout";
import Section from "./section";
import Service from "./service";
import Services from "./services";
import Slider from "./slider";
import Subtitle from "./layout/subtitle";
import { servicesMock } from "@/data/services";

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
          <Button
            type="primary"
            onClick={() => {
              console.log("Hola mundo");
            }}
          >
            Download CV
          </Button>
          <Button type="secondary">Contact</Button>
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

      <Subtitle>
        <h2>Clients</h2>
      </Subtitle>

      <Slider></Slider>

      <Subtitle>
        <h2>Fun Facts</h2>
      </Subtitle>

      <Counters></Counters>
    </MainLayout>
  );
}

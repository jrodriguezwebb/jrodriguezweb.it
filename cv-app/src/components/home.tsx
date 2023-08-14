import Counters from "./counters";
import HomeTopSection from "./home-top-section";
import MainLayout from "./theme-components/main-layout";
import Service from "./service";
import Services from "./services";
import Slider from "./slider";
import Subtitle from "./layout/subtitle";
import { servicesMock } from "@/data/services";

export default function Home() {
  const services = servicesMock;

  return (
    <MainLayout>
      <HomeTopSection></HomeTopSection>
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

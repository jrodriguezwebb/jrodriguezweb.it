import Column from "@/components/layout/column";
import Row from "@/components/layout/row";
import StandardPage from "@/components/layout/standard-page";
import BlockTitle from "@/components/theme-components/block-title";
import ContactForm from "@/components/theme-components/contact-form";
import { InfoBlock } from "@/components/theme-components/info-block";
import { InfoList } from "@/components/theme-components/info-list";
import MainLayout from "@/components/theme-components/main-layout";

export default function Contact() {
  return (
    <StandardPage>
      <MainLayout title="Contact" subtitle="Get in Touch">
        <Row>
          <Column xs={12} sm={4}>
            <InfoList>
              <InfoBlock
                iconClass="linecons linecons-location"
                title="Valladolid, Spain"
                text="Available for remote projects across Europe."
              />
              <InfoBlock
                iconClass="linecons linecons-mail"
                title="jesus.jarp@gmail.com"
                text="Let's stay connected! Feel free to reach out via email."
              />
            </InfoList>
          </Column>

          <Column xs={12} sm={8}>
            <BlockTitle>
              <h2>Let&apos;s talk!</h2>
            </BlockTitle>

            <ContactForm />
          </Column>
        </Row>
      </MainLayout>
    </StandardPage>
  );
}

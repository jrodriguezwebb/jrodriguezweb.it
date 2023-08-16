import { Certificate } from "@/models/certificate.model";
import CertificateLayout from "./theme-components/certificate-layout";

export default function Certificate({
  certificate,
}: {
  certificate: Certificate;
}) {
  return <CertificateLayout certificate={certificate}></CertificateLayout>;
}

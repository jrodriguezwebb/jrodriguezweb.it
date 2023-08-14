import ServiceLayout from "./theme-components/service-layout";

export default function Service({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return <ServiceLayout icon={icon}>{children}</ServiceLayout>;
}

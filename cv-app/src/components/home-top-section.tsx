import HomeTopSectionLayout from "./theme-components/home-top-section-layout";

export default function HomeTopSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeTopSectionLayout>{children}</HomeTopSectionLayout>;
}

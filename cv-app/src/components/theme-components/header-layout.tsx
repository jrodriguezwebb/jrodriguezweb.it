export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header id="site_header" className="header">
      <div className="header-content clearfix">{children}</div>
    </header>
  );
}

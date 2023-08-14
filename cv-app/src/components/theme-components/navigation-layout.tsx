export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="site-nav mobile-menu-hide">
      <ul className="leven-classNameic-menu site-main-menu">{children}</ul>
    </nav>
  );
}

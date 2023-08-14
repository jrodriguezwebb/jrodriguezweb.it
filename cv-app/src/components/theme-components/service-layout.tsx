export default function ServiceLayout({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="info-block-w-icon">
      <div className="ci-icon">
        <i className={icon}></i>
      </div>

      <div className="ci-text">{children}</div>
    </div>
  );
}

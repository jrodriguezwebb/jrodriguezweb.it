export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <div className="info-list-w-icon">{children}</div>
      </div>
    </div>
  );
}

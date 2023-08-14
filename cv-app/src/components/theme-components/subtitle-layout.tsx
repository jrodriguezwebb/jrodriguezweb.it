export default function SubtitleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12">
        <div className="p-50"></div>
        <div className="block-title">{children}</div>
      </div>
    </div>
  );
}

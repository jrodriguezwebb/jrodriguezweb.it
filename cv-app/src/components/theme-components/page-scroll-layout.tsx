export default function PageScrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-scroll">
      <div
        id="page_container"
        className="page-container bg-move-effect"
        data-animation="transition-flip-in-right"
      >
        {children}
      </div>
    </div>
  );
}

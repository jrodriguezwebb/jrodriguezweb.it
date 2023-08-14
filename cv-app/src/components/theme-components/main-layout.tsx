export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="main" className="site-main">
      <div id="main-content" className="single-page-content">
        <div id="primary" className="content-area">
          <div
            id="content"
            className="page-content site-content single-post"
            role="main"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

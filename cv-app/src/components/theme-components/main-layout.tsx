export default function MainLayout({
  children,
  singlePost = false,
}: {
  children: React.ReactNode;
  singlePost?: boolean;
}) {
  return (
    <div id="main" className="site-main">
      <div id="main-content" className="single-page-content">
        <div id="primary" className="content-area">
          {singlePost && (
            <div
              id="content"
              className="page-content site-content single-post"
              role="main"
            >
              {children}
            </div>
          )}
          {!singlePost && children}
        </div>
      </div>
    </div>
  );
}

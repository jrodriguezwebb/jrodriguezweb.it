import PageSubTitle from "./page-subtitle";
import PageTitle from "./page-title";
import ErrorBoundary from "../error-boundary";

export default function MainLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div id="main" className="site-main" role="main">
      <div id="main-content" className="single-page-content">
        <div id="primary" className="content-area" role="article">
          {title && (
            <PageTitle>
              <h1>{title}</h1>
              <PageSubTitle>
                <h4>{subtitle}</h4>
              </PageSubTitle>
            </PageTitle>
          )}
          <div
            id="content"
            className="page-content site-content single-post"
            role="main"
          >
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
}

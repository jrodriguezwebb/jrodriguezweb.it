export default function Navigation() {
  return (
    <nav className="site-nav mobile-menu-hide">
      <ul className="leven-classNameic-menu site-main-menu">
        <li className="menu-item menu-item-has-children current-menu-item">
          <a href="index.html">About Me</a>
          <ul className="sub-menu">
            <li className="menu-item current-menu-item">
              <a href="index.html">About Me 1</a>
            </li>
            <li className="menu-item">
              <a href="index-2.html">About Me 2</a>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <a href="resume.html">Resume</a>
        </li>

        <li className="menu-item menu-item-has-children">
          <a href="portfolio.html">Portfolio</a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="portfolio-2-columns.html">Portfolio 2 Columns</a>
            </li>
            <li className="menu-item">
              <a href="portfolio.html">Portfolio 3 Columns</a>
            </li>
            <li className="menu-item">
              <a href="portfolio-4-columns.html">Portfolio 4 Columns</a>
            </li>
            <li className="menu-item">
              <a href="portfolio-5-columns.html">Portfolio 5 Columns</a>
            </li>
          </ul>
        </li>

        <li className="menu-item menu-item-has-children">
          <a href="blog.html">Blog</a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="blog.html">Blog 2 Columns</a>
            </li>
            <li className="menu-item">
              <a href="blog-3-columns.html">Blog 3 Columns</a>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
import { SocialLink } from "../theme-components/social-link";
import SocialLinks from "../theme-components/social-links";

export default function Footer() {
  return (
    <footer className="site-footer clearfix">
      <div className="footer-social">
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/jrodriguezweb/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/jrodriguezwebb" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
        </SocialLinks>
      </div>

      <div className="footer-copyrights">
        <p>© 2026 All rights reserved. jrodriguezweb.it</p>
      </div>
    </footer>
  );
}

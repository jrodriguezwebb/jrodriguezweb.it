import { SocialLink } from "../theme-components/social-link";
import SocialLinks from "../theme-components/social-links";

export default function Footer() {
  return (
    <footer className="site-footer clearfix">
      <div className="footer-social">
        <SocialLinks>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </SocialLink>
        </SocialLinks>
      </div>

      <div className="footer-copyrights">
        <p>© 2023 All rights reserved. jrodriguezweb.it</p>
      </div>
    </footer>
  );
}

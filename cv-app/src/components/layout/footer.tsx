import { SocialLink } from "../theme-components/social-link";
import SocialLinks from "../theme-components/social-links";

export default function Footer() {
  return (
    <footer className="site-footer clearfix" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div className="footer-social" >
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/jrodriguezweb/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/jrodriguezwebb" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
        </SocialLinks>
      </div>

      <div className="footer-funding" style={{ textAlign: "justify", fontSize: "12px", lineHeight: "1.6", color: "#666", paddingBottom: "20px", borderBottom: "1px solid #eee" }}>
        <p style={{ margin: "0" }}>
          Actividad subvencionada por el Servicio Público de Castilla y León para el Fomento del Autoempleo en Castilla y León, con un importe de <strong>6.000 euros</strong> para el desarrollo de programas informáticos para empresas.
        </p>
      </div>

      <div className="footer-copyrights" style={{ textAlign: "right", fontSize: "14px", color: "#999" }}>
        <p>© 2026 All rights reserved. jrodriguezweb.it</p>
      </div>
    </footer>
  );
}

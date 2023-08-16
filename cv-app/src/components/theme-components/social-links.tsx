interface SocialLinksProps {
  children: React.ReactNode;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ children }) => {
  return <ul className="footer-social-links">{children}</ul>;
};

export default SocialLinks;

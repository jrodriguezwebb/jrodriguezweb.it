interface SocialLinkProps {
  href: string;
  target: string;
  rel: string;
  children: React.ReactNode;
}

export function SocialLink({ href, target, rel, children }: SocialLinkProps) {
  return (
    <li>
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    </li>
  );
}

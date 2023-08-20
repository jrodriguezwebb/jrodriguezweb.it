export default function Button({
  children,
  type,
  target,
  href,
  onClick,
}: {
  children: React.ReactNode;
  type: "primary" | "secondary";
  target?: "_blank" | "_self" | undefined;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <a
      target={target}
      href={href}
      className={`btn btn-${type}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default function Button({
  children,
  type,
  target,
  href,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  type: "primary" | "secondary";
  target?: "_blank" | "_self" | undefined;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  // Generate default aria-label if not provided
  const defaultAriaLabel = ariaLabel || (typeof children === 'string' ? children : undefined);

  return (
    <a
      target={target}
      href={href}
      className={`btn btn-${type}`}
      onClick={onClick}
      aria-label={defaultAriaLabel}
    >
      {children}
    </a>
  );
}

export default function Button({
  children,
  type,
  target,
  onClick,
}: {
  children: React.ReactNode;
  type: "primary" | "secondary";
  target?: "_blank" | "_self" | undefined;
  onClick?: () => void;
}) {
  return (
    <a target={target} className={"btn btn-" + type} onClick={onClick}>
      {children}
    </a>
  );
}

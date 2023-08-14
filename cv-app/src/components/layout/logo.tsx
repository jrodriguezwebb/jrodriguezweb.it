import Link from "next/link";

export default function Logo() {
  return (
    <div className="text-logo">
      <Link href="/">
        <div className="logo-symbol">JR</div>
        <div className="logo-text">Jesús Rodríguez</div>
      </Link>
    </div>
  );
}

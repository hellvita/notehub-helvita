import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black-900">
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
    </header>
  );
}

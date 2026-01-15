import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black-900 ">
      <div className="px-5 tablet-big:px-10 flex justify-between items-center">
        <Link
          href="/"
          aria-label="Home"
          className="mr-4 mobile:text-s24 font-bold py-2 hover:text-pink-400/60 transition-colors duration-300"
        >
          NoteHub
        </Link>
        <nav aria-label="Main Navigation">
          <ul className="flex gap-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Notes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

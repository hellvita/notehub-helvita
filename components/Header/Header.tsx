import Link from "next/link";
import NavMobile from "./NavMobile/NavMobile";
import AuthNavigation from "./AuthNavigation/AuthNavigation";

export default function Header() {
  return (
    <header className="bg-black-900 font-bold selection:text-purple-800 selection:bg-pink-400">
      <div className="px-5 tablet-big:px-10 flex justify-between items-center">
        <Link
          href="/"
          aria-label="Home"
          className="mr-4 mobile:text-s24 py-2 hover:text-pink-400/60 focus:text-pink-400/60 transition-colors duration-300"
        >
          NoteHub
        </Link>

        <nav aria-label="Main Navigation" className="flex items-center">
          <NavMobile />
          <ul className="hidden tablet:flex gap-x-4 text-s18">
            <li>
              <Link
                href="/"
                className="py-3 hover:text-pink-400 focus:text-pink-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="py-3 hover:text-blue-400 focus:text-blue-400 transition-colors duration-300"
              >
                Notes
              </Link>
            </li>
            <AuthNavigation />
          </ul>
        </nav>
      </div>
    </header>
  );
}

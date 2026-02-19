import MailLink from "../parts/MailLink/MailLink";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-900 py-4 tablet-big:py-9 text-center text-white-400 tablet-big:text-s20 selection:text-blue-400 selection:bg-blue-400-12">
      <div className="flex flex-col px-5 tablet-big:px-10 gap-y-5 tablet-big:flex-row tablet-big:justify-between">
        <div className="flex flex-col gap-y-5 tablet-big:text-left">
          <p>© 2026 NoteHub. All rights reserved.</p>

          <p>
            Contact us:&#160;
            <MailLink
              mail="olhasereda1443@gmail.com"
              colorHover="var(--color-white-950)"
              decorationHover="underline"
            />
          </p>
        </div>

        <div className="flex flex-col gap-y-5 items-center tablet-big:text-right tablet-big:items-end">
          <Link
            href="https://github.com/hellvita/notehub-helvita"
            target="blank"
            className="hover:text-white-950 transition-colors duration-300 hover:underline w-fit"
          >
            GitHub
          </Link>

          <p>Developer: Olha Sereda</p>
        </div>
      </div>
    </footer>
  );
}

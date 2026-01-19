import MailLink from "../parts/MailLink/MailLink";

export default function Footer() {
  return (
    <footer className="bg-black-900 py-4 tablet-big:py-9 text-center text-white-400 tablet-big:text-s20 selection:text-blue-400 selection:bg-blue-400-12">
      <div className="flex flex-col gap-y-5 px-5 tablet-big:px-10 tablet-big:flex-row tablet-big:justify-between tablet-big:items-end desktop:items-center desktop:justify-center desktop:gap-x-21">
        <p>© 2026 NoteHub. All rights reserved.</p>
        <div className="flex flex-col gap-y-5 tablet-big:text-right desktop:text-center desktop:flex-row desktop:gap-x-21">
          <p>Developer: Olha Sereda</p>
          <p>
            Contact us:&#160;
            <MailLink
              mail="olhasereda1443@gmail.com"
              colorHover="var(--color-white-950)"
              decorationHover="underline"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}

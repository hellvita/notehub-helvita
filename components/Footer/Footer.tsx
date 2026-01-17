export default function Footer() {
  return (
    <footer className="bg-black-900 py-4 tablet-big:py-9 text-center text-white-400 tablet-big:text-s20 selection:text-blue-400 selection:bg-blue-400-12">
      <div className="flex flex-col gap-y-5 px-5 tablet-big:px-10 tablet-big:flex-row tablet-big:justify-between tablet-big:items-end desktop:items-center desktop:justify-center desktop:gap-x-21">
        <p>© 2025 NoteHub. All rights reserved.</p>
        <div className="flex flex-col gap-y-5 tablet-big:text-right desktop:text-center desktop:flex-row desktop:gap-x-21">
          <p>Developer: Olha Sereda</p>
          <p>
            Contact us:&#160;
            <a
              href="mailto:olhasereda1443@gmail.com"
              className="hover:text-white-950 hover:underline transition-colors duration-300"
            >
              olhasereda1443@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

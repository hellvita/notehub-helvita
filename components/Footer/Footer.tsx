export default function Footer() {
  return (
    <footer className="bg-black-900 py-4 text-center text-white-400 leading-8">
      <div className="my-0 mx-auto w-80 max-w-full flex flex-col gap-y-5">
        <p>© 2025 NoteHub. All rights reserved.</p>
        <div className="flex flex-col gap-y-5">
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

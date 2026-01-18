import LinkAnim from "../parts/LinkAnim/LinkAnim";
import NavMobile from "./NavMobile/NavMobile";
import AuthNavigation from "./AuthNavigation/AuthNavigation";

export default function Header() {
  return (
    <header className="bg-black-900 font-bold selection:text-purple-800 selection:bg-pink-400">
      <div className="px-5 tablet-big:px-10 flex justify-between items-center">
        <LinkAnim
          href="/"
          text="Notehub"
          ariaLabel="Home"
          colorHover="var(--color-pink-400)"
          opacityHover={0.6}
          twStyles="mr-4 mobile:text-s24 py-2"
        />

        <nav aria-label="Main Navigation" className="flex items-center">
          <NavMobile />
          <ul className="hidden tablet:flex gap-x-4 text-s18">
            <li>
              <LinkAnim
                href="/"
                text="Home"
                colorHover="var(--color-pink-400)"
                twStyles="py-3"
              />
            </li>
            <li>
              <LinkAnim
                href="/"
                text="Notes"
                colorHover="var(--color-blue-400)"
                twStyles="py-3"
              />
            </li>
            <AuthNavigation />
          </ul>
        </nav>
      </div>
    </header>
  );
}

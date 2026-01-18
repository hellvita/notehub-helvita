import LinkAnim from "../parts/LinkAnim/LinkAnim";
import HeaderClient from "./Header.client";
import DefaultNavigation from "./DefaultNavigation/DefaultNavigation";
import AuthNavigation from "./AuthNavigation/AuthNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 bg-black-900 font-bold selection:text-purple-800 selection:bg-pink-400 z-40">
      <div className="px-5 tablet-big:px-10 flex justify-between items-center">
        <LinkAnim
          href="/"
          text="Notehub"
          ariaLabel="Home"
          colorHover="var(--color-pink-400)"
          opacityHover={0.6}
          twStyles="mr-4 mobile:text-s24 py-2"
        />

        <nav
          aria-label="Main Navigation"
          className="relative flex items-center"
        >
          <ul className="hidden tablet:flex gap-x-4 text-s18">
            <DefaultNavigation />

            <AuthNavigation />
          </ul>

          <HeaderClient />
        </nav>
      </div>
    </header>
  );
}

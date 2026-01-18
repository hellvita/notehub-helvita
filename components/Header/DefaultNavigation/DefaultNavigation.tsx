import LinkAnim from "@/components/parts/LinkAnim/LinkAnim";

export default function DefaultNavigation() {
  return (
    <>
      <li>
        <LinkAnim
          href="/"
          text="Home"
          colorHover="var(--color-pink-400)"
          twStyles="py-3 block tablet:inline"
        />
      </li>
      <li>
        <LinkAnim
          href="/"
          text="Notes"
          colorHover="var(--color-blue-400)"
          twStyles="py-3 block tablet:inline"
        />
      </li>
    </>
  );
}

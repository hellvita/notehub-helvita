import LinkAnim from "@/components/parts/LinkAnim/LinkAnim";

export default function NavMenu() {
  return (
    <>
      <li>
        <LinkAnim
          href="/sign-in"
          text="Login"
          prefetch={false}
          colorHover="var(--color-yellow-500)"
          twStyles="py-3 block tablet:inline"
        />
      </li>

      <li>
        <LinkAnim
          href="/sign-up"
          text="Sign up"
          prefetch={false}
          colorHover="var(--color-green-200)"
          twStyles="py-3 block tablet:inline"
        />
      </li>
    </>
  );
}

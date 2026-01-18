import LinkAnim from "@/components/parts/LinkAnim/LinkAnim";

export default function NavMenu() {
  return (
    <>
      <li>
        <LinkAnim
          href="/"
          text="Login"
          prefetch={false}
          colorHover="var(--color-yellow-500)"
          twStyles="py-3"
        />
      </li>

      <li>
        <LinkAnim
          href="/"
          text="Sign up"
          prefetch={false}
          colorHover="var(--color-green-200)"
          twStyles="py-3"
        />
      </li>
    </>
  );
}

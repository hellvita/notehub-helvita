import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <li>
        <Link
          href="/"
          prefetch={false}
          className="py-3 hover:text-yellow-500 transition-colors duration-300"
        >
          Login
        </Link>
      </li>

      <li>
        <Link
          href="/"
          prefetch={false}
          className="py-3 hover:text-green-200 transition-colors duration-300"
        >
          Sign up
        </Link>
      </li>
    </>
  );
}

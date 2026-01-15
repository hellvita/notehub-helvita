import Link from "next/link";

export default function NavMenuAuth() {
  return (
    <>
      <li>
        <Link
          href="/"
          prefetch={false}
          className="py-3 hover:text-yellow-500 transition-colors duration-300"
        >
          Profile
        </Link>
      </li>
      <li>
        <p>user@mail.com</p>
        <button>Logout</button>
      </li>
    </>
  );
}

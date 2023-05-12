import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-lime-300">
      <nav className="flex justify-between">
        <div className="logo">
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Dark Mode</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

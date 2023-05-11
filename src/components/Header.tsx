import Link from "next/link";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">Logo</Link>
        </div>
        <ul>
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

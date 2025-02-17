"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/guide">Guide</Link>
          {path === "/guide" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/faq">Faq</Link>
          {path === "/faq" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/user">User</Link>
          {path === "/user" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
};

export default Header;

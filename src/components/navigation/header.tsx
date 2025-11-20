import { siteMenu } from "@/config/menu";
import Link from "next/link";
import Logo from "../logo";

export function Header() {
  return (
    <header className="border-b">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Logo />

          <nav>
            {siteMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-block px-4 py-2"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

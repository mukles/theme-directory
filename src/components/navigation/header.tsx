import { siteMenu } from "@/config/menu";
import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="border-b-divider border-b">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <nav>
            <ul>
              {siteMenu.map((item) => (
                <li key={item.href} className="ml-6 inline-block">
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex space-x-3">
            <Button variant="outline" size={"lg"}>
              <Link href="/login">Sign in</Link>
            </Button>

            <Button className="gradient-primary" size={"lg"}>
              <Link href="/login">Submit now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

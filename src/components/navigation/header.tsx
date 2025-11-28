import { siteMenu } from "@/config/menu";
import Link from "next/link";
import Logo from "../logo";
import { Button, buttonVariants } from "../ui/button";
import { Button as MovingBorder } from "../ui/moving-border";

export function Header() {
  return (
    <header className="blur-in from-background fixed top-0 right-0 left-0 z-50">
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

            <Link href="/login" passHref legacyBehavior>
              <MovingBorder
                as="a"
                borderRadius="12px"
                borderWidth={4}
                className={buttonVariants({
                  size: "lg",
                  className: "gradient-primary",
                })}
              >
                Submit now
              </MovingBorder>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

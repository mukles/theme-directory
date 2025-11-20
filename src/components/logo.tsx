"use client";

import config from "@/config/config.json";
import Link from "next/link";

interface LogoProps {
  src?: string;
}

const parsePx = (value: string | number | undefined) =>
  typeof value === "string" ? parseInt(value, 10) : (value ?? 0);

const Logo = ({ src }: LogoProps) => {
  const { logo_text, title } = config.site;

  return (
    <Link href="/" className="flex space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={24}
        fill="none"
      >
        <path
          fill="currentColor"
          d="M0 4.5A2.5 2.5 0 0 1 2.5 2h5A2.5 2.5 0 0 1 10 4.5v5a2.5 2.5 0 0 0 2.494 2.5H17.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5.02A2.5 2.5 0 0 0 7.5 12h-5A2.5 2.5 0 0 1 0 9.5v-5Z"
        />
      </svg>{" "}
      <span className="capitalize">{logo_text ? logo_text : title}</span>
    </Link>
  );
};

export default Logo;

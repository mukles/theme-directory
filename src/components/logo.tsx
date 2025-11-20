"use client";

import config from "@/config/config.json";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  src?: string;
}

const parsePx = (value: string | number | undefined) =>
  typeof value === "string" ? parseInt(value, 10) : (value ?? 0);

const Logo = ({ src }: LogoProps) => {
  const { logo, logo_width, logo_height, logo_text, title } = config.site;
  const logoPath = src ? src : logo;

  const width = parsePx(logo_width);
  const height = parsePx(logo_height);

  return (
    <Link href="/" className="flex space-x-3">
      <Image src={"/images/logo.svg"} alt="" width={width} height={height} />
      <span className="capitalize">{logo_text ? logo_text : title}</span>
    </Link>
  );
};

export default Logo;

import { Header } from "@/components/navigation/header";
import { TwSizeIndicator } from "@/components/tw-size-indicator";
import "@/styles/main.css";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theme Directory",
  description: "A curated directory of the best themes and templates.",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${geistSans.variable} ${inter.variable} relative antialiased`}>
        <TwSizeIndicator />
        <Header />
        {children}
      </body>
    </html>
  );
}

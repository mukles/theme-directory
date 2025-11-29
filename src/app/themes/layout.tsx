import React from "react";
import { ThemeFilter } from "./_components/theme-filter";

export default function ThemesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <aside className="border-divider col-span-3 border-r">
        <ThemeFilter />
      </aside>
      <main className="col-span-9 p-4">{children}</main>
    </div>
  );
}

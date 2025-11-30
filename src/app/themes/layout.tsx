"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FilterTop } from "./_components/filter-top";
import { ThemeFilter } from "./_components/theme-filter";

export default function ThemesLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <FilterTop isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <motion.div className="flex">
        {
          <AnimatePresence>
            {!isCollapsed && (
              <motion.aside
                className="border-divider col-span-3 border-r"
                initial={false}
                animate={!isCollapsed ? { width: 384 } : { width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                exit={{
                  width: 0,
                }}
              >
                <ThemeFilter />
              </motion.aside>
            )}
          </AnimatePresence>
        }

        <main className="flex-1 p-4">{children}</main>
      </motion.div>
    </>
  );
}

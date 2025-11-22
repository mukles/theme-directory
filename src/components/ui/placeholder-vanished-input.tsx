"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

interface PlaceholdersAndVanishInputProps {
  placeholders: string[];
}

export function PlaceholdersAndVanishInput({ placeholders }: PlaceholdersAndVanishInputProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };

  useEffect(() => {
    startAnimation();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [placeholders]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <form className="relative mt-6 inline-block w-full max-w-[480px]">
      <Input className="mx-auto h-auto max-w-lg rounded-full py-4.5 font-medium" onChange={handleInputChange} value={value} />

      {/* placeholder text */}
      <div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              key={`current-placeholder-${currentPlaceholder}`}
              initial={{
                y: 5,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="text-muted-foreground w-[calc(100%-2rem)] truncate pl-6 text-left text-base font-medium"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* submit-button */}
      <Button className="text-foreground/50 absolute top-1/2 right-2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-base">
        <Search className="text-muted-foreground size-5" />
      </Button>
    </form>
  );
}

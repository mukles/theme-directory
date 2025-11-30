import { IconInput } from "@/components/icon-input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface FilterTopProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function FilterTop({ isCollapsed, setIsCollapsed }: FilterTopProps) {
  return (
    <motion.div className="flex">
      <motion.div className="border-divider flex items-center justify-between overflow-hidden border-r border-b px-3" initial={{ width: isCollapsed ? 48 : 384 }} animate={{ width: isCollapsed ? 48 : 384 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
        {isCollapsed ? null : <span className="text-sm font-medium">Filters</span>}
        <Button className="cursor-pointer" size="icon" variant="ghost" onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu />
        </Button>
      </motion.div>

      <div className="border-divider flex-1 border-b p-4">
        <IconInput />
      </div>
    </motion.div>
  );
}

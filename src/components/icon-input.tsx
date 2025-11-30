import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function IconInput() {
  return (
    <div className="relative">
      <Search className="text-muted-foreground absolute top-1/2 left-2 -translate-y-1/2 transform" />
      <Input type="search" placeholder="" className="border-divider py-5.5 pl-10" />
    </div>
  );
}

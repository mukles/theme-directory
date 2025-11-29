import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ThemeFilter() {
  return (
    <div>
      <div className="flex space-x-2">
        <Button variant={"outline"}>New</Button>
        <Button variant={"outline"}>Popular</Button>
        <Separator orientation="vertical" />
        <Button variant={"outline"}>Free</Button>
        <Button variant={"outline"}>Premium</Button>
        <div className="rounded-full border"></div>
      </div>
    </div>
  );
}

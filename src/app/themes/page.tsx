import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ThemesPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <div key={idx} className="border-divider rounded-md border p-4">
          <Image src={"/images/image.png"} alt="Theme Preview" width={432} height={295} />
          <h3 className="mt-2 text-lg font-medium">Theme {idx + 1}</h3>
          <p className="text-muted-foreground text-sm">A brief description of Theme {idx + 1}.</p>
          <Separator className="my-3" />

          <div className="flex">
            <div>
              <span className="bg-primary/10 size-7.5 rounded-full"></span>
              <span>Themefisher</span>
            </div>
            <div className="ml-auto">
              <span className="font-medium">$49</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

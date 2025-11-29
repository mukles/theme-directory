import Image from "next/image";
import { Separator } from "./ui/separator";

interface ProductCardProps {
  idx: number;
}

export function ProductCard({ idx }: ProductCardProps) {
  return (
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
  );
}

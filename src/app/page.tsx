import DecorativeBackground from "@/components/decorative-background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative">
        <DecorativeBackground />

        <div className="absolute inset-0 top-[5rem] z-20 mx-auto flex h-[calc(100vh_-_5rem)] max-w-[1320px] items-center justify-between px-4">
          <Separator className="absolute top-0 left-0 h-full" orientation="vertical" />
          <Separator className="absolute top-0 right-0 h-full" orientation="vertical" />
        </div>

        <div className="container">
          <div className="relative z-20">
            <div className="mx-auto w-full max-w-5xl pt-63 text-center">
              <div className="inline-flex space-x-2 rounded-full border px-2.5 py-1.5">
                <Badge>New</Badge>
                <h1 className="text-sm">2250+ Templates & Tools Directory</h1>
              </div>
              <Heading variant={"gradient"} level={1} className="mt-4.5">
                Find Everything You Need in One Place
              </Heading>
              <p className="text-secondary-foreground mt-3 text-lg leading-[1.8] font-medium">
                The curated directory of the best businesses and services available online, <br />
                filtered by real-world features and user reviews.
              </p>

              <div className="relative mt-6 inline-block w-full max-w-[480px]">
                <Input className="placeholder:text-foreground mx-auto h-auto max-w-lg rounded-full py-4.5 font-medium placeholder:text-base placeholder:font-medium" placeholder="Quick search" />

                <Button className="text-foreground/50 absolute top-1/2 right-2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-base">
                  <Search className="text-muted-foreground size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="background-wave z-0">
          <div className="neon-line"></div>
        </div>
      </section>
    </>
  );
}

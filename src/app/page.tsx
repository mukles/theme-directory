import AnimatedBackgroundWave from "@/components/decorator/animated-background-wave";
import DecorativeBackground from "@/components/decorator/decorative-background";
import { Heading } from "@/components/ui/heading";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder-vanished-input";
import { Separator } from "@/components/ui/separator";
import { config } from "@/config";

import { badgeVariants } from "@/components/ui/badge";
import { FloatDot } from "@/components/ui/float-dot";
import { Button as MovingBorder } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <>
      <DecorativeBackground className="absolute top-0 right-0" />
      <div className="absolute inset-0 top-[5.2rem] z-20 flex h-[calc(100vh_-_5rem)]">
        <div className="relative container flex items-center justify-between">
          <Separator className="absolute top-0 left-0 h-full" orientation="vertical" />
          <Separator className="absolute top-0 right-0 h-full" orientation="vertical" />

          <FloatDot shape={"square"} position={"top-left"} size={"sm"} className="z-50 -translate-1/2" />
          <FloatDot size={"sm"} shape={"square"} position={"top-right"} className="z-50 translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <section className="relative overflow-hidden">
        <div className="container">
          <div className="relative z-20">
            <div className="mx-auto w-full max-w-5xl pt-63 text-center">
              <div className="inline-flex space-x-2 rounded-full border px-2.5 py-1.5">
                <MovingBorder borderRadius="12px" borderWidth={0} className={badgeVariants({})} borderClassName="w-10" containerClassName="!pt-0 space-y-0 leading-none">
                  New
                </MovingBorder>
                <h1 className="animate-move-bg gradient-text animated-gradient-text relative inline-block text-sm font-normal">For fast moving engineering teams.</h1>
              </div>
              <Heading variant={"gradient"} level={1} className="mt-4.5">
                Find Everything You Need in One Place
              </Heading>
              <p className="text-secondary-foreground mt-3 text-lg leading-[1.8] font-medium">
                The curated directory of the best businesses and services available online, <br />
                filtered by real-world features and user reviews.
              </p>

              <PlaceholdersAndVanishInput placeholders={config.settings.search.placeholder} />
            </div>
          </div>
        </div>

        <AnimatedBackgroundWave />
      </section>
    </>
  );
}

import DecorativeBackground from "@/components/decorative-background";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder-vanished-input";
import { Separator } from "@/components/ui/separator";
import { config } from "@/config";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
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
                <h1 className="relative inline-block bg-[length:250%_100%,auto] bg-clip-text [background-repeat:no-repeat,padding-box] text-sm font-normal text-transparent [--base-color:var(--color-brand)] [--base-gradient-color:var(--color-white)] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] dark:[--base-color:var(--color-brand)] dark:[--base-gradient-color:var(--color-white)] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]">2250+ Templates & Tools Directory</h1>
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
        <div className="background-wave z-0">
          <div className="neon-line"></div>
        </div>
      </section>
    </>
  );
}

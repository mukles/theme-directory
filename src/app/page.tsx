import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <section className="noice-background relative">
      <div className="container">
        <div className="relative">
          <Separator
            className="absolute top-0 left-0 h-full w-px"
            orientation="vertical"
          />

          <Separator
            className="absolute top-0 right-0 h-full w-px"
            orientation="vertical"
          />

          <div className="mx-auto w-full max-w-5xl pt-20 text-center">
            <div className="inline-flex space-x-2 rounded-full border px-2.5 py-1.5">
              <Badge>New</Badge>
              <h1 className="text-sm">2250+ Templates & Tools Directory</h1>
            </div>
            <Heading variant={"gradient"} level={1} className="mt-4.5">
              Find Everything You Need in One Place
            </Heading>
            <p className="text-secondary-foreground mt-3 text-lg leading-[1.8] font-medium">
              The curated directory of the best businesses and services
              available online, <br />
              filtered by real-world features and user reviews.
            </p>

            <div className="relative">
              <Input
                className="mx-auto mt-6 h-12 max-w-lg rounded-full"
                placeholder="Quick search"
              />
            </div>
          </div>

          <div className="background-wave" />
        </div>
      </div>
    </section>
  );
}

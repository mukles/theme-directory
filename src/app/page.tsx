import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <section className="relative">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#AEDDFF_1px,transparent_1px),linear-gradient(to_bottom,#AEDDFF_1px,transparent_1px)] mask-[radial-gradient(ellipse_15%_15%_at_70%_0,#000_-200%,transparent_111%)] bg-size-[35px_34px]" />
      <div className="absolute -top-[48%] right-[12%] h-[400px] w-[400px] [transform:matrix(0.98,0.2,0.2,-0.98,0,0)] bg-[radial-gradient(50.98%_50.98%_at_67.71%_62.12%,_#FFFFFF_0%,_#3C99B6_50%,_#2308B3_100%)] mix-blend-plus-lighter blur-[157.462px]" />

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

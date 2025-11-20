import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <section className="relative before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url('/images/noise.gif')] before:opacity-[0.05] before:content-['']">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[35px_34px]"></div>

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

          <div className="after:bg-background relative h-60 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100 after:absolute after:top-[40%] after:-left-1/2 after:aspect-[1/0.8] after:w-[200%] after:rounded-[50%] after:border-2 after:border-b after:border-[#7876c566]"></div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <div className="min-h-screen w-screen bg-black">
        <div className="relative z-10 mx-auto w-screen max-w-2xl pt-32 pb-4">
          <div className="relative mx-auto h-16 w-16 rounded-lg bg-white before:absolute before:-top-2 before:-left-2 before:h-full before:w-full before:rounded-lg before:bg-white/40"></div>
          <article className="mx-auto block w-3/4 pt-4 text-center text-white">
            It is a modern and minimalist UI component library designed to
            simplify the process of building responsive and visually appealing
            web interfaces.
          </article>
        </div>
        <div className="relative h-64 w-screen overflow-hidden">
          <div className="absolute inset-x-20 top-0 mx-auto h-[2px] w-2/4 bg-linear-to-r from-transparent via-gray-500 to-transparent blur-xs" />
          <div className="absolute inset-x-20 top-0 mx-auto h-px w-2/4 bg-linear-to-r from-transparent via-gray-400 to-transparent" />
          <div className="absolute inset-x-20 top-0 mx-auto h-px w-1/4 bg-linear-to-r from-transparent via-gray-50 to-transparent" />

          {/* <Sparkles
            density={1200}
            mousemove={true}
            className='absolute inset-x-0 -mt-24 top-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_55%)]'
          /> */}
        </div>
      </div>
    </>
  );
}

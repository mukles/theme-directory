import { Button as MovingBorder } from "@/components/ui/moving-border";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Heading } from "./ui/heading";

export function CallToAction() {
  return (
    <div className="rounded-xl bg-white/10 py-25 text-center shadow-2xl">
      <div className="mx-auto max-w-[676px]">
        <Heading level={2} variant={"gradient"} className="font-medium">
          Have a theme to submit?
        </Heading>
        <p className="mt-6 text-left text-xl">A clear explanation of the process and a link to a submission form. This is key for a community-driven directory.</p>
        <div className="mt-12">
          <MovingBorder
            borderRadius="12px"
            borderWidth={0}
            className={buttonVariants({
              size: "lg",
              className: "gradient-primary",
            })}
          >
            <Link href="/login">Submit now</Link>
          </MovingBorder>
        </div>
      </div>
    </div>
  );
}

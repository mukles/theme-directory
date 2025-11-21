import Image from "next/image";
import { Spotlight } from "./ui/spotlight";

export default function DecorativeBackground() {
  return (
    <>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#AEDDFF_1px,transparent_1px),linear-gradient(to_bottom,#AEDDFF_1px,transparent_1px)] mask-[radial-gradient(ellipse_13%_25%_at_55%_0,#000_-200%,transparent_111%)] bg-size-[65px_70px]" />

      <svg xmlns="http://www.w3.org/2000/svg" width={1259} height={873} fill="none" className="absolute top-0 right-0 -translate-y-1/2">
        <g
          filter="url(#a)"
          style={{
            mixBlendMode: "plus-lighter",
          }}
        >
          <path fill="url(#b)" d="M588.325 705.25c64.023 64.769 128.56 56.317 117.144 50.976 35.501-11.391 35.45-20.147 36.684-19.898 1.544.312 58.346-95.308 80.454-188.834 22.108-93.526 88.637-163.084 112.606-260.517 23.969-97.434-10.668-71.768-17.512-98.854-6.844-27.085-184.422-73.136-244.819-86.944-60.396-13.809-143.389-.589-145.156 8.157-1.767 8.746-52.122 199.237-117.849 151.292-57.87-42.214-66.705 1.517-68.16 8.72-1.455 7.203-31.748 74.978-26.089 129.134 5.658 54.156 51.753 64.539 64.953 105.225 13.199 40.686 60.39 122.509 65.202 135.797 4.812 13.288 62.512-15.215 142.542 65.746Z" />
        </g>
        <defs>
          <radialGradient id="b" cx={0} cy={0} r={1} gradientTransform="rotate(121.387 261.703 383.674) scale(348.495 321.567)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset={0.5} stopColor="#3C99B6" />
            <stop offset={1} stopColor="#2308B3" />
          </radialGradient>
          <filter id="a" width={1258.47} height={1294.47} x={0} y={-219.733} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_4_386" stdDeviation={157.462} />
          </filter>
        </defs>
      </svg>
      <Image src={"/images/noisy-background.png"} fill priority alt="noisy-background" className="z-10" />
      <Spotlight />
    </>
  );
}

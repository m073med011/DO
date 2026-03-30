"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

interface SlideItem {
  src: string;
  desktop: number;
  tablet: number;
  mobile: number;
}

const baseData1: SlideItem[] = [
  { src: "https://picsum.photos/seed/prod1/664/360",  desktop: 664, tablet: 440, mobile: 260 },
  { src: "https://picsum.photos/seed/prod2/800/360",  desktop: 800, tablet: 530, mobile: 310 },
  { src: "https://picsum.photos/seed/prod3/500/360",  desktop: 500, tablet: 330, mobile: 200 },
  { src: "https://picsum.photos/seed/prod4/700/360",  desktop: 700, tablet: 465, mobile: 275 },
  { src: "https://picsum.photos/seed/prod5/400/360",  desktop: 400, tablet: 265, mobile: 160 },
  { src: "https://picsum.photos/seed/prod6/900/360",  desktop: 900, tablet: 598, mobile: 350 },
];
const productData1: SlideItem[] = [...baseData1, ...baseData1, ...baseData1];

const baseData2: SlideItem[] = [
  { src: "https://picsum.photos/seed/prod7/550/360",  desktop: 550, tablet: 365, mobile: 215 },
  { src: "https://picsum.photos/seed/prod8/750/360",  desktop: 750, tablet: 498, mobile: 295 },
  { src: "https://picsum.photos/seed/prod9/450/360",  desktop: 450, tablet: 299, mobile: 177 },
  { src: "https://picsum.photos/seed/prod10/850/360", desktop: 850, tablet: 565, mobile: 333 },
  { src: "https://picsum.photos/seed/prod11/600/360", desktop: 600, tablet: 398, mobile: 235 },
  { src: "https://picsum.photos/seed/prod12/950/360", desktop: 950, tablet: 631, mobile: 372 },
];
const productData2: SlideItem[] = [...baseData2, ...baseData2, ...baseData2];

type Breakpoint = "mobile" | "tablet" | "desktop";

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w <= 640) setBp("mobile");
      else if (w <= 1024) setBp("tablet");
      else setBp("desktop");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return bp;
}

interface SwiperRowProps {
  data: SlideItem[];
  reverse?: boolean;
  rowPrefix: string;
  bp: Breakpoint;
}

function SwiperRow({ data, reverse = false, rowPrefix, bp }: SwiperRowProps) {
  const slideHeight = bp === "mobile" ? 150 : bp === "tablet" ? 240 : 360;
  const gap = bp === "mobile" ? 20 : bp === "tablet" ? 36 : 56;

  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={gap}
      slidesPerView="auto"
      freeMode={{ enabled: true, momentum: false }}
      loop={true}
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      style={{ width: "100%" }}
    >
      {data.map((item, index) => {
        const width = item[bp];
        return (
          <SwiperSlide
            key={`${rowPrefix}-${index}`}
            style={{ width: `${width}px` }}
          >
            <div
              style={{ width: `${width}px`, height: `${slideHeight}px` }}
              className="relative rounded-2xl overflow-hidden bg-gray-800"
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default function Products() {
  const bp = useBreakpoint();
  const rowGap = bp === "mobile" ? 20 : bp === "tablet" ? 36 : 56;

  return (
    <section
      className="w-full mx-auto my-[clamp(2.5rem,7vw,18rem)] overflow-hidden relative z-10"
      style={{ paddingTop: bp === "mobile" ? 48 : 80, paddingBottom: bp === "mobile" ? 48 : 80 }}
    >
      <div className="w-full flex flex-col" style={{ gap: rowGap }}>
        <SwiperRow data={productData1} rowPrefix="s1" bp={bp} />
        <SwiperRow data={productData2} rowPrefix="s2" reverse bp={bp} />
      </div>

      <style jsx global>{`
        .swiper-slide {
          flex-shrink: 0;
        }
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper img {
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>
    </section>
  );
}
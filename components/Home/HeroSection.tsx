import Image from "@/components/shared/CustomImage";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <div className="relative flex h-[calc(100dvh-56px)] md:h-[calc(100dvh-136px)]">
      {/* Main content */}
      <div className="container relative z-30 mx-auto flex h-full flex-col items-center justify-center text-center">
        {/* Glow — desktop only */}
        <div
          className="absolute top-[20%] left-0 w-full h-[50%] -z-10 hidden md:block"
          aria-hidden="true"
        >
          <Image src="/Glow Star.svg" alt="" fill className="object-cover" />
        </div>

        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
          className="text-2xl font-bold text-white md:text-4xl lg:text-6xl lg:leading-[78px]!"
        >
          {t('title')}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="350"
          className="mt-4 w-full text-sm lg:text-base font-normal text-paragraph md:max-w-[664px]"
        >
          {t('description')}
        </p>

        <button
          className="h-[48px] w-fit cursor-pointer px-8 mt-5 rounded-xl transition-all duration-500 ease-in-out
  bg-[linear-gradient(to_right,_#AF99FF_0%,_#AF99FF_1%,_#FFF422_50%,_#FFF422_100%)]
  text-black text-sm font-medium md:text-base"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="450"
        >
          {t('cta')}
        </button>
      </div>

      {/* Blob + Hero Circles */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
      >
        {/* Radial blob glow */}
        <div
          className="absolute w-full max-w-[1384px] h-[100px] rounded-full bottom-0 left-1/2 -translate-x-1/2 blur-[150px] opacity-25"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <div className="w-full h-full bg-[#af99ff]" />
        </div>

        {/* Hero Circles */}
        <div
          className="absolute bottom-13 lg:bottom-0 md:-bottom-5 left-1/2 z-20 max-h-[200px] w-full -translate-x-1/2"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <Image
            src="/Hero Circles.svg"
            alt="Hero Circles"
            width={1384}
            height={200}
            // Added 'h-auto' to ensure the SVG scales down proportionally on small screens without distorting
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}

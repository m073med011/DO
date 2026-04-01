import Image from "@/components/shared/CustomImage";
import StatisticsCard from "./StatisticsCard";
import { useTranslations } from "next-intl";

const aosDelays = [500, 300, 0, 300, 500];

export default function StatisticsSection() {
  const t = useTranslations("Statistics");

  const cards = [
    {
      width: "198",
      height: "224",
      color: "#FFF422",
      textColor: "#FFFDD3",
      border: "A39500",
      title: t("smartSolutions"),
      number: "+120",
    },
    {
      width: "228",
      height: "240",
      color: "#AF99FF",
      textColor: "#E8E0FF",
      border: "#4C33A4",
      title: t("successPartners"),
      number: "+200",
    },
    {
      width: "306",
      height: "280",
      color: "#FFF422",
      textColor: "#FFFDD3",
      border: "A39500",
      title: t("expYears"),
      number: "+10",
    },
    {
      width: "228",
      height: "240",
      color: "#AF99FF",
      textColor: "#E8E0FF",
      border: "#4C33A4",
      title: t("successfulProjects"),
      number: "+144",
    },
    {
      width: "198",
      height: "224",
      color: "#FFF422",
      textColor: "#FFFDD3",
      border: "A39500",
      title: t("skilledExperts"),
      number: "+30",
    },
  ];

  return (
    <div className="Statistics relative z-20 overflow-hidden lg:mt-20">
      <div className="container mx-auto">

        {/* Desktop layout — fixed 560px height */}
        <div className="hidden h-[560px] items-center justify-between gap-5 lg:flex">
          {cards.map((card, index) => (
            <StatisticsCard
              key={index}
              {...card}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={String(aosDelays[index])}
            />
          ))}
        </div>

        {/* Mobile layout — scales from 260px (xs) → 360px (sm) → 460px (md) */}
        <div className="MobileSection relative grid h-[260px] w-full grid-cols-2 items-center justify-center sm:h-[360px] md:h-[460px] lg:hidden">
          <Image
            src="/NumberSuccessShape.svg"
            alt="Statistics background"
            fill
            className="-z-10 object-contain"
          />

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 z-40 flex h-[14px] w-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[55px] sm:w-[55px]">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={34}
              height={14}
              className="h-full w-full"
            />
          </div>

          <div>
            <h2 className="mb-2 text-center font-sans text-[28px] font-bold leading-8 tracking-normal text-primary">
              +10
            </h2>
            <p className="text-center text-xs font-normal text-[#E2E2E2] sm:text-base">
              {t("expYears")}
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-center font-sans text-[28px] font-bold leading-8 tracking-normal text-primary">
              +120
            </h2>
            <p className="text-center text-xs font-normal text-[#E2E2E2] sm:text-base">
              {t("smartSolutions")}
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-center font-sans text-[28px] font-bold leading-8 tracking-normal text-primary">
              +200
            </h2>
            <p className="text-center text-xs font-normal text-[#E2E2E2] sm:text-base">
              {t("successPartners")}
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-center font-sans text-[28px] font-bold leading-8 tracking-normal text-primary">
              +30
            </h2>
            <p className="text-center text-xs font-normal text-[#E2E2E2] sm:text-base">
              {t("skilledExperts")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

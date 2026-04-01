import Image from "@/components/shared/CustomImage";
import AboutUsCard from "./AboutUsCard";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function WhyDigitalSection() {
  const t = useTranslations("WhyDigital");

  const whyDigitalCards = [
    {
      id: 1,
      title: t("cards.card1_title"),
      description: t("cards.card1_desc"),
    },
    {
      id: 2,
      title: t("cards.card2_title"),
      description: t("cards.card2_desc"),
    },
    {
      id: 3,
      title: t("cards.card3_title"),
      description: t("cards.card3_desc"),
    },
    {
      id: 4,
      title: t("cards.card4_title"),
      description: t("cards.card4_desc"),
    },
  ];

  return (
    <section className="relative flex flex-col overflow-hidden px-11 py-20 sm:px-7 xl:min-h-dvh xl:py-0">
      {/* Background blob glow */}
      <div
        className="pointer-events-none absolute rounded-lg inset-0 z-0"
        aria-hidden="true"
      >
        {/* <div className="absolute left-1/2 top-1/2 rounded-lg w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2  bg-primary opacity-5 blur-[150px]" /> */}
      </div>

      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1384px] flex-1">
          <div className="container mx-auto h-full">
            <div className="relative  flex flex-col items-center gap-14 xl:flex-row xl:items-center xl:justify-between xl:gap-75">
              {/* Left — text block */}
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="relative z-40 w-full xl:max-w-[430px] p-5 lg:p-0 "
              >
                <h1
                  className="mb-4 flex flex-wrap justify-center xl:justify-start font-bold text-white leading-tight text-center xl:text-left"
                  style={{ fontSize: "clamp(0.1rem, 5vw, 3rem)" }}
                >
                  {t("title")}
                </h1>
                <p
                  className="mb-8 text-white/60 text-center xl:text-left"
                  style={{ fontSize: "clamp(0.8rem, 3.5vw, 1.125rem)" }}
                >
                  {t("description")}
                </p>

                {/* Explore link */}
                <Link
                  href="/company"
                  className="group relative flex w-fit mx-auto xl:mx-0 cursor-pointer items-center gap-4 py-2 pr-4 text-white"
                >
                  <span className="text-sm font-normal">{t("explore")}</span>
                  <span className="relative z-20 transition-all duration-300 ease-in-out group-hover:translate-x-0.5">
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                  </span>
                  <div className="absolute right-1 top-0.5 z-10 h-8 w-8 rounded-full border-2 border-primary bg-transparent opacity-20 transition-all duration-300 ease-in-out group-hover:opacity-40" />
                </Link>
              </div>

              {/* Right — cards grid */}
              <div className="relative w-full xl:flex-1 mx-5 xl:mx-0">
                {/* Decorative ring — desktop only */}
                <div
                  className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-[#E8E0FF0A] lg:block lg:h-[871px] lg:w-[864px] 2xl:-right-10"
                  aria-hidden="true"
                >
                  <div className="relative h-full w-full">
                    <div className="absolute right-[30%] top-0 h-10 w-10 rounded-full bg-secondary opacity-80 blur-[20px]" />
                    <div className="absolute bottom-0 right-[65%] h-10 w-10 rounded-full bg-primary opacity-80 blur-[20px]" />
                  </div>
                </div>

                {/* Center shape image — desktop only */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                  <Image
                    src="/Don’t Just Offer Services/StatisticsShape.svg"
                    alt="StatisticsShape"
                    width={364}
                    height={364}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>

                {/* Cards grid */}
                <div className="relative z-30 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 md:gap-y-7 md:gap-x-4">
                  {whyDigitalCards.map((card, index) => (
                    <div
                      key={card.id}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 100}
                      className={
                        card.id === 2 || card.id === 4 ? "md:mt-7" : ""
                      }
                    >
                      <AboutUsCard
                        title={card.title}
                        description={card.description}
                        id={card.id}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

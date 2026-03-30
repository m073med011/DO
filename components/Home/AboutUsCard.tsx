interface AboutUsCardProps {
  title: string;
  description: string;
  id: number;
  "data-aos"?: string;
  "data-aos-duration"?: string;
  "data-aos-delay"?: string;
}

export default function AboutUsCard({
  title,
  description,
  "data-aos": dataAos,
  "data-aos-duration": dataAosDuration,
  "data-aos-delay": dataAosDelay,
}: AboutUsCardProps) {
  return (
    <div
      className="about-card glass h-full flex w-full flex-col justify-center rounded-xl p-6 min-h-[160px] md:min-h-[180px] md:max-w-[260px] lg:p-8 lg:min-h-[200px] lg:max-w-[280px] xl:max-w-[290px] min-[1920px]:p-10 min-[1920px]:h-[223px] min-[1920px]:min-h-[223px] min-[1920px]:max-w-[304px] min-[1920px]:w-[304px]"
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      <h2 className="mb-2 text-lg font-bold text-white md:text-xl">
        {title}
      </h2>
      <p className=" text-paragraph">{description}</p>
    </div>
  );
}

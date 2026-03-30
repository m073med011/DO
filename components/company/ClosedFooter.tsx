import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ClosedFooterProps {
  title: string;
  description: string;
  bottomOneTitle: string;
  bottomTwoTitle: string;
  link: string;
}

const ClosedFooter: React.FC<ClosedFooterProps> = ({
  title,
  description,
  bottomOneTitle,
  bottomTwoTitle,
  link,
}) => {
  return (
    <section className="relative w-full flex justify-center items-center  mt-48">
      <div
        className="relative z-10 w-full max-w-[850px]  "
        data-aos="fade-up"
      >
        {/* Background Shapes */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:-top-10 md:-left-15 md:translate-x-0 w-36 md:w-56 h-36 md:h-56 opacity-100 pointer-events-none -z-10 mix-blend-screen drop-shadow-2xl object-cover">
          <Image
            src="/company/Shape%20-%20L.svg"
            alt=""
            fill
            className="object-contain drop-shadow-2xl transform -rotate-12"
          />
        </div>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:-right-15 md:translate-x-0 w-36 md:w-56 h-36 md:h-56 opacity-100 pointer-events-none -z-10 mix-blend-screen drop-shadow-2xl object-cover">
          <Image
            src="/company/Shape%20-%20R.svg"
            alt=""
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Card Content */}
        <div className="relative z-10 w-full px-6 md:px-16 py-12 md:py-20 rounded-4xl border border-white/10 about-card text-center shadow-2xl bg-[#0a0911]/80 backdrop-blur-xl">
          <h2 className="text-[22px] md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight tracking-wide">
            {title}
          </h2>
          <p className="text-[13px] md:text-base text-[#A1A1A1] max-w-[620px] mx-auto mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
            {description}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full max-w-sm mx-auto md:max-w-none">
            <Link
              href={link}
              className="w-full md:w-auto text-center py-3 rounded-xl font-semibold text-[#0a0911] bg-linear-to-r from-[#AF99FF] to-primary hover:scale-105 transition-transform duration-300 shadow-lg text-sm md:text-sm whitespace-nowrap px-8"
            >
              {bottomOneTitle}
            </Link>
            <Link
              href={link}
              className="w-full md:w-auto text-center py-3 rounded-xl font-semibold text-[#0a0911] bg-linear-to-r from-[#AF99FF] to-primary hover:scale-105 transition-transform duration-300 shadow-lg text-sm md:text-sm whitespace-nowrap px-8"
            >
              {bottomTwoTitle}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosedFooter;

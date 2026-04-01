"use client";

import Image from "@/components/shared/CustomImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  { name: "AppleMusic", src: "/parternars/AppleMusic.svg" },
  { name: "Behance", src: "/parternars/Behance.svg" },
  { name: "Discord", src: "/parternars/Discord.svg" },
  { name: "Discord", src: "/parternars/Discord.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "TikTok", src: "/parternars/TikTok.svg" },
  { name: "Instagram", src: "/parternars/instagram.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Snapchat", src: "/parternars/Snapchat.svg" },
  { name: "Twitch", src: "/parternars/twitch.svg" },
];

export default function Parternars() {
  return (
    <section
      className="w-full max-w-[1920px] mx-auto overflow-hidden relative z-10 flex items-center bg-transparent"
      style={{
        height: "clamp(80px, 12vw, 144px)",
        marginTop: "clamp(48px, 8vw, 120px)",
      }}
      data-aos="fade-up"
    >
      <div className="w-full  ">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 24 },
            480: { slidesPerView: 4, spaceBetween: 32 },
            640: { slidesPerView: 5, spaceBetween: 40 },
            768: { slidesPerView: 6, spaceBetween: 48 },
            1024: { slidesPerView: 7, spaceBetween: 56 },
            1280: { slidesPerView: 9, spaceBetween: 60 },
            1536: { slidesPerView: 10, spaceBetween: 64 },
          }}
          className="partners-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div
                className="relative w-full opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{
                  height: "clamp(28px, 14vw, 48px)",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          -webkit-transition-timing-function: linear !important;
          transition-timing-function: linear !important;
          align-items: center;
        }
        .partners-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
}


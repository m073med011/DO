"use client";

import Image from "@/components/shared/CustomImage";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v10a8 8 0 1 1-8-8v3a5 5 0 1 0 5 5z"></path>
  </svg>
);

const SocialMedia = [
  {
    id: 1,
    icon: <InstagramIcon />,
    socialName: "Instagram",
    link: "https://www.instagram.com/digital.order1/",
  },
  {
    id: 2,
    icon: <LinkedinIcon />,
    socialName: "linkedin",
    link: "https://www.linkedin.com/company/do-sa/",
  },
  {
    id: 3,
    icon: <WhatsappIcon />,
    socialName: "whatsapp",
    link: "https://wa.me/966502765770",
  },
  {
    id: 4,
    icon: <TiktokIcon />,
    socialName: "tiktok",
    link: "https://www.tiktok.com/@digital.order1?is_from_webapp=1&sender_device=pc",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer dir="ltr" className="relative mx-auto mt-[120px] 2xl:mt-[6.25vw] max-w-[1384px] w-full 2xl:max-w-[72.08vw] px-11 py-8 text-white sm:px-7 md:py-14">
      <div className="container relative mx-auto text-white">
        <div className="grid grid-cols-2 gap-16 border-b border-white/10 pb-6 md:grid-cols-3 md:gap-[72px] md:pb-12 lg:grid-cols-4 2xl:grid-cols-6 2xl:gap-[3.75vw]">
          
          <div className="col-span-2 md:col-span-4 2xl:col-span-2">
            <Link href="/">
              <Image
                src="/Logo.svg"
                className="mb-6 inline-block object-contain 2xl:mb-[1.25vw] 2xl:w-[6.87vw] 2xl:h-[2.91vw]"
                alt="DO logo"
                width={132}
                height={56}
              />
            </Link>
            <div className="content">
              <p className="text-base font-normal !text-white 2xl:text-[0.83vw]">
                {t('slogan1')}
              </p>
              <p className="mb-8 text-base font-normal !text-white 2xl:mb-[1.66vw] 2xl:text-[0.83vw]">
                {t('slogan2')}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 2xl:gap-[0.83vw]">
                {SocialMedia.map((social) => (
                  <div
                    key={social.id}
                    className="group flex h-10 w-10 2xl:h-[2.08vw] 2xl:w-[2.08vw] items-center justify-center rounded-full border border-white/10"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl 2xl:text-[1.04vw] text-white transition-all duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110"
                      aria-label={`Visit our ${social.socialName} page`}
                    >
                      {social.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="w-full md:max-w-[304px] 2xl:max-w-[15.83vw]">
              <h2 className="mb-4 text-lg font-normal capitalize text-white 2xl:mb-[0.83vw] 2xl:text-[0.93vw]">
                {t('addressTitle')}
              </h2>
              <p className="cursor-pointer text-[#a1a1aa] transition-all duration-200 ease-in-out hover:text-[#fff422] 2xl:text-[0.83vw]">
                {t('addressText')}
              </p>
            </div>
            <div className="mt-6 md:mt-10 2xl:mt-[2.08vw]">
              <h2 className="mb-4 text-lg font-normal capitalize text-white 2xl:mb-[0.83vw] 2xl:text-[0.93vw]">
                {t('getInTouch')}
              </h2>
              <p className="mb-2 text-[#a1a1aa] transition-all 2xl:mb-[0.41vw] 2xl:text-[0.83vw]">
                <span className="mx-1">
                  <a
                    href="tel:+966502765770"
                    target="_blank"
                    className="cursor-pointer duration-200 ease-in-out hover:text-[#fff422]"
                  >
                    0502765770
                  </a>
                </span>
              </p>
              <p className="cursor-pointer text-[#a1a1aa] transition-all duration-200 ease-in-out hover:text-[#fff422] 2xl:text-[0.83vw]">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=info@do.com.sa"
                  target="_blank"
                >
                  info@do.com.sa
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="mb-4 text-lg font-normal capitalize text-white 2xl:mb-[0.83vw] 2xl:text-[0.93vw]">
              {t('quickLinks')}
            </h2>
            <nav>
              <ul className="flex flex-col gap-2 text-lg font-medium 2xl:gap-[0.41vw] 2xl:text-[0.93vw]">
                {[
                  { path: "/company", label: "About Us" },
                  { path: "/solutions", label: "Solutions" },
                  { path: "/portfolio", label: "Portfolio" },
                  { path: "/blog", label: "Blog" },
                  { path: "/career", label: "Career" },
                ].map((item) => (
                  <li
                    key={item.path}
                    className={`${
                      pathname === item.path ? "text-[#fff422]" : ""
                    } cursor-pointer text-[#a1a1aa] transition-all duration-200 ease-in-out hover:text-[#fff422]`}
                  >
                    <Link href={item.path}>{t(`nav.${item.label}` as any)}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <h2 className="mb-4 text-lg font-normal capitalize text-white 2xl:mb-[0.83vw] 2xl:text-[0.93vw]">
              {t('support')}
            </h2>
            <nav>
              <ul className="flex flex-col gap-2 text-lg font-medium 2xl:gap-[0.41vw] 2xl:text-[0.93vw]">
                {[
                  { path: "/faqs", label: "FAQs" },
                  { path: "/contact", label: "Contact" },
                  { path: "/privacy", label: "Privacy" },
                  { path: "/terms", label: "Terms" },
                ].map((item) => (
                  <li
                    key={item.path}
                    className={`${
                      pathname === item.path ? "text-[#fff422]" : ""
                    } cursor-pointer text-[#a1a1aa] transition-all duration-200 ease-in-out hover:text-[#fff422]`}
                  >
                    <Link href={item.path}>{t(`nav.${item.label}` as any)}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-4 px-4 text-center text-sm font-normal text-[#a1a1aa] md:mt-6 2xl:mt-[1.25vw] 2xl:text-[0.72vw]">
          <p className="flex justify-center items-center flex-wrap">
            {t("rights", { year: currentYear })}
            <Image
              src="/Logo.svg"
              className="mx-1 inline-block object-contain 2xl:w-[2.08vw] 2xl:h-[1.04vw]"
              width={40}
              height={20}
              alt="Do Logo"
              unoptimized
            />
          </p>
        </div>
      </div>
    </footer>
  );
}


"use client";

import Image from "@/components/shared/CustomImage";
import { Link, usePathname } from "@/i18n/routing";
import { useState, useEffect, useRef } from "react";
import NAV_LINKS from "@/data/Data-Header";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const [isSideBar, setIsSideBar] = useState(false);
  const isSideBarRef = useRef(isSideBar);
  const pathname = usePathname();
  const t = useTranslations("Header");
  const locale = useLocale();
  const nextLocale = locale === 'en' ? 'ar' : 'en';
  const nextLocaleLabel = locale === 'en' ? 'AR' : 'EN';

  // Keep ref in sync so the scroll handler always reads the latest value
  // without re-registering the listener on every toggle
  useEffect(() => {
    isSideBarRef.current = isSideBar;
  }, [isSideBar]);

  // Close sidebar on scroll — listener registered once
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isSideBarRef.current) setIsSideBar(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isSideBar ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSideBar]);

  const toggleSidebar = () => setIsSideBar((prev) => !prev);

  return (
    <header className="relative  mx-auto max-w-[1384px]  px-11 pt-8 text-white sm:px-7 md:pt-14">
      <div>
        <div className="relative z-20" data-aos="fade-down" data-aos-duration="600">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="DigitalOGO"
                width={132}
                height={56}
                className="w-[90px] md:h-[48px] md:w-[112px] lg:h-[56px] lg:w-[132px]"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="relative hidden lg:block">
              <div className="blob bg-[#af99ff]" aria-hidden="true" />
              <ul className="flex gap-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className={pathname === link.href ? "active" : ""}>
                    <Link href={link.href}>{t(`nav.${link.label}` as any)}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop: Get in Touch & Lang Switcher */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href={pathname} locale={nextLocale} className="gradient-button h-[48px] w-fit cursor-pointer px-8 transition-all duration-500 ease-in-out">
                <span className="gradient-bg" aria-hidden="true" />
                <span className="button-text text-sm font-medium md:text-base">{nextLocaleLabel}</span>
              </Link>
              <Link href="/contact" className="gradient-button h-[48px] w-fit cursor-pointer px-8 transition-all duration-500 ease-in-out">
                <span className="gradient-bg" aria-hidden="true" />
                <span className="button-text text-sm font-medium md:text-base">{t('getInTouch')}</span>
              </Link>
            </div>

            {/* Hamburger — single button, icon swaps */}
            <button
              className="cursor-pointer lg:hidden flex items-center justify-center w-8 h-8"
              onClick={toggleSidebar}
              aria-label={isSideBar ? "Close menu" : "Open menu"}
              aria-expanded={isSideBar}
            >
              {isSideBar ? (
                <span className="text-white text-xl leading-none">✕</span>
              ) : (
                <span className="flex flex-col gap-1.5">
                  <span className="block w-6 h-0.5 bg-white rounded" />
                  <span className="block w-6 h-0.5 bg-white rounded" />
                  <span className="block w-6 h-0.5 bg-white rounded" />
                </span>
              )}
            </button>

          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`sidebar fixed inset-x-0 top-[110px] z-50 flex h-[calc(100dvh-136px)] w-full flex-col items-start overflow-y-auto px-11 sm:px-7 lg:hidden transition-all duration-300 ${
            isSideBar
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "-translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div>
            <nav className="mt-4 inline-block w-full">
              <ul className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.label}
                    className={`text-white hover:text-[#fff422] ${
                      pathname === link.href ? "active" : ""
                    }`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsSideBar(false)}
                      className="w-full"
                    >
                      {t(`nav.${link.label}` as any)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-5 flex gap-4">
              <Link href={pathname} locale={nextLocale} onClick={() => setIsSideBar(false)} className="gradient-button h-[48px] w-fit cursor-pointer px-8 transition-all duration-500 ease-in-out">
                <span className="gradient-bg" aria-hidden="true" />
                <span className="button-text text-sm font-medium md:text-base">{nextLocaleLabel}</span>
              </Link>
              <Link href="/contact" onClick={() => setIsSideBar(false)} className="gradient-button h-[48px] w-fit cursor-pointer px-8 transition-all duration-500 ease-in-out">
                <span className="gradient-bg" aria-hidden="true" />
                <span className="button-text text-sm font-medium md:text-base">{t('getInTouch')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


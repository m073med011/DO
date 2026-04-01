"use client";

import React, { useState } from "react";
import Image from "@/components/shared/CustomImage";
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations("ContactUs");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = t.raw("faqs") as { question: string; answer: string }[];

  return (
    <div className="min-h-screen bg-[#0a0911] text-white pt-24 pb-16 font-sans selection:bg-[#fff422] selection:text-black">
      <div className="container mx-auto">
        
        {/* Top Section: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
          
          {/* Left: Contact Info */}
          <div data-aos="fade-right" className="flex flex-col items-center md:items-start text-center md:text-start">
            <h1 className="font-bold mb-6 leading-tight w-full md:w-[37.5rem] md:h-[5.25rem] text-[1.875rem] mx-auto md:mx-0">
              {t.rich("title", {
                br: () => <br className="hidden lg:block" />
              })}
            </h1>
            <p className="text-gray-400 mb-12 leading-relaxed w-full md:w-[28.75rem] md:h-[3.25rem] mx-auto md:mx-0">
              {t("description")}
            </p>

            <ul className="space-y-6 text-gray-300 w-fit md:w-auto text-start">
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <span className="w-full md:w-[13.625rem] min-h-[1.625rem] flex items-center">{t("info.email")}</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="w-full md:w-[13.625rem] min-h-[1.625rem] flex items-center">{t("info.phone")}</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="w-full md:w-[13.625rem] min-h-[1.625rem] flex items-center leading-snug">{t("info.address")}</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="w-full md:w-[13.625rem] min-h-[1.625rem] flex items-center">{t("info.hours")}</span>
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div data-aos="fade-left" className="bg-[#282638] w-full md:w-[41.5rem] md:h-[40.3125rem] rounded-2xl p-6 md:p-8 shadow-2xl border border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col w-full md:w-[16.75rem] md:h-[5.4375rem] justify-between">
                  <label className="text-sm text-gray-300 ml-1 mb-2">{t("form.fullName")}</label>
                  <input 
                    type="text" 
                    placeholder={t("form.namePlaceholder")} 
                    className="w-full h-full bg-[#0a0911] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#fff422] transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="flex flex-col w-full md:w-[16.75rem] md:h-[5.4375rem] justify-between">
                  <label className="text-sm text-gray-300 ml-1 mb-2">{t("form.email")}</label>
                  <input 
                    type="email" 
                    placeholder={t("form.emailPlaceholder")} 
                    className="w-full h-full bg-[#0a0911] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#fff422] transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col w-full md:w-[16.75rem] md:h-[5.4375rem] justify-between">
                  <label className="text-sm text-gray-300 ml-1 mb-2">{t("form.phone")}</label>
                  <input 
                    type="tel" 
                    placeholder={t("form.phonePlaceholder")} 
                    className="w-full h-full bg-[#0a0911] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#fff422] transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="flex flex-col w-full md:w-[16.75rem] md:h-[5.4375rem] justify-between">
                  <label className="text-sm text-gray-300 ml-1 mb-2">{t("form.serviceType")}</label>
                  <div className="relative h-full">
                    <select className="w-full h-full bg-[#0a0911] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 appearance-none focus:outline-none focus:border-[#fff422] transition-colors gap-2">
                      <option>{t("form.servicePlaceholder")}</option>
                      <option>{t("form.services.general")}</option>
                      <option>{t("form.services.project")}</option>
                      <option>{t("form.services.support")}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300 ml-1">{t("form.message")}</label>
                <textarea 
                  rows={4}
                  placeholder={t("form.messagePlaceholder")} 
                  className="w-full bg-[#0a0911] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#fff422] transition-colors placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3.5 bg-linear-to-r from-[#af99ff] to-primary text-[#0a0911] font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4"
              >
                {t("form.send")}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: FAQs */}
        <div className="max-w-3xl mx-auto mb-32" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t("faqsTitle")}
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-[#151320] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'shadow-lg' : ''}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-start focus:outline-none"
                >
                  <span className="font-medium text-sm md:text-base text-gray-200">{faq.question}</span>
                  <div className="shrink-0 ml-4">
                    {openFaq === index ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </button>
                
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-6">
            <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#fff422] transition-colors group">
              {t("seeMore")} 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Section: Map */}
        <div className="text-center pb-12" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl md:text-3xl font-bold mb-16">
            {t("bottomTitle")}
          </h2>
          <div className="relative w-full max-w-4xl mx-auto flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-700">
            <Image 
              src="/Map.svg"
              alt="World Map illustrating broad digital impact from Saudi Arabia"
              width={913}
              height={457}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}

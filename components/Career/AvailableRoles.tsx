import React from "react";
import { useTranslations } from "next-intl";

const AvailableRoles = () => {
  const t = useTranslations("Career.roles");

  const roles = [
    {
      title: t("items.designer_mid.title"),
      description: t("items.designer_mid.description"),
      location: t("items.designer_mid.location"),
      type: t("items.designer_mid.type"),
      level: t("items.designer_mid.level"),
    },
    {
      title: t("items.designer_senior.title"),
      description: t("items.designer_senior.description"),
      location: t("items.designer_senior.location"),
      type: t("items.designer_senior.type"),
      level: t("items.designer_senior.level"),
    },
    {
      title: t("items.designer_mid.title"),
      description: t("items.designer_mid.description"),
      location: t("items.designer_mid.location"),
      type: t("items.designer_mid.type"),
      level: t("items.designer_mid.level"),
    },
    {
      title: t("items.designer_senior.title"),
      description: t("items.designer_senior.description"),
      location: t("items.designer_senior.location"),
      type: t("items.designer_senior.type"),
      level: t("items.designer_senior.level"),
    },
    {
      title: t("items.designer_mid.title"),
      description: t("items.designer_mid.description"),
      location: t("items.designer_mid.location"),
      type: t("items.designer_mid.type"),
      level: t("items.designer_mid.level"),
    },
    {
      title: t("items.designer_senior.title"),
      description: t("items.designer_senior.description"),
      location: t("items.designer_senior.location"),
      type: t("items.designer_senior.type"),
      level: t("items.designer_senior.level"),
    },
  ];

  return (
    <section className="mt-[208px] px-4 sm:px-6 lg:px-8  mx-auto" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="about-card p-8 rounded-2xl flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer"
            data-aos="fade-up" 
            data-aos-delay={idx * 100}
            data-aos-duration="1000"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
              {role.title}
            </h3>
            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8 grow">
              {role.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-auto">
              <span className="text-xs font-medium text-[#A1A1A1] px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)]">
                {role.location}
              </span>
              <span className="text-xs font-medium text-[#A1A1A1] px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)]">
                {role.type}
              </span>
              <span className="text-xs font-medium text-[#A1A1A1] px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)]">
                {role.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableRoles;

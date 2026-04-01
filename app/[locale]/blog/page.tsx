"use client";

import { useState } from "react";
import ClosedFooter from "@/components/company/ClosedFooter";
import { useTranslations } from "next-intl";

const blogPosts = [
  {
    id: 1,
    image: "https://picsum.photos/seed/blog1/600/400",
    category: "Article",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/blog2/600/400",
    category: "Digital Marketing",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/blog3/600/400",
    category: "Development",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/blog4/600/400",
    category: "Development",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/blog5/600/400",
    category: "Digital Marketing",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  },
  {
    id: 6,
    image: "https://picsum.photos/seed/blog6/600/400",
    category: "Design",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  },
  {
    id: 7,
    image: "https://picsum.photos/seed/blog7/600/400",
    category: "Development",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  },
  {
    id: 8,
    image: "https://picsum.photos/seed/blog8/600/400",
    category: "Development",
    date: "April 23, 2024",
    readTime: "8 min Read",
    title: "Rorem ipsum dolor sit adipiscing elit, Nunc vulputate libero interdum.",
    excerpt: "Donec ipsum dolor sit amet, consectetur adipiscing elit, vulputate libero et velit interdum, Class aptent taciti ..."
  }
];

export default function Blog() {
  const t = useTranslations("Blog");
  const tFooter = useTranslations("ClosedFooter");
  
  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "marketing", label: t("categories.marketing") },
    { id: "design", label: t("categories.design") },
    { id: "development", label: t("categories.development") },
    { id: "ai", label: t("categories.ai") },
    { id: "startup", label: t("categories.startup") },
    { id: "case", label: t("categories.case") }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main className="relative flex flex-col overflow-hidden px-5 py-20 xl:py-32 xl:pt-40 min-h-dvh">
      {/* Background layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[20%] h-[50%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-primary opacity-[0.03] blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-[1384px] relative z-20">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16">
          <h1 
            data-aos="fade-up" 
            data-aos-duration="600"
            className="mb-6 font-bold text-white leading-tight" 
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            {t("title")}
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-white/60 max-w-3xl" 
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
          >
            {t("description")}
          </p>
        </div>

        {/* Categories Filter */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="600"
          data-aos-delay="200"
          className="flex flex-nowrap items-center justify-start lg:justify-center gap-3 lg:gap-4 mb-16 overflow-x-auto pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`snap-start whitespace-nowrap px-6 py-2.5 rounded-xl text-sm transition-all duration-300 shrink-0 ${
                activeCategory === category.id
                  ? "bg-primary text-black font-semibold"
                  : "bg-[#13121d] border border-white/5 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="bg-[#15141f] rounded-2xl overflow-hidden border border-white/5 group hover:border-primary/20 transition-colors duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-[1.8/1] overflow-hidden bg-[#1f1e2c]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-[#af99ff] text-white text-xs font-semibold px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-white/60 text-xs">{post.date}</span>
                  <span className="text-white/60 text-xs">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-white/60 text-sm lg:text-base line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination indicator */}
        <div className="flex justify-center items-center gap-2 mt-16" data-aos="fade-up" data-aos-duration="500">
          {[1, 2, 3, 4].map((dot, index) => (
            <div 
              key={dot}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-primary w-2 h-2' : 'bg-white/20'}`}
            />
          ))}
        </div>

      </div>
      <ClosedFooter 
          link="/contact" 
          title={tFooter("title")} 
          description={tFooter("description")}
          bottomOneTitle={tFooter("bottomOneTitle")} 
          bottomTwoTitle={tFooter("bottomTwoTitle")} 
        />
    </main>
  );
}

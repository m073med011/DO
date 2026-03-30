import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Creative Solutions",
    description:
      "We Create Unique Ideas And Solutions That Fit Your Business Needs And Support Brand Growth.",
    image: "/Focused Solutions/Creative Solutions - Shape.svg",
    link: "#",
  },
  {
    title: "Digital Engineering",
    description:
      "We Build Advanced Digital Systems That Ensure Strong Performance And High Flexibility To Support Your Business.",
    image: "/Focused Solutions/Digital Engineering - Shape.svg",
    link: "#",
  },
  {
    title: "Customer Experience",
    description:
      "We Design Seamless Digital Experiences That Enhance Customer Satisfaction And Strengthen Your Relationship.",
    image: "/Focused Solutions/CX - Shape.svg",
    link: "#",
  },
  {
    title: "Growth Solutions",
    description:
      "We Provide Innovative Strategies To Help You Expand Your Business And Increase Profits Smartly.",
    image: "/Focused Solutions/Growth Solutions - Shape.svg",
    link: "#",
  },
];

const workspaceSolution = {
  title: "Work Space",
  description:
    "We Provide Integrated Digital Workspaces That Facilitate Collaboration And Improve Team Productivity.",
  image: "/Focused Solutions/Work Space - Shape.svg",
  link: "#",
};

export default function FocusedSolutions() {
  return (
    <section className="relative w-full py-20 overflow-hidden ">
      {/* Background SVG Shape */}
      <div className="absolute -bottom-75 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,47.08vw,904px)] h-[clamp(300px,47.08vw,904px)] z-0 pointer-events-none max-w-[100vw] overflow-hidden">
        <Image
          src="/Focused Solutions/Solutions Shape.svg"
          alt="Solutions Background"
          width={904}
          height={904}
          className="w-full h-full object-contain "
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-32  relative z-10">
        {/* Section Title */}
        <div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-2 sm:px-4"
          data-aos="fade-up"
        >
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-snug sm:leading-tight">
            Smart, Scalable, and Focused
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Solutions That Make A Difference
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col items-center gap-[30px]">
          {/* Top 4 Cards Grid */}
          <div className="flex flex-wrap justify-center w-full gap-[30px] mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative shrink-0 about-card w-full lg:w-[calc(50%-15px)] max-w-[clamp(300px,90vw,664px)] lg:max-w-[clamp(300px,34.58vw,664px)] h-[clamp(240px,17.91vw,344px)] bg-linear-to-br from-[#1a1829] to-[#0A0911] border border-white/10 rounded-2xl py-[72px] px-8 sm:px-12 overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* CHANGED: Adjusted width from w-[85%] to w-[60%] for mobile screens */}
                <div className="relative z-10 w-[90%] sm:w-2/3">
                  <h3 className="font-semibold text-white mb-[clamp(0.5rem,0.62vw,0.75rem)]  text-[clamp(1.25rem,1.25vw,1.5rem)]">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-[clamp(1rem,1.25vw,1.5rem)] leading-relaxed text-[clamp(0.875rem,0.83vw,1rem)]">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.link}
                    className="inline-flex items-center text-white font-medium hover:text-[#fff422] transition-colors text-[clamp(0.75rem,0.62vw,0.875rem)] underline sm:no-underline underline-offset-4"
                  >
                    Explore Our Solutions
                    <svg
                      className="hidden sm:block w-[clamp(0.875rem,0.83vw,1rem)] h-[clamp(0.875rem,0.83vw,1rem)] ml-[clamp(0.375rem,0.41vw,0.5rem)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Card Image */}
                {/* CHANGED: Added z-0 to ensure it stays strictly behind the text */}
                <div className="absolute z-0 -bottom-10 -right-[clamp(0.5rem,0.83vw,1rem)] w-[clamp(120px,15vw,224px)] h-[clamp(160px,15vw,224px)]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Centered Card */}
          <div
            className="w-full max-w-[clamp(300px,90vw,664px)] lg:max-w-[clamp(300px,34.58vw,664px)]"
            data-aos="fade-up"
          >
            <div className="relative w-full h-[clamp(240px,17.91vw,344px)] bg-linear-to-br from-[#1a1829] to-[#0A0911] border border-white/10 rounded-2xl p-[clamp(24px,2.5vw,48px)] overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col justify-center">
              
              {/* CHANGED: Adjusted width from w-[85%] to w-[60%] */}
              <div className="relative z-10 w-[90%] sm:w-2/3">
                <h3 className="font-semibold text-white mb-[clamp(0.5rem,0.62vw,0.75rem)] text-[clamp(1.25rem,1.25vw,1.5rem)]">
                  {workspaceSolution.title}
                </h3>
                <p className="text-gray-400 mb-[clamp(1rem,1.25vw,1.5rem)] leading-relaxed text-[clamp(0.875rem,0.83vw,1rem)]">
                  {workspaceSolution.description}
                </p>
                <Link
                  href={workspaceSolution.link}
                  className="inline-flex items-center text-white font-medium hover:text-[#fff422] transition-colors text-[clamp(0.75rem,0.62vw,0.875rem)] underline sm:no-underline underline-offset-4"
                >
                  Explore Our Solutions
                  <svg
                    className="hidden sm:block w-[clamp(0.875rem,0.83vw,1rem)] h-[clamp(0.875rem,0.83vw,1rem)] ml-[clamp(0.375rem,0.41vw,0.5rem)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* CHANGED: Added z-0 here as well */}
              <div className="absolute z-0 -bottom-[clamp(0.5rem,0.83vw,1rem)] -right-[clamp(0.5rem,0.83vw,1rem)] w-[clamp(160px,15vw,224px)] h-[clamp(160px,15vw,224px)]">
                <Image
                  src={workspaceSolution.image}
                  alt={workspaceSolution.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
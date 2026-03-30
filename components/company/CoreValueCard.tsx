import React from 'react';

interface CoreValueCardProps {
  title?: string;
  description?: string;
  id: number;
  "data-aos"?: string;
  "data-aos-duration"?: string | number;
  "data-aos-delay"?: string | number;
  children?: React.ReactNode;
}

export default function CoreValueCard({ title, description, id, children, ...aosProps }: CoreValueCardProps) {
  return (
    <div
      {...aosProps}
      className={`about-card flex min-h-[173px] items-center justify-start rounded-xl border px-7 py-6 md:px-12 md:py-10 lg:justify-center ${
        id === 2 ? 'max-xl:hidden border-primary/25' : 'border-secondary/15'
      }`}
    >
      {id !== 2 ? (
        <div>
          {children}
          {title && (
            <h1 className="mb-2 mt-6 text-2xl font-semibold text-white">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-base font-normal text-paragraph md:leading-[28.8px]">
              {description}
            </p>
          )}
        </div>
      ) : (
        <div className="relative">
          {title && (
            <h1 className="mx-auto relative z-20 max-w-[166px] text-5xl text-center font-bold text-primary md:leading-[67.2px]">
              {title}
            </h1>
          )}
          <div className="blob bg-primary block" aria-hidden="true"></div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import type { JourneyOverview as JourneyOverviewType } from "@/sanity.types";

export default function JourneyOverview({ block }: { block?: JourneyOverviewType }) {
  const eyebrow = block?.eyebrow ?? "THE JOURNEY";
  const defaultSteps = [
    "DISCOVERY & BRIEF",
    "MATERIAL SOURCING",
    "DESIGN & DEVELOPMENT",
    "SAMPLING & REFINEMENT",
    "PRODUCTION",
    "DELIVERY & GROWTH"
  ];
  const steps = block?.steps?.length ? block.steps : defaultSteps;

  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden py-[40px] lg:pt-[42px] lg:pb-[80px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col relative">
        
        {/* Eyebrow */}
        <p className="text-[#b86e58] text-[10px] font-medium tracking-[2.5px] leading-[16px] uppercase mb-[30px]">
          {eyebrow}
        </p>

        {/* Top Horizontal Divider */}
        <div className="lg:left-[84px] lg:right-[84px] top-[74px] h-px bg-[#d2bfaf]/50" />

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row justify-start pt-[30px]">
          {steps.map((step: string, index: number) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <React.Fragment key={index}>
                {/* Step Item */}
                <div className="flex flex-col mb-6 lg:mb-0 lg:flex-1 lg:max-w-[196px]">
                  <p className="text-[#1b2845] text-[9.8px] font-medium tracking-[1px] leading-[18px] uppercase">
                    <span className="mr-[8px] lg:mr-[10px]">{num}</span>
                    <span>{step}</span>
                  </p>
                </div>

                {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block w-px h-[52px] bg-[#d2bfaf] opacity-45 mx-[8px] xl:mx-[16px] mt-[-6px]" />
                )}
                {index < steps.length - 1 && (
                  <div className="block lg:hidden w-full h-px bg-[#d2bfaf] opacity-45 my-4" />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}

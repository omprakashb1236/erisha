"use client";

﻿
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import type { OurStory as OurStoryType } from "@/sanity.types";

export default function OurStory({ block }: { block?: OurStoryType }) {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    const elements = gsap.utils.toArray(containerRef.current!.querySelectorAll('.gsap-animate'));
    if (elements.length > 0) {
      gsap.from(elements, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }
  }, { scope: containerRef });

  const eyebrow = block?.eyebrow ?? "OUR STORY";
  const headlineLine1 = block?.headlineLine1 ?? "";
  const headlineLine2 = block?.headlineLine2 ?? "";
  const subhead = block?.subhead ?? "";
  
  const paragraph1 = block?.paragraph1 ?? "";
  const paragraph2 = block?.paragraph2 ?? "";

  const timelineItems = block?.timelineItems ?? [
    { title: "2018", subtitle: "FOUNDED WITH A CLEAR VISION", isHighlighted: true, titleSize: "large" },
    { title: "TODAY", subtitle: "A TRUSTED MANUFACTURING PARTNER", isHighlighted: false, titleSize: "large" },
    { title: "CLOVIA & RELIANCE", subtitle: "AND OTHER PRIVATE-LABEL PARTNERS", isHighlighted: false, titleSize: "medium" },
  ];

  return (
    <section ref={containerRef as any} className="w-full bg-[#f9f2ea] overflow-hidden py-[40px] lg:py-[100px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
        
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-16">
          
          {/* Left Block */}
          <div className="flex flex-col w-full lg:w-[560px]">
            <p className="gsap-animate text-[#b86e58] text-[10px] lg:text-[11px] font-medium tracking-[2px] lg:tracking-[3.1px] uppercase mb-[18px]">
              {eyebrow}
            </p>
            <div className="gsap-animate w-[46px] h-px bg-[#b86e58]/55 mb-[38px]" />
            
            <h2 className="gsap-animate font-playfair text-[#1b2845] text-4xl lg:text-[56px] leading-[1.1] lg:leading-[60px] mb-[25px]">
              {headlineLine1 && <span className="block">{headlineLine1}</span>}
              {headlineLine2 && <span className="block">{headlineLine2}</span>}
            </h2>
            
            <p className="gsap-animate font-playfair font-extrabold italic text-[#b86e58] text-[26px] lg:text-[31px] leading-[1.3] lg:leading-[39px]">
              {subhead}
            </p>
          </div>

          {/* Right Block (Top aligned with the left headline) */}
          <div className="flex flex-col w-full lg:w-[570px] lg:mt-[73px]">
            {paragraph1 && (
              <p className="gsap-animate text-[#4a505e] text-[14px] lg:text-[15.5px] leading-[1.6] lg:leading-[27px] mb-[30px] lg:mb-[50px]">
                {paragraph1}
              </p>
            )}
            {paragraph2 && (
              <p className="gsap-animate text-[#4a505e] text-[14px] lg:text-[15.5px] leading-[1.6] lg:leading-[27px]">
                {paragraph2}
              </p>
            )}
          </div>

        </div>

        {/* Bottom Timeline Section */}
        {timelineItems.length > 0 && (
          <div className="flex flex-col mt-[40px] lg:mt-[100px]">
            {/* Full Width Divider */}
            <div className="gsap-animate w-full h-px bg-[#d2bfaf]/50 mb-[40px] lg:mb-[52px]" />
            
            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
              {timelineItems.map((item, index) => {
                const isLarge = item.titleSize === 'large' || !item.titleSize;
                const titleColor = item.isHighlighted ? "text-[#b86e58]" : "text-[#1b2845]";
                const titleFontSize = isLarge 
                  ? "text-[36px] lg:text-[43px] leading-none lg:leading-[48px]" 
                  : "text-[28px] lg:text-[32px] leading-[1.2] lg:leading-[40px]";

                return (
                  <div key={index} className={`gsap-animate flex flex-col ${index === timelineItems.length - 1 ? 'lg:mr-[20px]' : ''}`}>
                    <p className={`font-playfair ${titleColor} ${titleFontSize} mb-[10px]`}>
                      {item.title}
                    </p>
                    <p className="gsap-animate text-[#4a505e] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

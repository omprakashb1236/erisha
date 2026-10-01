"use client";

﻿
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import type { PeopleProductsPlanet as PeopleProductsPlanetType } from "@/sanity.types";

export default function PeopleProductsPlanet({ block }: { block?: PeopleProductsPlanetType }) {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    const elements = gsap.utils.toArray(containerRef.current!.querySelectorAll('.gsap-animate'));
    if (elements.length > 0) {
      gsap.from(elements, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }
  }, { scope: containerRef });

  const eyebrow = block?.eyebrow ?? "OUR APPROACH";
  const headlineLine1 = block?.headlineLine1 ?? "Responsibility,";
  const headlineLine2 = block?.headlineLine2 ?? "considered as a whole.";
  const paragraph = block?.paragraph ?? "There is no single decision that makes a product responsible. It is the accumulation of choices — how people are treated, how materials are selected, how efficiently production runs and how consistently quality is protected.";
  
  const defaultPillars = [
    {
      title: "People",
      description: "A safe, respectful and empowering work environment, supported by skilled people at the heart of design and production.",
    },
    {
      title: "Products",
      description: "Thoughtful construction, consistent quality and products designed to perform well and last.",
    },
    {
      title: "Planet",
      description: "More conscious sourcing and efficient processes that help reduce waste and support better choices.",
    }
  ];
  
  const pillars = block?.pillars?.length ? block.pillars : defaultPillars;
  const quote = block?.quote ?? "“Exceptional products should also make a positive difference.”";

  return (
    <section ref={containerRef as any} className="w-full bg-[#f9f2ea] overflow-hidden py-[40px] lg:pt-[70px] lg:pb-[100px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
        
        {/* Top Split Area */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 relative z-10">
          
          {/* Left Intro */}
          <div className="flex flex-col w-full lg:w-[560px] shrink-0">
            <p className="gsap-animate text-[#b86e58] text-[10px] lg:text-[10.5px] font-medium tracking-[2px] lg:tracking-[2.9px] leading-[17px] uppercase mb-[14px]">
              {eyebrow}
            </p>
            <div className="gsap-animate w-[44px] h-px bg-[#b86e58]/52 md:mb-[28px] mb-4" />
            
            <h2 className="gsap-animate font-playfair text-[#1b2845] text-4xl lg:text-[55px] leading-[1.1] lg:leading-[60px] mb-[40px] lg:mb-[50px]">
              {headlineLine1 && <span className="block">{headlineLine1}</span>}
              {headlineLine2 && <span className="block">{headlineLine2}</span>}
            </h2>
            
            <p className="gsap-animate text-[#4a505e] text-[14px] lg:text-[15px] leading-[1.6] lg:leading-[26px] lg:max-w-[500px]">
              {paragraph}
            </p>
          </div>

          {/* Right Pillars (3 columns) */}
          <div className="flex flex-col md:flex-row lg:mt-[52px] gap-12 md:gap-0 w-full lg:w-[625px] justify-between relative">
            
            {/* Desktop Vertical Separators (Only show if we have 3 pillars for exact layout match) */}
            {pillars.length === 3 && (
              <>
                <div className="gsap-animate hidden lg:block absolute left-[190px] top-[-4px] w-px h-[330px] bg-[#d2bfaf]/45" />
                <div className="gsap-animate hidden lg:block absolute left-[410px] top-[-4px] w-px h-[330px] bg-[#d2bfaf]/45" />
              </>
            )}
            
            {pillars.map((pillar, index) => {
              const num = (index + 1).toString().padStart(2, '0');
              const isFirst = index === 0;
              return (
                <div 
                  key={index} 
                  className={`gsap-animate flex flex-col w-full md:w-[185px] ${!isFirst ? 'md:pl-6 lg:pl-0' : ''}`}
                >
                  <p className="text-[#b86e58] text-[10.5px] font-medium tracking-[1.8px] leading-[16px] mb-[20px] lg:mb-[27px]">
                    {num}
                  </p>
                  <h3 className="font-playfair text-[#1b2845] text-[26px] lg:text-[31px] leading-[1.2] lg:leading-[36px] mb-[16px] lg:mb-[22px]">
                    {pillar.title}
                  </h3>
                  <p className="text-[#4a505e] text-[13px] lg:text-[12.8px] leading-[1.6] lg:leading-[21px]">
                    {pillar.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Rule & Quote */}
        {/* Margin top ensures it clears the 330px height of the vertical separators dynamically */}
        <div className="flex flex-col mt-[80px] lg:mt-[105px] relative z-10">
          <div className="gsap-animate w-full h-px bg-[#d2bfaf]/48 mb-[40px] lg:mb-[46px]" />
          <p className="gsap-animate font-playfair font-extrabold italic text-[#b86e58] text-2xl lg:text-[30px] leading-[1.3] lg:leading-[38px] lg:max-w-[720px]">
            {quote}
          </p>
        </div>

      </div>
    </section>
  );
}

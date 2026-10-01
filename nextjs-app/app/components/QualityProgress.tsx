"use client";

﻿import Image from "next/image";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import type { QualityProgress as QualityProgressType } from "@/sanity.types";

export default function QualityProgress({ block }: { block?: QualityProgressType }) {
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

  const eyebrow = block?.eyebrow ?? "QUALITY & PROGRESS";
  const headlineLine1 = block?.headlineLine1 ?? "Quality is part of";
  const headlineLine2 = block?.headlineLine2 ?? "responsibility.";
  const paragraph = block?.paragraph ?? "Consistency prevents rework, protects materials and builds trust. That is why quality control sits throughout the process rather than waiting at the end.";
  
  const defaultStats = [
    { statValue: "100%", statTitle: "QUALITY CHECKS", statSubtitle: "At every stage", isMediumSize: false },
    { statValue: "30%", statTitle: "REDUCTION IN WASTE", statSubtitle: "Through efficient production", isMediumSize: false },
    { statValue: "100+", statTitle: "SKILLED PROFESSIONALS", statSubtitle: "Across design and production", isMediumSize: false },
    { statValue: "GLOBAL", statTitle: "COMPLIANCE STANDARDS", statSubtitle: "For peace of mind", isMediumSize: true },
  ];
  const stats = block?.stats?.length ? block.stats : defaultStats;

  const defaultPhotos = [
    { image: "/quality-1.png", caption: "CRAFTED BY EXPERTS" },
    { image: "/quality-2.png", caption: "PREMIUM MATERIALS" },
    { image: "/quality-3.png", caption: "CONSISTENT QUALITY" },
    { image: "/quality-4.png", caption: "READY FOR THE WORLD" },
  ];
  const photos = block?.photos?.length ? block.photos : defaultPhotos;

  return (
    <section ref={containerRef as any} className="w-full bg-[#FEFAF6] overflow-hidden py-[80px] lg:pt-[60px] lg:pb-[100px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row lg:justify-between items-start gap-16 lg:gap-10">
        
        {/* Left Intro Column */}
        <div className="flex flex-col w-full lg:w-[500px] shrink-0">
          <p className="gsap-animate text-[#b86e58] text-[10px] lg:text-[10.5px] font-medium tracking-[2px] lg:tracking-[2.9px] leading-[17px] uppercase mb-[14px]">
            {eyebrow}
          </p>
          <div className="gsap-animate w-[44px] h-px bg-[#b86e58]/52 mb-[28px]" />
          
          <h2 className="gsap-animate font-playfair text-[#1b2845] text-4xl lg:text-[55px] leading-[1.1] lg:leading-[58px] mb-[40px] lg:mb-[90px]">
            {headlineLine1 && <span className="block">{headlineLine1}</span>}
            {headlineLine2 && <span className="block">{headlineLine2}</span>}
          </h2>
          
          <p className="gsap-animate text-[#4a505e] text-[14px] lg:text-[14.5px] leading-[1.6] lg:leading-[24px]">
            {paragraph}
          </p>
        </div>

        {/* Right Content Column (Stats & Photos) */}
        <div className="flex flex-col w-full lg:w-[770px] shrink-0 lg:mt-[85px]">
          
          {/* Top Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 mb-[50px] lg:mb-[85px]">
            {stats.map((stat, index) => {
              const valueSizeClass = stat.isMediumSize 
                ? "text-[26px] lg:text-[31px] leading-none lg:leading-[45px]" 
                : "text-[32px] lg:text-[40px] leading-none lg:leading-[45px]";
                
              return (
                <div key={index} className="gsap-animate flex flex-col">
                  <p className={`font-playfair text-[#b86e58] ${valueSizeClass} mb-[15px]`}>
                    {stat.statValue}
                  </p>
                  <p className="text-[#1b2845] text-[8px] lg:text-[8.8px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[10px]">
                    {stat.statTitle}
                  </p>
                  <p className="text-[#4a505e] text-[11px] lg:text-[11.5px] leading-[1.4] lg:leading-[18px]">
                    {stat.statSubtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Divider Rule */}
          <div className="gsap-animate w-full h-px bg-[#d2bfaf]/50 mb-[35px]" />

          {/* Bottom Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
            {photos.map((photo, index) => (
              <div key={index} className="gsap-animate flex flex-col">
                <div className="w-full aspect-[17/18] lg:h-[180px] relative mb-[12px]">
                  <Image 
                    src={typeof photo.image === 'string' ? photo.image : '/quality-1.png'} 
                    alt={photo.caption || "Quality Image"} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <p className="text-[#4a505e] text-[8px] lg:text-[8.5px] font-medium tracking-[1.4px] leading-[14px] uppercase">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

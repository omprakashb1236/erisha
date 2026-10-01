"use client";

import Image from "next/image";
import { CoreCapabilities } from "@/sanity.types";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);



type CoreCapabilitiesProps = {
  block: CoreCapabilities
  index: number
}

const defaultCapabilities = [
  {
    id: "01",
    title: "Product\nDevelopment",
    desc: "Ideas translated into commercially considered products, with category, customer and manufacturing realities kept in view.",
    imgSrc: "/capabilities-1.png"
  },
];

export default function CoreCapabilitiesComp({ block }: CoreCapabilitiesProps) {
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

  const capabilities = block?.capabilities || defaultCapabilities;

  return (
    <section ref={containerRef as any} className="w-full bg-[#f9f2ea] py-[40px] lg:py-[80px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row lg:justify-between items-stretch gap-16 lg:gap-10">
        
        {/* Left Column (Sticky/Static Intro) */}
        <div className="flex flex-col w-full lg:w-[420px] shrink-0 justify-between">
          <div>
            <p className="gsap-animate text-[#b86e58] text-[10px] lg:text-[10.5px] font-medium tracking-[2.9px] leading-[17px] uppercase mb-[14px]">
              {block?.eyebrow || "WHAT WE DO"}
            </p>
            <div className="gsap-animate w-[44px] h-px bg-[#b86e58]/52 mb-[28px]" />
            
            <h2 className="gsap-animate font-playfair text-[#1b2845] text-4xl lg:text-[52px] leading-[1.1] lg:leading-[58px] mb-[30px] lg:mb-[40px] pr-8">
              {block?.heading || "Expertise where the product needs it."}
            </h2>
            
            <p className="gsap-animate text-[#4a505e] text-[14px] lg:text-[14.5px] leading-[1.6] lg:leading-[24px]">
              {block?.description || "Our capabilities are designed to stay connected. Development decisions inform materials, fit informs construction, and quality follows the product from sample to production."}
            </p>
          </div>

          {/* Bottom Quote (Pushed to bottom on desktop to align with grid) */}
          <div className="mt-16 lg:mt-auto">
            <p className="gsap-animate font-playfair font-extrabold italic text-[#b86e58] text-[24px] lg:text-[28px] leading-[1.3] lg:leading-[34px]">
              {block?.quote || "One team carries context forward — so a material decision is not separated from fit, and fit is not separated from production."}
            </p>
          </div>
        </div>

        {/* Right Column (Grid of Capabilities) */}
        <div className="flex flex-col w-full lg:w-[780px] shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[60px] lg:gap-y-[80px]">
            {capabilities.map((cap: any, index: number) => {
              const imgSrc = cap.image;
              return (
                <div key={cap.id || cap.number || index} className="gsap-animate flex flex-row gap-5 lg:gap-6 items-start h-full">
                  
                  {/* Image */}
                  <div className="relative w-[100px] lg:w-[120px] h-[140px] lg:h-[160px] shrink-0 rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-sm">
                    {imgSrc && <Image src={imgSrc} alt={cap.title?.replace('\n', ' ') || "Capability"} fill className="object-cover" /> }
                  </div>

                  {/* Text Block & Divider */}
                  {/* h-full ensures this column stretches to match the image height, letting mt-auto push the line down */}
                  <div className="flex flex-col pt-1 w-full h-full relative">
                    <p className="text-[#b86e58] text-[9.5px] font-medium tracking-[1.5px] mb-[8px]">
                      {cap.number || cap.id}
                    </p>
                    <h3 className="font-playfair text-[#1b2845] text-[20px] lg:text-[22px] leading-[1.2] lg:leading-[26px] mb-[12px] whitespace-pre-line">
                      {cap.title}
                    </h3>
                    <p className="text-[#4a505e] text-[10.5px] lg:text-[11px] leading-[1.6] lg:leading-[18px]">
                      {cap.description || cap.desc}
                    </p>
                    
                    {/* Faint Underline anchored to the absolute bottom of the text column wrapper */}
                    <div className="mt-auto w-full h-px bg-[#d2bfaf]/60" />
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}

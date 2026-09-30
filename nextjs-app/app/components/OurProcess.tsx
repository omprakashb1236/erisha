"use client";

﻿import React from 'react';
import Image from "next/image";
import Button from "./Button";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);



export default function OurProcess({ block }: { block?: any }) {
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
    } else {
      // Fallback
      gsap.from(containerRef.current!.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }
  }, { scope: containerRef });

  const eyebrow = block?.eyebrow || "OUR PROCESS";
  const headingLine1 = block?.headingLine1 || "From an idea";
  const headingLine2 = block?.headingLine2 || "to ";
  const headingLine3 = block?.headingLine3 || "what's next.";
  const description = block?.description || "A collaborative and transparent process, designed to bring your vision to life � with precision, care and expertise at every step.";
  const rightMicrocopy = block?.rightMicrocopy || ["YOUR VISION. OUR EXPERTISE.", "A BETTER TOMORROW."];

  const defaultSteps = [
    { num: "01", title: "DESIGN & DEVELOPMENT", desc: ["Translating your vision into", "technical specifications", "and precise patterns."], img: "/process-step1.png" },
    { num: "02", title: "SOURCING", desc: ["Selecting the perfect", "materials, laces, elastics", "and hardware."], img: "/process-step2.png" },
    { num: "03", title: "PROTOTYPING", desc: ["Physical sampling to", "refine fit, feel and", "construction details."], img: "/process-step3.png" },
    { num: "04", title: "FIT & APPROVAL", desc: ["Rigorous fit testing", "across sizes to ensure", "absolute comfort."], img: "/process-step4.png" },
    { num: "05", title: "PRODUCTION", desc: ["Skilled manufacturing", "with continuous quality", "control checks."], img: "/process-step5.png" },
    { num: "06", title: "DELIVERY", desc: ["Final inspection, careful", "packaging and global", "logistics support."], img: "/process-step6.png" }
  ];
  const steps = block?.processSteps?.length ? block.processSteps : defaultSteps;

  const footerLeftMicrocopy = block?.footerLeftMicrocopy || ["A LONGER", "JOURNEY TOGETHER"];
  const footerRightMicrocopy = block?.footerRightMicrocopy || ["FROM", "CONCEPT", "TO COLLECTION"];

  const defaultFooterValues = [
    { title: "RESPONSIBLE\nMANUFACTURING", icon: "/footer-icon0.svg" },
    { title: "PEOPLE\nAT THE CORE", icon: "/footer-icon1.svg" },
    { title: "CONSISTENT\nQUALITY", icon: "/footer-icon2.svg" },
    { title: "BUILT FOR\nLASTING PARTNERSHIPS", icon: "/footer-icon3.svg" }
  ];
  const footerValues = block?.footerValues?.length ? block.footerValues : defaultFooterValues;

  const ctaText = block?.ctaButton?.buttonText || "{ctaText}";
  const linkObj = block?.ctaButton?.link as any;
  const ctaLink = linkObj?.linkType === 'page' && (linkObj?.page?.slug || (typeof linkObj?.page === 'string' ? linkObj?.page : null))
    ? ((typeof linkObj?.page === 'string' ? linkObj?.page : linkObj?.page?.slug) === 'home' ? '/' : `/${typeof linkObj?.page === 'string' ? linkObj?.page : linkObj?.page?.slug}`)
    : linkObj?.linkType === 'path' && linkObj?.path
      ? linkObj.path
      : linkObj?.linkType === 'href' && linkObj?.href
        ? linkObj.href
        : '/start-project';

  return (
    <section ref={containerRef as any} className="relative w-full bg-[#f9f5ef] overflow-hidden">

      <div className="w-full container mx-auto flex flex-col pt-12 lg:pt-0 relative">

        {/* Intro */}
        <div className="flex flex-col  lg:pt-[47px] relative z-20">

          <p className="gsap-animate text-[#965745] text-[11px] font-medium tracking-[3.2px] mb-4">{eyebrow}</p>
          <div className="w-[48px] h-px bg-[#965745]/55 mb-8 lg:mb-6" />

          <h2 className="gsap-animate text-[#1b2845] max-w-[500px] font-playfair leading-none mb-6 text-5xl lg:text-[72px]">

            <span className="block">
              <span className="text-5xl lg:text-[72px]">{headingLine1}</span>{" "}
              <span className="text-[#965745] font-extrabold italic text-5xl lg:text-[60px]">{headingLine2}</span>
            </span>
          </h2>

          <div className="text-[#4a505e] text-[16px] leading-[24px] tracking-[0.05px] max-w-[500px] mb-10">
            <p>{description}</p>
          </div>

          <div className="hidden lg:flex flex-col absolute right-[100px] top-[64px] items-end">
            <div className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.3px] leading-[18px] text-right">
              {rightMicrocopy.map((line: string, i: number) => <p key={i}>{line}</p>)}
            </div>
          </div>

          {/* Desktop Decoratives in Intro */}
          <div className="hidden lg:block absolute left-[575px] top-[68px] w-[845px] h-[150px] -z-10">
            <Image src="/process-loop.svg" alt="" fill className="gsap-animate object-cover" />
          </div>

          <div className="hidden lg:block absolute left-[1218px] top-[145px] w-[160px] h-[160px]">
            <Image src="/process-badge.svg" alt="" fill />
          </div>
        </div>

        {/* Process Timeline */}
        <div className="lg:mt-8 relative z-20 overflow-x-auto custom-scrollbar pb-6 lg:pb-8">
          <div className="hidden absolute top-[55px] lg:block w-[100%] h-px bg-[#b88e78]/45 mb-12" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[25px] w-full min-w-max">
            {steps.map((step: any, idx: number) => (
              <div key={idx} className="gsap-animate flex flex-col lg:w-[210px] relative">

                <div className="flex items-center gap-4 lg:block">
                  <p className="gsap-animate text-[#965745] text-[24px] font-playfair tracking-[-0.2px] leading-[32px] lg:mb-4">
                    {step.num}
                  </p>

                  <div className="w-[14px] h-[14px] relative hidden lg:block lg:mb-6">
                    <Image src="/process-node.svg" alt="" fill />
                  </div>

                  <p className="gsap-animate text-[#1b2845] text-[11.5px] font-medium tracking-[2.2px] uppercase lg:mb-4">
                    {step.title}
                  </p>
                </div>

                <div className="text-[#4a505e] text-[13.2px] leading-[20px] mt-2 lg:mt-0 mb-6 h-auto lg:h-[60px]">
                  {step.desc.map((line: string, i: number) => <p key={i}>{line}</p>)}
                </div>

                <div className="w-full lg:w-[198px] h-[210px] rounded-[11px] overflow-hidden relative">
                  <Image src={step.img} alt={step.title} fill className="gsap-animate object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
      {/* Values Footer */}
      <div className="bg-[#f4ede6] w-full mt-12 lg:mt-auto py-10 lg:py-0 lg:h-[176px] relative flex flex-col lg:flex-row lg:items-center">
        <div className='container relative'>
          <div className="flex flex-col mb-8 lg:mb-0 lg:absolute lg:top-[48px]">
            <div className="text-[#1b2845] text-[10.5px] font-medium tracking-[2.9px] leading-[20px]">
              {footerLeftMicrocopy.map((line: string, i: number) => <p key={i}>{line}</p>)}
            </div>
            <div className="w-[50px] h-px bg-[#1b2845]/50 mt-4" />
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap lg:flex-nowrap gap-8 sm:gap-12 lg:gap-0 lg:mx-auto items-start lg:items-center justify-center pt-4 lg:pt-0">

            {footerValues.map((val: any, i: number) => (
              <React.Fragment key={i}>
                <div className="flex items-center lg:flex-col gap-4 lg:w-[130px]">
                  <div className="w-[42px] h-[42px] relative shrink-0"><Image src={val.icon || "/footer-icon0.svg"} alt="" fill /></div>
                  <p className="gsap-animate text-[#1b2845] text-[9.3px] font-medium tracking-[2.3px] leading-[17px] lg:text-center whitespace-pre-wrap">{val.title}</p>
                </div>
                {i < footerValues.length - 1 && (
                  <div className="hidden lg:block w-px h-[82px] bg-[#b88e78]/40 mx-[15px]" />
                )}
              </React.Fragment>
            ))}

            <Button
              href={ctaLink}
              variant="primary"
              className="w-full sm:w-auto lg:w-[220px] h-[50px] rounded-[25px] mt-6 sm:mt-0 lg:ml-[25px] !text-[12px] tracking-[0.6px]"
              icon={<span className="gsap-animate text-[20px] font-normal leading-[22px] -mt-1 ml-2">→</span>}
            >
              {ctaText}
            </Button>
          </div>

          <div className="hidden lg:flex flex-col absolute right-[60px] top-[45px] items-end text-[#1b2845] text-[9px] font-medium tracking-[2.4px] leading-[18px]">
            {footerRightMicrocopy.map((line: string, i: number) => <p key={i}>{line}</p>)}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(184, 142, 120, 0.4); border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(184, 142, 120, 0.6); }
      `}} />
    </section>
  );
}






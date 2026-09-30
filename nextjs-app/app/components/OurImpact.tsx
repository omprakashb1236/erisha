"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function OurImpact({ block }: { block?: any }) {
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

  const eyebrow = block?.eyebrow || "Our Impact";
  const headingLine1 = block?.headingLine1 || "Trusted by global brands.";
  const headingLine2 = block?.headingLine2 || "Designed for what's next.";
  const description = block?.description || "For over two decades, Erisha has been a trusted manufacturing partner for leading lingerie and intimatewear brands around the world — helping them bring beautiful, functional and sustainable collections to life.";

  const defaultMetrics = [
    { value: "20+", label: "Years of\nExperience" },
    { value: "50+", label: "Global\nBrands" },
    { value: "10M", label: "Garments\nAnnually" },
    { value: "25+", label: "Countries\nServed" }
  ];
  const metrics = block?.metrics?.length ? block.metrics : defaultMetrics;

  const mapImage = block?.mapImage || "/impact-map.png";
  const globalPartnerTitle = block?.globalPartnerTitle || "A Global Partner";
  const globalPartnerDescription = block?.globalPartnerDescription || "From design to delivery, we support brands across North America, Europe, Middle East and Asia with consistent quality and reliable timelines.";

  const ctaText = block?.ctaButton?.buttonText || "";
  const linkObj = block?.ctaButton?.link as any;
  const ctaLink = linkObj?.linkType === 'page' && (linkObj?.page?.slug || (typeof linkObj?.page === 'string' ? linkObj?.page : null))
    ? ((typeof linkObj?.page === 'string' ? linkObj?.page : linkObj?.page?.slug) === 'home' ? '/' : `/${typeof linkObj?.page === 'string' ? linkObj?.page : linkObj?.page?.slug}`)
    : linkObj?.linkType === 'path' && linkObj?.path
      ? linkObj.path
      : linkObj?.linkType === 'href' && linkObj?.href
        ? linkObj.href
        : '/partner';

  const rightImage = block?.rightImage || "/impact-photo1.png";
  const brandsStripTitle = block?.brandsStripTitle || "IN GOOD COMPANY";
  const brandLogos = block?.brandLogos?.length ? block.brandLogos : [""];

  return (
    <section ref={containerRef as any} className="w-full bg-[#f8f4ee] relative overflow-hidden flex flex-col items-center">

      {/* Main Content Area: Split 50/50 Desktop */}
      <div className="w-full container flex flex-col lg:flex-row">

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[52%] flex flex-col pt-12 lg:pt-[100px] lg:pr-[60px] pb-12 lg:pb-[30px]">

          <div className="flex flex-col">
            <p className="gsap-animate text-[#b86e58] text-[10px] lg:text-[11px] font-bold tracking-[2px] lg:tracking-[3.4px] mb-[18px] uppercase">
              {eyebrow}
            </p>
            <div className="w-[48px] h-px bg-[#965745]/55 mb-[26px]" />

            <h2 className="gsap-animate font-playfair leading-none mb-6 lg:mb-[40px]">
              <span className="block text-[#1b2845] text-4xl lg:text-[56px] leading-[1]">{headingLine1}</span>
              <span className="block text-[#965745] text-4xl lg:text-[52px] leading-[1] font-extrabold italic">{headingLine2}</span>
            </h2>

            <div className="text-[#4a505e] text-[14px] lg:text-[15px] leading-[1.6] mb-12">
              <p>{description}</p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="flex flex-wrap lg:flex-nowrap items-center w-full mb-12 lg:mb-16">
            {metrics.map((metric: any, i: number) => (
              <div key={i} className="gsap-animate w-1/2 lg:flex-1 flex flex-col">
                <p className="gsap-animate text-[#965745] text-4xl lg:text-[42px] xl:text-[46px] font-didot tracking-[-0.3px]">{metric.value}</p>
                <p className="gsap-animate text-[#0e1b30] text-[9px] lg:text-[9.5px] font-medium tracking-[2px] mt-3 uppercase leading-[1.4] whitespace-pre-wrap">{metric.label}</p>
              </div>
            ))}
          </div>
          {/* Map & CTA Row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 lg:gap-12 w-full max-w-[650px] mt-auto">

            {/* Map */}
            <div className="relative w-full sm:w-[55%] aspect-[3/2] lg:h-[220px]">
              <Image src={mapImage} alt="Global Map" fill className="gsap-animate object-contain object-left" />
            </div>

            {/* Right CTA Area */}
            <div className="flex flex-col w-full sm:w-[45%] pt-4">
              <p className="gsap-animate text-[#0e1b30] text-[10px] font-medium tracking-[2px] lg:tracking-[3.2px] uppercase">{globalPartnerTitle}</p>
              <div className="w-[43px] h-px bg-[#0e1b30]/35 mt-3" />
              <p className="gsap-animate text-[#4a505e] text-[13px] leading-[1.6] mt-4 mb-6 pr-4">
                {globalPartnerDescription}
              </p>
              <Button
                href={ctaLink}
                variant="outline-square"
                className="gsap-animate mt-0 max-w-max"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0e1b30" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              >
                {ctaText || "Partner With Us"}
              </Button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Single Image) */}
        <div className="w-full lg:w-[48%] relative h-[400px] lg:h-auto min-h-[500px] xl:absolute xl:h-[60%] right-0 top-0 3xl:h-auto 3xl:relative">
          <Image src={rightImage} alt="Impact Reference" fill className="gsap-animate object-cover" />
        </div>

      </div>

      {/* Brands Strip */}
      <div className="w-full pt-[30px] pb-[30px] relative z-10 border-t border-[#d2bfaf]/40">
        <div className="w-full container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="flex flex-col items-center lg:items-start shrink-0">
            <p className="gsap-animate text-[#0e1b30] text-[9.5px] font-medium tracking-[3.4px] leading-[14px]">
              {brandsStripTitle}
            </p>
            <div className="w-[43px] h-px bg-[#0e1b30]/40 mt-4" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-[20px] 2xl:gap-[48px] flex-1 lg:px-6">
            {brandLogos.map((brand: any, index: number) => (
              <div
                key={brand?._key || index}
                className="relative w-[100px] lg:w-[120px] h-[40px] lg:h-[50px]"
              >
                <Image
                  src={brand}
                  alt={brand?.alt || brand?.name || `Brand logo ${index + 1}`}
                  fill
                  className="gsap-animate object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex-col items-center lg:items-end hidden lg:flex shrink-0">
            <p className="gsap-animate text-[#46484f] text-[8.2px] font-medium tracking-[2.8px] leading-[13px]">
              AND MANY MORE
            </p>
            <div className="w-[44px] h-px bg-[#b28570]/40 mt-4" />
          </div>

        </div>
      </div>

      {/* Footer Statement Strip */}
      <div className="w-full bg-[#b17c71] py-8 lg:h-[108px] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[100px] px-6 text-center">
          <p className="gsap-animate text-[#faf6f2] text-[9.2px] font-medium tracking-[4.1px] leading-[14px]">
            {block?.footerStatementStripLft}
          </p>
          <div className="w-px h-[24px] lg:h-[46px] bg-[#faf6f2]/45 hidden lg:block" />
          <div className="h-px w-[40px] bg-[#faf6f2]/45 lg:hidden" />
          <p className="gsap-animate text-[#faf6f2] text-[9.2px] font-medium tracking-[4.1px] leading-[14px]">
            {block?.footerStatementStripRgt}
          </p>
        </div>
      </div>

    </section>
  );
}



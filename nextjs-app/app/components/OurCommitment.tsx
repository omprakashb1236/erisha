"use client";

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import type { OurCommitment } from '@/sanity.types';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type OurCommitmentProps = {
  block?: OurCommitment;
  index?: number;
};

export default function OurCommitment({ block }: OurCommitmentProps) {
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

  const eyebrow = block?.eyebrow || 'OUR COMMITMENT';
  const headingLine1 = block?.headingLine1 || 'Quality in';
  const headingLine2 = block?.headingLine2 || 'every detail.';
  const description = block?.description || 'We combine craftsmanship, responsible practices and rigorous quality control to deliver lingerie that looks beautiful, feels exceptional and lasts.';

  const defaultFeatures = [
    { icon: '/footer-icon0.svg', title: 'SUPERIOR\nCRAFTSMANSHIP', subtitle: 'Skilled people.\nThoughtful construction.' },
    { icon: '/footer-icon1.svg', title: 'RESPONSIBLE\nMANUFACTURING', subtitle: 'People, products\nand planet in balance.' },
    { icon: '/footer-icon2.svg', title: 'RIGOROUS\nQUALITY CONTROL', subtitle: 'Consistent quality\nat every stage.' },
    { icon: '/footer-icon3.svg', title: 'A MORE\nSUSTAINABLE FUTURE', subtitle: 'Conscious choices\nfor lasting impact.' }
  ];
  const features = block?.features?.length ? block.features : defaultFeatures;

  const rightMicrocopy = block?.rightMicrocopy || ['BETTER PRODUCTS.', 'A BRIGHTER TOMORROW.'];

  const defaultGallery = [
    { image: '/commitment-photo1.png', caption: 'CRAFTED BY EXPERTS' },
    { image: '/commitment-photo2.png', caption: 'PREMIUM MATERIALS' },
    { image: '/commitment-photo3.png', caption: 'CONSISTENT QUALITY' },
    { image: '/commitment-photo4.png', caption: 'READY FOR THE WORLD' }
  ];
  const gallery = block?.gallery?.length ? block.gallery : defaultGallery;

  const rightCTAHeadingLine1 = block?.rightCTAHeadingLine1 || 'Responsible';
  const rightCTAHeadingLine2 = block?.rightCTAHeadingLine2 || 'today. Beautiful';
  // @ts-ignore
  const rightCTAHeadingLine3 = block?.rightCTAHeadingLine3 || 'tomorrow.';
  const rightCTADescription = block?.rightCTADescription || 'We work towards more responsible sourcing, efficient processes and long-term partnerships — because exceptional products should also make a positive difference.';

  const ctaText = block?.ctaButton?.buttonText || 'Our Approach';
  const linkObj = block?.ctaButton?.link as any;
  const ctaLink = linkObj?.linkType === 'page' && (linkObj?.page?.slug || (typeof linkObj?.page === 'string' ? linkObj?.page : null))
    ? ((typeof linkObj?.page === 'string' ? linkObj?.page : linkObj?.page?.slug) === 'home' ? '/' : `/${typeof linkObj?.page === 'string' ? linkObj?.page : linkObj?.page?.slug}`)
    : linkObj?.linkType === 'path' && linkObj?.path
      ? linkObj.path
      : linkObj?.linkType === 'href' && linkObj?.href
        ? linkObj.href
        : '#';

  // @ts-ignore
  const rightGraphicText = block?.rightGraphicText || ['DETAILS', 'MAKE A', 'DIFFERENCE'];

  const defaultMetrics = [
    { value: '100%', title: 'QUALITY CHECKS', description: 'At every stage' },
    { value: '30%', title: 'REDUCTION IN WASTE', description: 'Through efficient production' },
    { value: '100+', title: 'SKILLED PROFESSIONALS', description: 'Across design and production' },
    { value: 'GLOBAL', title: 'COMPLIANCE STANDARDS', description: 'For peace of mind' }
  ];
  // @ts-ignore
  const metrics = block?.metrics?.length ? block.metrics : defaultMetrics;

  // @ts-ignore
  const metricsBadgeText = block?.metricsBadgeText || ['A MORE', 'CONSCIOUS', 'TOMORROW'];

  // @ts-ignore
  const footerBannerLeftText = block?.footerBannerLeftText || 'BEAUTIFUL PRODUCTS. BRIGHTER POSSIBILITIES.';
  // @ts-ignore
  const footerBannerRightText = block?.footerBannerRightText || 'PEOPLE / PLANET / PROGRESS';

  return (
    <section ref={containerRef as any} className="relative w-full overflow-hidden bg-[#f9f5ef]">
      {/* Main Content Area */}
      <div className="w-full container flex flex-col pt-12 lg:pt-[40px]">

        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          {/* Left Intro */}
          <div className="flex flex-col lg:mt-8 flex-1 max-w-[500px]">
            <p className="gsap-animate text-[#965745] text-[11px] font-medium tracking-[3.4px] leading-[16px] mb-4">{eyebrow}</p>
            <div className="w-[48px] h-px bg-[#965745]/55 mb-8" />

            <h2 className="gsap-animate text-[#1b2845] font-playfair leading-none mb-6 text-5xl lg:text-[70px]">
              <span className="block mb-2 lg:mb-0">{headingLine1}</span>
              <span className="block text-[#965745] text-5xl lg:text-[62px] font-extrabold italic">{headingLine2}</span>
            </h2>

            <p className="gsap-animate text-[#4a505e] text-[15px] leading-[24px] lg:mt-16">
              {description}
            </p>
          </div>

          {/* Right Features */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 lg:gap-0 lg:mt-[100px] flex-1 justify-end xl:mr-[190px] max-w-[650px]">
            {features.map((feat: any, i: number) => (
              <React.Fragment key={i}>
                <div className="flex gap-4 items-start sm:w-[45%] lg:w-auto lg:flex-col lg:items-center lg:flex-1">
                  <div className="w-[42px] h-[42px] relative shrink-0"><Image src={feat.icon || '/footer-icon0.svg'} alt="" fill /></div>
                  <div className="lg:text-center lg:mt-4">
                    <p className="gsap-animate text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] leading-[16px] whitespace-pre-wrap">{feat.title}</p>
                    <p className="gsap-animate text-[#4a505e] text-[12.5px] leading-[19px] mt-2 lg:mt-4 whitespace-pre-wrap">{feat.subtitle}</p>
                  </div>
                </div>
                {i < features.length - 1 && (
                  <div className="hidden lg:block w-px h-[142px] bg-[#b89e8f]/35 mx-6" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Desktop floating text detail right top */}
        <div className="hidden lg:flex flex-col absolute right-[70px] top-[61px] w-[150px] items-end">
          <div className="text-[#4a505e] text-[9.2px] font-medium tracking-[2.3px] leading-[17px] text-right">
            {rightMicrocopy.map((line: string, i: number) => <p key={i}>{line}</p>)}
          </div>
          <div className="w-[42px] h-px bg-[#965745]/45 mt-4" />
        </div>

        {/* Gallery & Lower Section */}
        <div className="py-12 lg:pt-[40px] flex flex-col lg:flex-row justify-start lg:items-end gap-12 lg:gap-8 relative z-10">

          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-6 flex-1 max-w-[885px]">
            {gallery.map((item: any, i: number) => (
              <div key={i} className="gsap-animate flex flex-col gap-3 lg:gap-6 w-full lg:w-[204px]">
                <div className="relative w-full aspect-[2/3] lg:h-[293px] rounded-sm overflow-hidden">
                  <Image src={item.image} alt="" fill className="gsap-animate object-cover" />
                </div>
                <p className="gsap-animate text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] lg:pl-1">{item.caption}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col max-w-full lg:w-[260px]">
            <div className="w-[42px] h-px bg-[#b89e8f]/55 mb-6" />
            <div className="font-playfair leading-none text-[39px] text-[#1b2845] mb-2">
              <p>{rightCTAHeadingLine1}</p>
              <p className="gsap-animate font-extrabold italic text-[33px]">{rightCTAHeadingLine2}</p>
            </div>
            <div className="text-[#4a505e] text-[13.5px] leading-[20px] mb-4">
              <p>{rightCTADescription}</p>
            </div>

            <Button
              href={ctaLink}
              variant="outline-square"
              className="gsap-animate mt-0 max-w-max"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0e1b30" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              {ctaText || ""}
            </Button>
          </div>

        </div>

      </div>

      {/* Decorative Right Graphic Desktop */}
      <div className="hidden xl:block absolute right-[20px] xl:right-0 top-[160px] w-[206px] h-[562px]">
        <Image src="/commitment-detail.png" alt="" fill className="gsap-animate object-cover object-left" />
        <div className="absolute right-[50px] top-[447px] text-[#faf6f2] text-[9.1px] font-medium tracking-[2.6px] leading-[18px]">
          {rightGraphicText.map((line: string, i: number) => <p key={i}>{line}</p>)}
        </div>
        <div className="absolute right-[50px] top-[523px] w-[42px] h-px bg-[#faf6f2]/60" />
      </div>

      {/* Metrics Banner */}
      <div className="bg-[#f7f1eb] w-full">
        <div className="w-full container py-12 lg:py-[35px] flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between items-center text-center">

          {metrics.map((metric: any, i: number) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center border-t lg:border-none border-[#b89e8f]/35 pt-8 lg:pt-0">
                <p className="gsap-animate text-[#1b2845] text-[42px] lg:text-[38px] font-playfair leading-[40px]">{metric.value}</p>
                <p className="gsap-animate text-[#1b2845] text-[9.5px] font-medium tracking-[2.4px] mt-2 lg:mt-4">{metric.title}</p>
                <p className="gsap-animate text-[#4a505e] text-[12px] mt-1 lg:mt-2">{metric.description}</p>
              </div>
              {i < metrics.length - 1 && (
                <div className="hidden lg:block w-px h-[82px] bg-[#b89e8f]/35" />
              )}
            </React.Fragment>
          ))}

          <div className="hidden lg:flex items-center gap-4 border-l border-[#b89e8f]/35 pl-[80px] ml-[40px]">
            <div className="w-[62px] h-[62px] relative"><Image src="/commitment-leaf.svg" alt="" fill /></div>
            <div className="text-left font-medium text-[#4a505e] text-[8.5px] tracking-[2.5px] leading-[15px]">
              {metricsBadgeText.map((line: string, i: number) => <p key={i}>{line}</p>)}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-[#b17c71] w-full">
        <div className="w-full xl:max-w-[800px] m-auto py-8 lg:py-10 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center text-center">
          <p className="gsap-animate text-[#faf6f2] text-[9.2px] font-medium tracking-[4px]">{footerBannerLeftText}</p>
          <div className="w-[44px] lg:w-px h-px lg:h-[44px] bg-[#faf6f2]/40" />
          <p className="gsap-animate text-[#faf6f2] text-[9.2px] font-medium tracking-[4px]">{footerBannerRightText}</p>
        </div>
      </div>

    </section>
  );
}

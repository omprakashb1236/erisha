import Image from "next/image";
import Button from "./Button";
import React from 'react';
import type { BetterProducts } from '@/sanity.types';

type BetterProductsProps = {
  block?: BetterProducts;
  index?: number;
};

export default function BetterProducts({ block }: BetterProductsProps) {
  const eyebrow = block?.eyebrow || "OUR COMMITMENT";
  const headingLine1 = block?.headingLine1 || "Better products.";
  const headingLine2 = block?.headingLine2 || "A brighter tomorrow.";
  const description = block?.description || "We are committed to responsible manufacturing, conscious choices and lasting partnerships — because exceptional lingerie should make a positive difference.";

  const defaultFeatures = [
    { icon: "/better-icon1.svg", title: "PEOPLE", subtitle: "A safe, respectful\nand empowering\nwork environment." },
    { icon: "/better-icon2.svg", title: "PRODUCTS", subtitle: "Consistent quality\nthrough responsible\npractices." },
    { icon: "/better-icon3.svg", title: "PLANET", subtitle: "More conscious choices\nfor a more sustainable\nfuture." }
  ];
  const features = block?.features?.length ? block.features : defaultFeatures;

  const rightMicrocopy = block?.rightMicrocopy || ["SMALL", "CHOICES.", "A BIGGER", "TOMORROW."];
  const rightImage = (block?.rightImage as any) || "/better-products-hero.png";

  const footerBannerTitle = block?.footerBannerTitle || "E R I S H A";
  const footerBannerSubtitle = block?.footerBannerSubtitle || "I N T E R N A T I O N A L";
  const footerBannerCenterMicrocopy = block?.footerBannerCenterMicrocopy || ["BEAUTIFUL PRODUCTS.", "BRIGHTER POSSIBILITIES."];
  const footerBannerRightMicrocopy = block?.footerBannerRightMicrocopy || ["A MORE", "CONFIDENT", "TOMORROW"];

  const ctaText = block?.ctaButton?.buttonText || "OUR COMMITMENT";
  const linkObj = block?.ctaButton?.link as any;
  const ctaLink = linkObj?.linkType === 'page' && linkObj?.page?.slug
    ? `/${linkObj.page.slug}`
    : linkObj?.linkType === 'path' && linkObj?.path
      ? linkObj.path
      : linkObj?.linkType === 'href' && linkObj?.href
        ? linkObj.href
        : '/commitment';

  return (
    <section className="relative w-full bg-[#f9f6f1] overflow-hidden">
      {/* Right side image */}
        <div className="relative w-full h-[500px] lg:h-auto lg:absolute lg:right-0 lg:top-0 lg:w-[46%] lg:bottom-0">
          <Image src={rightImage} alt="" fill className="object-cover" />
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[180px] bg-gradient-to-r from-[#f9f6f1] to-transparent" />
        </div>
      <div className="w-full container mx-auto flex flex-col lg:flex-row relative">

        {/* Mobile/Flex Content Area */}
        <div className="flex flex-col px-6 lg:px-[84px] py-12 lg:py-[100px] z-20 w-full lg:w-1/2 flex-1">
          <div className="flex flex-col max-w-[580px]">
            <p className="text-[#9c5b49] text-[11px] font-medium tracking-[3.3px] leading-[16px] mb-4">{eyebrow}</p>
            <div className="w-[48px] h-px bg-[#9c5b49]/45 mb-[22px]" />

            <h2 className="text-[#1b2845] font-playfair leading-none mb-[38px] text-5xl lg:text-[70px]">
              <span className="block mb-2">{headingLine1}</span>
              <span className="block text-[#9c5b49] lg:text-[60px] font-extrabold italic">{headingLine2}</span>
            </h2>

            <p className="text-[#505663] text-[15px] leading-[28px] lg:mt-0">
              We are committed to responsible manufacturing, conscious choices and lasting partnerships — because exceptional lingerie should make a positive difference.
            </p>
          </div>

          <div className="flex flex-col max-w-[780px] sm:flex-row lg:flex-row lg:items-start gap-10 mt-12 lg:mt-[44px]">
            {features.map((feat: any, i: number) => (
              <React.Fragment key={i}>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="relative w-[82px] h-[82px] flex items-center justify-center">
                    <Image src="/better-disc.svg" alt="" fill />
                    <Image src={feat.icon || "/better-icon1.svg"} alt="" width={42} height={42} className="relative z-10" />
                  </div>
                  <div>
                    <p className="text-[#1b2845] text-[12px] font-medium tracking-[3.2px]">{feat.title}</p>
                    <p className="text-[#505663] text-[15px] leading-[25px] mt-2 whitespace-pre-wrap">{feat.subtitle}</p>
                  </div>
                </div>
                {i < features.length - 1 && (
                  <div className="hidden lg:block w-px h-[205px] lg:mt-[6px] bg-[#baa192]/35" />
                )}
              </React.Fragment>
            ))}
          </div>



          <Button
            href={ctaLink}
            variant="light"
            className="w-full sm:w-[280px] h-[52px] !border-[#9c5b49]/65 !text-[#1b2845] !justify-between !px-7 mt-[120px] !text-[11.5px] tracking-[2.8px]"
            icon={<span className="text-[18px]">→</span>}
          >
            {ctaText}
          </Button>
        </div>

        {/* Right side floating text - Desktop only */}
        <div className="hidden lg:flex flex-col absolute right-[120px] top-[83px] z-20 w-[130px]">
          <div className="text-[#1b2845] text-[9.5px] font-medium tracking-[3px] leading-[20px]">
            {rightMicrocopy.map((line: string, i: number) => <p key={i}>{line}</p>)}
          </div>
          <div className="w-[48px] h-px bg-[#1b2845]/40 mt-4" />
        </div>

        

      </div>

      {/* Footer Banner */}
      <div className="bg-[#f7f3ee] w-full relative">
        <div className="w-full container mx-auto px-6 lg:px-[84px] py-12 lg:h-[163px] flex flex-col lg:flex-row gap-8 lg:gap-[60px] text-center lg:text-left items-center lg:justify-between">

          <div className="flex flex-col">
            <p className="text-[#1b2845] text-[34px] font-playfair lg:leading-none">{footerBannerTitle}</p>
            <p className="text-[#1b2845] text-[10px] font-medium tracking-[2.2px] lg:mt-2">{footerBannerSubtitle}</p>
          </div>

          <div className="w-[70px] lg:w-px h-px lg:h-[70px] bg-[#baa192]/45 my-2 lg:my-0" />

          <div className="text-[#505663] text-[12px] font-medium tracking-[4px] leading-[28px] lg:flex-1">
            {footerBannerCenterMicrocopy.map((line: string, i: number) => <p key={i}>{line}</p>)}
          </div>

          <div className="w-[48px] lg:w-[48px] h-px lg:h-px bg-[#1b2845]/35 my-2 lg:my-0 lg:ml-auto" />

          <div className="text-[#505663] text-[9.5px] font-medium tracking-[2.9px] leading-[20px] lg:w-[140px]">
            {footerBannerRightMicrocopy.map((line: string, i: number) => <p key={i}>{line}</p>)}
          </div>

        </div>
      </div>
    </section>
  );
}







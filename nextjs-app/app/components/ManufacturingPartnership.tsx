"use client";

import Image from "next/image";
import Button from "./Button";
import type { ManufacturingPartnership } from "@/sanity.types";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ManufacturingPartnership({
  block,
}: {
  block?: ManufacturingPartnership;
}) {
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

  const eyebrow = block?.eyebrow || "";
  const headingLine1 = block?.headingLine1 || "More than";
  const headingLine2 = block?.headingLine2 || "production.";
  const description = block?.description || "";
  const ctaText = block?.buttonText?.buttonText || "";

  const linkObj = block?.buttonText?.link as any;

  const ctaLink =
    linkObj?.linkType === "page" && linkObj?.page?.slug
      ? `/${linkObj.page.slug}`
      : linkObj?.linkType === "path" && linkObj?.path
        ? linkObj.path
        : linkObj?.linkType === "href" && linkObj?.href
          ? linkObj.href
          : "/capabilities";

  const defaultSteps = [
    {
      title: "Product Development",
      description: "Ideas translated into commercially\nconsidered products.",
    },
    {
      title: "Fabric & Trim Sourcing",
      description: "Materials selected around feel,\nperformance and purpose.",
    },
    {
      title: "Sampling & Prototyping",
      description: "Concepts refined through\nphysical development.",
    },
    {
      title: "Pattern, Fit & Construction",
      description: "Proportion, support and comfort\nconsidered together.",
    },
    {
      title: "Quality Control",
      description: "Consistency checked throughout\ndevelopment and production.",
    },
    {
      title: "Private Label Manufacturing",
      description: "Flexible manufacturing built around\nyour collection and brand.",
    },
  ];

  const processSteps = block?.processSteps?.length
    ? block.processSteps
    : defaultSteps;

  const bottomTags = block?.bottomTags?.length
    ? block.bottomTags
    : [
        "LOW MOQ",
        "FLEXIBLE DEVELOPMENT",
        "MULTI-CATEGORY EXPERTISE",
        "GLOBAL SUPPLY",
      ];

  const circleMicrocopy = block?.circleMicrocopy?.length
    ? block.circleMicrocopy
    : ["IDEAS", "INTO", "EVERYDAY", "COMFORT"];

  const blueprintMicrocopy = block?.blueprintMicrocopy?.length
    ? block.blueprintMicrocopy
    : ["FIT", "FUNCTION", "BEAUTY", "TOGETHER"];

  const blueprintImage =
    (block?.blueprintImage as any) || "/garment-blueprint.png";

  return (
    <section ref={containerRef as any} className="manufacturingPartnership w-full overflow-hidden bg-[#0d2844]">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 py-16 md:gap-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:py-[84px] xl:grid-cols-[minmax(0,590px)_1px_minmax(0,1fr)] xl:gap-0 2xl:grid-cols-[minmax(0,590px)_1px_minmax(0,520px)_minmax(200px,230px)]">
          {/* Left Content */}
          <div className="flex min-w-0 flex-col xl:pr-10 2xl:pr-[40px]">
            <p className="gsap-animate text-[10px] font-medium uppercase tracking-[2.5px] text-[#e5a191] sm:text-[11px] sm:tracking-[2.7px] xl:text-[12px] xl:tracking-[3px]">
              {eyebrow}
            </p>

            <div className="mb-7 mt-5 h-[2px] w-[38px] bg-[#e5a191] sm:mb-8 sm:mt-6 sm:w-[42px]" />

            <h2 className="gsap-animate font-playfair leading-[0.94] text-[#f7f1e9] text-[46px] sm:text-[54px] md:text-[60px] lg:text-[58px] xl:text-[68px] 2xl:text-[72px]">
              <span className="block">{headingLine1}</span>
              <span className="block text-[43px] font-extrabold italic sm:text-[51px] md:text-[57px] lg:text-[55px] xl:text-[62px] 2xl:text-[66px]">
                {headingLine2}
              </span>
            </h2>

            <p className="gsap-animate mt-10 max-w-[520px] text-[14px] leading-[24px] text-[#f7f1e9] sm:mt-12 sm:text-[15px] sm:leading-[26px] md:text-[16px] md:leading-[28px] xl:mt-auto xl:pt-[130px]">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5 sm:mt-10 xl:mt-10">
              <Button
                href={ctaLink}
                variant="light"
                className="!h-[52px] !w-[280px] !rounded-[27px] !bg-[#f7f1e9] !px-7 !text-[#0d2844] sm:!h-[54px] sm:!w-[292px]"
                icon={<span className="gsap-animate text-[22px] leading-[24px]">→</span>}
              >
                <span className="text-[13px] font-medium tracking-[0.2px]">
                  {ctaText}
                </span>
              </Button>

              <div className="hidden items-center gap-4 sm:flex">
                <div className="h-px w-[70px] bg-[rgba(229,161,145,0.7)] xl:w-[100px]" />

                <Image
                  src="/micro-circle.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="gsap-animate h-7 w-7 shrink-0"
                />

                <div className="text-[8px] font-medium leading-[13px] tracking-[2px] text-[rgba(247,241,233,0.88)]">
                  {circleMicrocopy.map((line: string, idx: number) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden bg-[rgba(214,223,229,0.25)] xl:block xl:min-h-[650px]" />

          {/* Process */}
          <div className="min-w-0 lg:col-span-1 xl:pl-[38px] xl:pr-[20px] 2xl:pr-[30px]">
            <div className="flex flex-col gap-8 sm:gap-9 md:gap-10 xl:gap-[28px]">
              {processSteps.map((step: any, idx: number) => {
                const num = String(idx + 1).padStart(2, "0");

                return (
                  <div
                    key={idx}
                    className="gsap-animate grid grid-cols-[48px_1px_minmax(0,1fr)] gap-x-4 sm:grid-cols-[55px_1px_minmax(0,1fr)] sm:gap-x-5 xl:grid-cols-[58px_1px_minmax(0,1fr)] xl:gap-x-[14px]"
                  >
                    <span className="font-playfair leading-none text-[#e5a191] text-[32px] sm:text-[35px] xl:text-[38px]">
                      {num}
                    </span>

                    <span className="mt-1 h-[55px] w-px bg-[rgba(229,161,145,0.55)] sm:h-[60px] xl:h-[62px]" />

                    <div className="min-w-0">
                      <h3 className="gsap-animate font-playfair text-[21px] leading-[26px] text-[#f7f1e9] sm:text-[22px] sm:leading-[27px] xl:text-[24px] xl:leading-[28px]">
                        {step.title}
                      </h3>

                      <p className="gsap-animate mt-2 whitespace-pre-line text-[13.5px] leading-[21px] text-[#f7f1e9] sm:text-[14px] sm:leading-[22px] xl:text-[14.5px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Blueprint */}
          <div className="hidden min-w-0 flex-col 2xl:flex">
            <div className="flex items-start">
              <div className="w-full opacity-30">
                <Image
                  src={blueprintImage}
                  alt=""
                  width={330}
                  height={650}
                  className="gsap-animate h-auto w-full max-w-[330px] object-contain"
                />
              </div>

              <div className="-ml-[125px] mt-7 shrink-0 whitespace-nowrap text-[9.5px] font-medium leading-[18px] tracking-[2.3px] text-[#f7f1e9]">
                {blueprintMicrocopy.map((line: string, idx: number) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

            <div className="mt-[-70px] flex justify-center">
              <div className="rotate-90 text-center text-[9px] font-medium leading-[18px] tracking-[2.4px] text-[rgba(247,241,233,0.75)]">
                <p>ERISHA</p>
                <p>INTERNATIONAL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Capabilities */}
        <div className="border-t border-[rgba(214,223,229,0.28)] py-7 md:py-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-4 lg:gap-0">
            {bottomTags.map((item: string, idx: number) => (
              <div
                key={idx}
                className="gsap-animate flex min-h-[34px] items-center lg:border-r lg:border-[rgba(229,161,145,0.6)] lg:px-[30px] xl:px-[55px] 2xl:px-[76px]"
              >
                <p className="gsap-animate text-[10px] font-medium tracking-[1.6px] text-[#f7f1e9] sm:text-[11px] sm:tracking-[1.8px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
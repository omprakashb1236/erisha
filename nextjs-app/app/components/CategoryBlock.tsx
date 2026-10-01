"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import type { CategoryBlock } from "@/sanity.types";
type CategoryBlockProps = Partial<CategoryBlock> & {
  block?: CategoryBlock;
  imageSrc?: string;
};

import Button from "./Button";

export default function CategoryBlock({
  block,
  eyebrow: propEyebrow,
  headlineLine1: propHeadlineLine1,
  headlineLine2: propHeadlineLine2,
  subhead: propSubhead,
  paragraph: propParagraph,
  imageSrc: propImageSrc,
  imageInsideContainer: propImageInsideContainer,
  imageAlign: propImageAlign,
  backgroundColor: propBackgroundColor
}: CategoryBlockProps) {
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

  const eyebrow = propEyebrow ?? block?.eyebrow ?? "SUSTAINABILITY";
  const headlineLine1 = propHeadlineLine1 ?? block?.headlineLine1 ?? "Better products.";
  const headlineLine2 = propHeadlineLine2 ?? block?.headlineLine2 ?? "A brighter tomorrow.";
  const subhead = propSubhead ?? block?.subhead ?? "";
  const paragraph = propParagraph ?? block?.paragraph ?? "We are committed to responsible manufacturing, conscious choices and lasting partnerships \u2014 bringing people, products and planet into the same conversation as quality, fit and execution.";

  const imageSrc = (propImageSrc ?? block?.image ?? "/product-banner-image.png") as string;

  const imageInsideContainer = propImageInsideContainer ?? block?.imageInsideContainer ?? false;
  const imageAlign = propImageAlign ?? block?.imageAlign ?? "right";
  const backgroundColor = propBackgroundColor ?? block?.backgroundColor ?? "#fefaf6";
  const ctaButton = block?.ctaButton as any;

  return (
    <section ref={containerRef as any}
      className="w-full relative overflow-hidden pt-10 md:pt-[70px] pb-0 md:pb-[80px] min-h-[560px]"
      style={{ backgroundColor }}
    >
      <div className="w-full container relative z-10 flex flex-col lg:flex-row">

        {/* Main Text Content */}
        {/* lg:ml-auto pushes the text column to the right when the image is aligned left */}
        <div className={`flex flex-col w-full lg:w-[650px] relative z-20 ${imageAlign === "left" ? "lg:ml-auto" : ""}`}>
          <p className="gsap-animate text-[#b86e58] text-[10px] lg:text-[10.5px] font-medium tracking-[2px] lg:tracking-[2.9px] uppercase mb-[18px]">
            {eyebrow}
          </p>
          <div className="w-[44px] h-px bg-[#b86e58] mb-[28px]" />

          <h2 className={`gsap-animate ${backgroundColor === '#1B2845' ? 'text-[#F9F6F1]' : 'text-[#1b2845]'} font-playfair  text-4xl lg:text-[53px] leading-[1.1] lg:leading-[58px] mb-[25px]`}>
            {headlineLine1 && <span className="block">{headlineLine1}</span>}
            {headlineLine2 && <span className="block">{headlineLine2}</span>}
          </h2>
          {subhead &&
            <p className={`gsap-animate ${backgroundColor === '#1B2845' ? 'text-[#F9F6F1]' : 'text-[#b86e58]'} font-playfair font-extrabold italic text-[24px] lg:text-[33px] leading-[1.3] lg:leading-[42px] mb-[14px] lg:max-w-[610px]`}>
              {subhead}
            </p>}

          <p className={`gsap-animate ${backgroundColor === '#1B2845' ? 'text-[#F9F6F1C7]' : 'text-[#4a505e]'} text-[14px] lg:text-[15.5px] leading-[1.6] lg:leading-[26px] lg:mb-[60px] mb-[50px] lg:max-w-[585px]`}>
            {paragraph}
          </p>

          {(block?.captionItem?.length ?? 0) > 0 && (
            <div className="bg-[#D2BFAF] h-[1px] mb-6 w-full" />
          )}

          {block?.captionItem?.map((item) => (
            <div
              key={item._key}
              className={`${backgroundColor === '#1B2845' ? 'text-[#F9F6F1C7]' : 'text-[#1b2845]'}  mb-[25px] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase whitespace-pre-wrap lg:max-w-[640px]`}
            >
              {item.title && <p className="gsap-animate text-[#B86E58] mb-3 uppercase font-medium">{item.title}</p>}
              {item.text && <p>{item.text}</p>}
            </div>
          ))}

          {ctaButton && ctaButton?.buttonText && (
            <div>
              <Button
                href={ctaButton.link?.linkType === 'page' && (ctaButton.link?.page?.slug || (typeof ctaButton.link?.page === 'string' && ctaButton.link?.page))
                  ? ((ctaButton.link?.page?.slug || ctaButton.link?.page) === 'home' ? '/' : '/' + (ctaButton.link?.page?.slug || ctaButton.link?.page))
                  : ctaButton.link?.path || ctaButton.link?.href || '/capabilities'}
                className="gsap-animate w-full max-w-[190px] h-[48px] rounded-[24px]"
                icon={<span className="text-[18px]">→</span>}
              >
                {ctaButton.buttonText || ""}
              </Button>
            </div>
          )}
        </div>

        {/* Desktop Image Placement */}
        {/* We use an absolute div to place the image under/beside the text. 
            If it bleeds out (imageInsideContainer=false), it stretches 100vw but is cropped by the section's overflow-hidden. */}
        <div
          className={`gsap-animate hidden lg:block absolute top-[-10px] h-[520px] z-10 ${imageAlign === "right"
            ? (imageInsideContainer ? 'left-[800px] w-[550px]' : 'left-[800px] xl:w-[45%] 2xl2:w-[60%] 3xl:w-[70%] w-[50%]')
            : (imageInsideContainer ? 'left-[0px] w-[550px]' : 'right-[800px] w-[70%]')
            }`}
        >
          <Image src={imageSrc} alt="Banner Graphic" fill className="object-cover" />
          {block?.imageCaptionItems && <p className={`${backgroundColor === '#1B2845' ? 'text-[#F9F6F1]' : 'text-[#1b2845]'} absolute bottom-[-40px] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase whitespace-pre-wrap lg:max-w-[640px]`}>
            {block?.imageCaptionItems}
          </p>
          }
        </div>

        {/* Desktop Overlay Text */}
        {/* Positioned relative to the 1456px container so it stays in the exact right spot even if the image bleeds offscreen */}
        <div
          className={`gsap-animate hidden lg:block absolute top-0 z-20 text-[#1b2845] text-[10px] font-medium tracking-[2.3px] leading-[19px] ${imageAlign === "right" ? 'left-[1210px]' : 'left-[410px]'
            }`}
        >{block?.overlayTextItems?.map((caption: string, index: number) => (
          <p key={index}>{caption}</p>
        ))}
        </div>

      </div>

      {/* Mobile Image (Visible on smaller screens) */}
      <div className="gsap-animate block lg:hidden w-full h-[400px] sm:h-[500px] relative mt-12 z-10">
        <Image src={imageSrc} alt="Banner Graphic" fill className="object-cover" />
        <div className="absolute right-6 bottom-6 text-[#1b2845] text-[10px] font-medium tracking-[2.3px] leading-[19px] bg-white/80 p-4 rounded-sm">
          {block?.overlayTextItems?.map((caption: string, index: number) => (
            <p key={index}>{caption}</p>
          ))}
        </div>
      </div>

    </section>
  );
}

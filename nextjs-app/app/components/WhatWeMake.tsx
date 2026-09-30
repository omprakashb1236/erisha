"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { urlForImage, linkResolver } from "@/sanity/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const defaultCategories = [
  { num: "01", name: "BRAS & BRALETTES", active: true },
  { num: "02", name: "PANTIES", active: false },
];

const defaultCards = [
  {
    image: "/category-bras.png",
    title: "Bras & Bralettes",
    desc: "Everyday support,\nbeautifully made.",
  },
];

export default function WhatWeMake({ block: data }: any) {
  const containerRef = useRef<HTMLElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const productLinesCategories = data?.productLinesCategories?.length 
    ? data.productLinesCategories 
    : defaultCategories.map(c => ({ productLine: { title: c.name }, productFamilies: defaultCards }));

  const activeCategory = productLinesCategories[activeTab];
  const activeFamilies = activeCategory?.productFamilies || [];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.from(".wwm-eyebrow", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(".wwm-heading-line", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.4")
      .from(".wwm-desc", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(".wwm-btn", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(".wwm-carousel", { opacity: 0, x: 50, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".wwm-tabs", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#f9f4ee] overflow-hidden">
      
      <div className="w-full container mx-auto min-h-screen lg:min-h-[900px] flex flex-col justify-between pt-12 pb-8">
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-8 lg:mt-[50px]">
          
          {/* Left Text Box */}
          <div className="flex flex-col z-20 flex-1 max-w-[450px]">
            <p className="wwm-eyebrow text-[#b86e58] text-[10px] font-bold tracking-[1px] leading-[1.75] uppercase mb-4 lg:mb-12">
              {data?.eyebrow || "WHAT WE MAKE"}
            </p>

            <h2 className="text-[#1b2845] text-5xl lg:text-[60px] leading-tight lg:leading-none mb-6 lg:mb-11 font-playfair">
              <span className="wwm-heading-line block mb-1 lg:mb-2">{data?.headingLine1 || "Designed"}</span>
              <span className="wwm-heading-line block mb-1 lg:mb-2">{data?.headingLine2 || "across"}</span>
              <span className="wwm-heading-line block font-extrabold italic text-[#965745] lg:text-[54px]">{data?.headingLine3 || "every category."}</span>
            </h2>

            <div className="wwm-desc text-[#4a505e] text-[15px] lg:text-[14px] leading-[1.4] mb-8 max-w-[370px]">
              <p>{data?.description || "Erisha develops intimatewear and soft apparel across women’s, men’s and gender-inclusive collections — from refined intimates essentials to everyday layers, sleepwear and lounge pieces, with thoughtful construction, fabric development and private-label manufacturing expertise."}</p>
            </div>

            <div className="wwm-btn"><Button 
              href={data?.cta?.link ? (linkResolver(data.cta.link) || "/categories") : "/categories"} 
              className="w-full sm:w-[255px]"
              icon={<Image src="/hero-arrow-right.svg" alt="" width={13} height={13} />}
            >
              {data?.cta?.buttonText || "Explore Product Categories"}
            </Button></div>
          </div>

          {/* Right Carousel Box */}
          <div className="wwm-carousel w-full lg:w-[895px] relative">
            {activeFamilies.length === 0 ? (
              <div className="flex items-center justify-center w-full h-[578px] text-[#4a505e] text-lg font-medium bg-[#fcf8f3] border border-[#d2bfaf]/50 rounded-[15px]">
                No product families exist for this category.
              </div>
            ) : (
              <Swiper
                key={`swiper-${activeTab}`}
                observer={true}
                observeParents={true}
                modules={[Navigation, Pagination]}
                spaceBetween={14}
                slidesPerView="auto"
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                pagination={{
                  el: paginationRef.current,
                  clickable: true,
                  renderBullet: function (index, className) {
                    return `<span class="${className} custom-bullet"></span>`;
                  }
                }}
                onBeforeInit={(swiper) => {
                  if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                  if (typeof swiper.params.pagination !== 'boolean' && swiper.params.pagination) {
                    swiper.params.pagination.el = paginationRef.current;
                  }
                }}
                className="w-full !pb-12 lg:!pb-16"
              >
                {activeFamilies.map((card:any, idx:any) => {
                  const imgSource = card.image || card.thumbnailImage || card.heroImage;
                  const imgSrc = imgSource?.asset 
                    ? urlForImage(imgSource)?.url() || "" 
                    : (typeof imgSource === 'string' ? imgSource : "/category-bras.png");
                  
                  return (
                    <SwiperSlide key={idx} className="!w-[288px]">
                      <Link href={`/catalogue/${card.productLineSlug || 'category'}/${card.slug || ''}`}>
                        <div className="relative w-[288px] h-[578px] bg-[#fcf8f3] border border-[#d2bfaf]/50 rounded-[15px] shadow-[0px_2px_4px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group cursor-pointer">
                          <div className="absolute left-[9px] top-[9px] w-[270px] h-[405px] rounded-[11px] overflow-hidden">
                            <Image 
                              src={imgSrc} 
                              alt={card.title || ""} 
                              fill 
                              className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                          </div>
                          <h3 className="absolute left-[23px] top-[434px] text-[#122c52] text-[25px] tracking-[-0.35px] font-didot">
                            {card.title}
                          </h3>
                          <p className="absolute left-[23px] top-[485px] text-[#4a505e] text-[13.5px] leading-[19px] whitespace-pre-line">
                            {card.subtitle || card.description}
                          </p>
                          <span className="absolute left-[231px] top-[519px] text-[#122c52] text-[25px] group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
            
            {/* Desktop Navigation & Pagination Overlays */}
            {activeFamilies.length > 0 && (
              <div className="hidden lg:flex items-center gap-[18px] justify-center absolute -bottom-4 left-1/2 -translate-x-1/2 w-full z-30">
                <button 
                  ref={prevRef}
                  className="w-[56px] h-[56px] relative flex items-center justify-center group hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed -ml-[80px]"
                >
                  <Image src="/carousel-nav.svg" alt="Previous" fill />
                  <span className="absolute text-[#122c52] text-[25px] font-normal pb-1">←</span>
                </button>

                <div ref={paginationRef} className="flex items-center gap-[18px] custom-pagination px-[120px]"></div>

                <button 
                  ref={nextRef}
                  className="w-[56px] h-[56px] relative flex items-center justify-center group hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed -mr-[80px]"
                >
                  <Image src="/carousel-nav.svg" alt="Next" fill />
                  <span className="absolute text-[#122c52] text-[25px] font-normal pb-1">→</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Categories at Bottom */}
        <div className="flex flex-col gap-4 border-t border-[#ad9c8c]/40 px-6 lg:px-[51px] pt-8 lg:pt-0 lg:flex-row lg:justify-between lg:mt-16 relative">
          
          {productLinesCategories.map((cat:any, idx:any) => {
            const isActive = idx === activeTab;
            const catName = cat.productLine?.title || cat.name || cat.title || "Category";
            const catNum = cat.num || `0${idx + 1}`.slice(-2);

            return (
              <div 
                key={idx} 
                className="wwm-tabs flex flex-col gap-2 border-b border-[#ad9c8c]/20 lg:border-none pb-4 lg:pb-0 lg:pt-4 relative flex-1 cursor-pointer"
                onClick={() => setActiveTab(idx)}
              >
                <div className="hidden lg:block absolute left-0 top-0 w-px h-[58px] bg-[#ad9c8c]/30 -ml-4" />
                
                <div className="flex flex-col gap-[9px] group lg:pl-2">
                  <span className={`text-[12px] lg:text-[9.5px] font-medium tracking-[1.6px] mt-[2px] ${isActive ? "text-[#965745]" : "text-[#122c52]"}`}>
                    {catNum}
                  </span>
                  <span className={`text-[14px] lg:text-[10.5px] font-medium tracking-[1px] ${isActive ? "text-[#965745]" : "text-[#122c52] group-hover:text-[#965745] transition-colors"}`}>
                    {catName}
                  </span>
                  {isActive && (
                    <div className="hidden lg:block absolute top-[63px] left-2 right-4 h-[1.5px] bg-[#965745]/80" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: url('/pagination-inactive.svg') no-repeat center center;
          background-size: contain;
          opacity: 1;
          margin: 0 !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 13px;
          height: 13px;
          background: url('/pagination-active.svg') no-repeat center center;
          background-size: contain;
        }
      `}} />
    </section>
  );
}

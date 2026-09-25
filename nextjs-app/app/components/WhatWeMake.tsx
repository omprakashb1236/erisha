"use client";

import Image from "next/image";
import { useRef } from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  { num: "01", name: "BRAS & BRALETTES", active: true },
  { num: "02", name: "PANTIES", active: false },
  { num: "03", name: "BRIEFS & BOXERS", active: false },
  { num: "04", name: "CAMISOLES", active: false },
  { num: "05", name: "LOUNGEWEAR", active: false },
  { num: "06", name: "SLEEPWEAR", active: false },
  { num: "07", name: "BASE LAYERS", active: false },
  { num: "08", name: "ESSENTIALS", active: false },
];

const cards = [
  {
    image: "/category-bras.png",
    title: "Bras & Bralettes",
    desc: "Everyday support,\nbeautifully made.",
  },
  {
    image: "/category-panties.png",
    title: "Panties",
    desc: "Comfort in\nevery detail.",
  },
  {
    image: "/category-briefs.png",
    title: "Briefs & Boxers",
    desc: "Modern essentials\nfor every body.",
  },
  {
    image: "/category-bras.png",
    title: "Camisoles",
    desc: "Light layers for\neveryday wear.",
  },
  {
    image: "/category-panties.png",
    title: "Loungewear",
    desc: "Relaxed fits for\nyour downtime.",
  }
];

export default function WhatWeMake() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-[#f9f4ee] overflow-hidden">
      
      <div className="w-full container mx-auto min-h-screen lg:min-h-[900px] flex flex-col justify-between pt-12 pb-8">
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-8 lg:mt-[50px]">
          
          {/* Left Text Box */}
          <div className="flex flex-col z-20 flex-1 max-w-[450px]">
            <p className="text-[#b86e58] text-[10px] font-bold tracking-[1px] leading-[1.75] uppercase mb-4 lg:mb-12">
              WHAT WE MAKE
            </p>

            <h2 className="text-[#1b2845] text-5xl lg:text-[60px] leading-tight lg:leading-none mb-6 lg:mb-11 font-playfair">
              <span className="block mb-1 lg:mb-2">Designed</span>
              <span className="block mb-1 lg:mb-2">across</span>
              <span className="block font-extrabold italic text-[#965745] lg:text-[54px]">every category.</span>
            </h2>

            <div className="text-[#4a505e] text-[15px] lg:text-[14px] leading-[1.4] mb-8 max-w-[370px]">
              <p>Erisha develops intimatewear and soft apparel across women’s, men’s and gender-inclusive collections — from refined intimates essentials to everyday layers, sleepwear and lounge pieces, with thoughtful construction, fabric development and private-label manufacturing expertise.</p>
            </div>

            <Button 
              href="/categories" 
              className="w-full sm:w-[255px]"
              icon={<Image src="/hero-arrow-right.svg" alt="" width={13} height={13} />}
            >
              Explore Product Categories
            </Button>
          </div>

          {/* Right Carousel Box */}
          <div className="w-full lg:w-[895px] relative">
            <Swiper
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
              {cards.map((card, idx) => (
                <SwiperSlide key={idx} className="!w-[288px]">
                  <div className="relative w-[288px] h-[578px] bg-[#fcf8f3] border border-[#d2bfaf]/50 rounded-[15px] shadow-[0px_2px_4px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="absolute left-[9px] top-[9px] w-[270px] h-[405px] rounded-[11px] overflow-hidden">
                      <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="absolute left-[23px] top-[434px] text-[#122c52] text-[25px] tracking-[-0.35px] font-didot">
                      {card.title}
                    </h3>
                    <p className="absolute left-[23px] top-[485px] text-[#4a505e] text-[13.5px] leading-[19px] whitespace-pre-line">
                      {card.desc}
                    </p>
                    <span className="absolute left-[231px] top-[519px] text-[#122c52] text-[25px] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Desktop Navigation & Pagination Overlays */}
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
          </div>
        </div>

        {/* Categories at Bottom */}
        <div className="flex flex-col gap-4 border-t border-[#ad9c8c]/40 px-6 lg:px-[51px] pt-8 lg:pt-0 lg:flex-row lg:justify-between lg:mt-16 relative">
          
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-2 border-b border-[#ad9c8c]/20 lg:border-none pb-4 lg:pb-0 lg:pt-4 relative flex-1">
              
              <div className="hidden lg:block absolute left-0 top-0 w-px h-[58px] bg-[#ad9c8c]/30 -ml-4" />
              
              <div className="flex flex-col gap-[9px] group cursor-pointer lg:pl-2">
                <span className={`text-[12px] lg:text-[9.5px] font-medium tracking-[1.6px] mt-[2px] ${cat.active ? "text-[#965745]" : "text-[#122c52]"}`}>
                  {cat.num}
                </span>
                <span className={`text-[14px] lg:text-[10.5px] font-medium tracking-[1px] ${cat.active ? "text-[#965745]" : "text-[#122c52] group-hover:text-[#965745] transition-colors"}`}>
                  {cat.name}
                </span>
                {cat.active && (
                  <div className="hidden lg:block absolute top-[63px] left-2 right-4 h-[1.5px] bg-[#965745]/80" />
                )}
              </div>
            </div>
          ))}
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

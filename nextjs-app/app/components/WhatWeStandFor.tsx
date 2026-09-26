import Image from "next/image";

export default function WhatWeStandFor() {
  return (
    <section className="w-full bg-[#1b2845] overflow-hidden py-[80px] lg:pt-[72px] lg:pb-[100px] relative min-h-[560px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-[760px]">
          
          <p className="text-[#e5a191] text-[10.5px] font-medium tracking-[2.8px] leading-[17px] mb-[40px] lg:mb-[43px] uppercase">
            WHAT HAS NOT CHANGED
          </p>
          
          <h2 className="font-playfair font-normal text-[#f9f6f1] text-[36px] lg:text-[53px] leading-[1.2] lg:leading-[58px] mb-[40px] lg:mb-[110px] lg:max-w-[690px]">
            <span className="block">Stay close to the product.</span>
            <span className="block">Stay close to the partner.</span>
          </h2>
          
          <p className="text-[#f9f6f1]/78 text-[14px] text-[#f9f6f1] lg:text-[15px] leading-[1.6] lg:leading-[26px] mb-[60px] lg:mb-[129px] lg:max-w-[650px]">
            Growth matters only if the work still feels personal. We keep communication direct, decisions connected and accountability clear from first development through final production.
          </p>
          
          <p className="text-[#f9f6f1]/78 text-[#f9f6f1] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase whitespace-pre-wrap lg:max-w-[760px]">
            DEVELOPMENT  /  SOURCING  /  PRODUCTION  /  QUALITY  /  PARTNERSHIP
          </p>
          
        </div>

      </div>

      {/* Right Blueprint Image (Absolutely positioned for exact desktop placement, fluid on mobile) */}
      <div className="relative w-full aspect-square mt-12 lg:mt-0 lg:absolute lg:left-[calc(50%+252px)] xl:left-[980px] lg:top-[20px] lg:w-[400px] lg:h-[520px] opacity-100 lg:opacity-30 z-0">
        <Image src="/proof-blueprint.png" alt="Blueprint" fill className="object-contain" />
      </div>
      
    </section>
  );
}

import Image from "next/image";

export default function QualityProgress() {
  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden py-[80px] lg:pt-[60px] lg:pb-[100px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row lg:justify-between items-start gap-16 lg:gap-10">
        
        {/* Left Intro Column */}
        <div className="flex flex-col w-full lg:w-[500px] shrink-0">
          <p className="text-[#b86e58] text-[10px] lg:text-[10.5px] font-medium tracking-[2px] lg:tracking-[2.9px] leading-[17px] uppercase mb-[14px]">
            QUALITY & PROGRESS
          </p>
          <div className="w-[44px] h-px bg-[#b86e58]/52 mb-[28px]" />
          
          <h2 className="font-playfair text-[#1b2845] text-4xl lg:text-[55px] leading-[1.1] lg:leading-[58px] mb-[40px] lg:mb-[90px]">
            <span className="block">Quality is part of</span>
            <span className="block">responsibility.</span>
          </h2>
          
          <p className="text-[#4a505e] text-[14px] lg:text-[14.5px] leading-[1.6] lg:leading-[24px]">
            Consistency prevents rework, protects materials and builds trust. That is why quality control sits throughout the process rather than waiting at the end.
          </p>
        </div>

        {/* Right Content Column (Stats & Photos) */}
        <div className="flex flex-col w-full lg:w-[770px] shrink-0 lg:mt-[85px]">
          
          {/* Top Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 mb-[50px] lg:mb-[85px]">
            
            <div className="flex flex-col">
              <p className="font-playfair text-[#b86e58] text-[32px] lg:text-[40px] leading-none lg:leading-[45px] mb-[15px]">
                100%
              </p>
              <p className="text-[#1b2845] text-[8px] lg:text-[8.8px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[10px]">
                QUALITY CHECKS
              </p>
              <p className="text-[#4a505e] text-[11px] lg:text-[11.5px] leading-[1.4] lg:leading-[18px]">
                At every stage
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-playfair text-[#b86e58] text-[32px] lg:text-[40px] leading-none lg:leading-[45px] mb-[15px]">
                30%
              </p>
              <p className="text-[#1b2845] text-[8px] lg:text-[8.8px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[10px]">
                REDUCTION IN WASTE
              </p>
              <p className="text-[#4a505e] text-[11px] lg:text-[11.5px] leading-[1.4] lg:leading-[18px]">
                Through efficient production
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-playfair text-[#b86e58] text-[32px] lg:text-[40px] leading-none lg:leading-[45px] mb-[15px]">
                100+
              </p>
              <p className="text-[#1b2845] text-[8px] lg:text-[8.8px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[10px]">
                SKILLED PROFESSIONALS
              </p>
              <p className="text-[#4a505e] text-[11px] lg:text-[11.5px] leading-[1.4] lg:leading-[18px]">
                Across design and production
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-playfair text-[#b86e58] text-[26px] lg:text-[31px] leading-none lg:leading-[45px] mb-[15px]">
                GLOBAL
              </p>
              <p className="text-[#1b2845] text-[8px] lg:text-[8.8px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[10px]">
                COMPLIANCE STANDARDS
              </p>
              <p className="text-[#4a505e] text-[11px] lg:text-[11.5px] leading-[1.4] lg:leading-[18px]">
                For peace of mind
              </p>
            </div>

          </div>

          {/* Divider Rule */}
          <div className="w-full h-px bg-[#d2bfaf]/50 mb-[35px]" />

          {/* Bottom Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
            
            <div className="flex flex-col">
              <div className="w-full aspect-[17/18] lg:h-[180px] relative mb-[12px]">
                <Image src="/quality-1.png" alt="Crafted by experts" fill className="object-cover" />
              </div>
              <p className="text-[#4a505e] text-[8px] lg:text-[8.5px] font-medium tracking-[1.4px] leading-[14px] uppercase">
                CRAFTED BY EXPERTS
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full aspect-[17/18] lg:h-[180px] relative mb-[12px]">
                <Image src="/quality-2.png" alt="Premium materials" fill className="object-cover" />
              </div>
              <p className="text-[#4a505e] text-[8px] lg:text-[8.5px] font-medium tracking-[1.4px] leading-[14px] uppercase">
                PREMIUM MATERIALS
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full aspect-[17/18] lg:h-[180px] relative mb-[12px]">
                <Image src="/quality-3.png" alt="Consistent quality" fill className="object-cover" />
              </div>
              <p className="text-[#4a505e] text-[8px] lg:text-[8.5px] font-medium tracking-[1.4px] leading-[14px] uppercase">
                CONSISTENT QUALITY
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full aspect-[17/18] lg:h-[180px] relative mb-[12px]">
                <Image src="/quality-4.png" alt="Ready for the world" fill className="object-cover" />
              </div>
              <p className="text-[#4a505e] text-[8px] lg:text-[8.5px] font-medium tracking-[1.4px] leading-[14px] uppercase">
                READY FOR THE WORLD
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

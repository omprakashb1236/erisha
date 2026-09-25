import Image from "next/image";
import Button from "./Button";

export default function OurImpact() {
  return (
    <section className="w-full bg-[#f8f4ee] overflow-hidden flex flex-col items-center">
      
      {/* Main Content Area: Split 50/50 Desktop */}
      <div className="w-full container flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[58%] flex flex-col pt-12 lg:pt-[100px] px-6 lg:pl-[75px] lg:pr-[60px] pb-12 lg:pb-[100px]">
          
          <div className="flex flex-col max-w-[620px]">
            <p className="text-[#b86e58] text-[10px] lg:text-[11px] font-bold tracking-[2px] lg:tracking-[3.4px] mb-[18px] uppercase">
              Our Impact
            </p>
            <div className="w-[48px] h-px bg-[#965745]/55 mb-[26px]" />
            
            <h2 className="font-playfair leading-none mb-6 lg:mb-[40px]">
              <span className="block text-[#1b2845] text-4xl lg:text-[56px] xl:text-[62px] mb-2">Trusted by global brands.</span>
              <span className="block text-[#965745] text-4xl lg:text-[54px] xl:text-[60px] font-extrabold italic">Designed for what’s next.</span>
            </h2>
            
            <div className="text-[#4a505e] text-[14px] lg:text-[15px] leading-[1.6] mb-12">
              <p>For over two decades, Erisha has been a trusted manufacturing partner for leading lingerie and intimatewear brands around the world — helping them bring beautiful, functional and sustainable collections to life.</p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="flex flex-wrap lg:flex-nowrap items-center w-full max-w-[620px] mb-12 lg:mb-16">
            <div className="w-1/2 lg:flex-1 flex flex-col lg:border-r border-[#b28570]/35 pr-4 mb-8 lg:mb-0">
              <p className="text-[#965745] text-4xl lg:text-[42px] xl:text-[46px] font-didot tracking-[-0.3px]">20+</p>
              <p className="text-[#0e1b30] text-[9px] lg:text-[9.5px] font-medium tracking-[2px] mt-3 uppercase leading-[1.4]">Years of<br/>Experience</p>
            </div>
            <div className="w-1/2 lg:flex-1 flex flex-col lg:border-r border-[#b28570]/35 pl-4 lg:px-4 mb-8 lg:mb-0">
              <p className="text-[#965745] text-4xl lg:text-[42px] xl:text-[46px] font-didot tracking-[-0.3px]">50+</p>
              <p className="text-[#0e1b30] text-[9px] lg:text-[9.5px] font-medium tracking-[2px] mt-3 uppercase leading-[1.4]">Global<br/>Brands</p>
            </div>
            <div className="w-1/2 lg:flex-1 flex flex-col lg:border-r border-[#b28570]/35 pr-4 lg:px-4">
              <p className="text-[#965745] text-4xl lg:text-[42px] xl:text-[46px] font-didot tracking-[-0.3px]">10M</p>
              <p className="text-[#0e1b30] text-[9px] lg:text-[9.5px] font-medium tracking-[2px] mt-3 uppercase leading-[1.4]">Garments<br/>Annually</p>
            </div>
            <div className="w-1/2 lg:flex-1 flex flex-col pl-4">
              <p className="text-[#965745] text-4xl lg:text-[42px] xl:text-[46px] font-didot tracking-[-0.3px]">25+</p>
              <p className="text-[#0e1b30] text-[9px] lg:text-[9.5px] font-medium tracking-[2px] mt-3 uppercase leading-[1.4]">Countries<br/>Served</p>
            </div>
          </div>

          {/* Map & CTA Row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 lg:gap-12 w-full max-w-[650px] mt-auto">
            
            {/* Map */}
            <div className="relative w-full sm:w-[55%] aspect-[3/2] lg:h-[220px]">
              <Image src="/impact-map.png" alt="Global Map" fill className="object-contain object-left" />
            </div>

            {/* Right CTA Area */}
            <div className="flex flex-col w-full sm:w-[45%] pt-4">
              <p className="text-[#0e1b30] text-[10px] font-medium tracking-[2px] lg:tracking-[3.2px] uppercase">A Global Partner</p>
              <div className="w-[43px] h-px bg-[#0e1b30]/35 mt-3" />
              <p className="text-[#4a505e] text-[13px] leading-[1.6] mt-4 mb-6 pr-4">
                From design to delivery, we support brands across North America, Europe, Middle East and Asia with consistent quality and reliable timelines.
              </p>
              <Button 
                href="/partner" 
                variant="light"
                className="w-full max-w-[205px] h-[42px] !border-[#965745]/55 !text-[#0e1b30] !justify-between !px-5 text-[12px]"
                icon={<span className="text-[18px]">→</span>}
              >
                Partner With Us
              </Button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Single Image) */}
        <div className="w-full lg:w-[42%] relative h-[400px] lg:h-auto min-h-[500px]">
          <Image src="/impact-photo1.png" alt="Impact Reference" fill className="object-cover" />
        </div>

      </div>

      {/* Brands Strip */}
      <div className="w-full pt-12 lg:pt-[80px] pb-12 lg:pb-[60px] relative z-10 border-t border-[#d2bfaf]/40">
        <div className="w-full container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <p className="text-[#0e1b30] text-[9.5px] font-medium tracking-[3.4px] leading-[14px]">
              IN GOOD COMPANY
            </p>
            <div className="w-[43px] h-px bg-[#0e1b30]/40 mt-4" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-[40px] xl:gap-[60px] flex-1 lg:px-12">
            <div className="relative w-[100px] lg:w-[120px] h-[40px] lg:h-[50px]">
              <Image src="/logo-vs.png" alt="Victoria's Secret" fill className="object-contain" />
            </div>
            <div className="relative w-[100px] lg:w-[110px] h-[30px] lg:h-[40px]">
              <Image src="/logo-ck.png" alt="Calvin Klein" fill className="object-contain" />
            </div>
            <div className="relative w-[90px] lg:w-[100px] h-[40px] lg:h-[50px]">
              <Image src="/logo-triumph.png" alt="Triumph" fill className="object-contain" />
            </div>
            <div className="relative w-[70px] lg:w-[80px] h-[35px] lg:h-[40px]">
              <Image src="/logo-next.png" alt="Next" fill className="object-contain" />
            </div>
            <div className="relative w-[60px] lg:w-[70px] h-[40px] lg:h-[50px]">
              <Image src="/logo-hm.png" alt="H&M" fill className="object-contain" />
            </div>
            <div className="relative w-[100px] lg:w-[130px] h-[40px] lg:h-[50px]">
              <Image src="/logo-ms.png" alt="Marks & Spencer" fill className="object-contain" />
            </div>
          </div>
          
          <div className="flex-col items-center lg:items-end hidden lg:flex shrink-0">
            <p className="text-[#46484f] text-[8.2px] font-medium tracking-[2.8px] leading-[13px]">
              AND MANY MORE
            </p>
            <div className="w-[44px] h-px bg-[#b28570]/40 mt-4" />
          </div>

        </div>
      </div>

      {/* Footer Statement Strip */}
      <div className="w-full bg-[#b17c71] py-8 lg:h-[108px] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[100px] px-6 text-center">
          <p className="text-[#faf6f2] text-[9.2px] font-medium tracking-[4.1px] leading-[14px]">
            DIFFERENT BRANDS. A SHARED BELIEF.
          </p>
          <div className="w-px h-[24px] lg:h-[46px] bg-[#faf6f2]/45 hidden lg:block" />
          <div className="h-px w-[40px] bg-[#faf6f2]/45 lg:hidden" />
          <p className="text-[#faf6f2] text-[9.2px] font-medium tracking-[4.1px] leading-[14px]">
            INTIMATEWEAR CAN EMPOWER EVERY WOMAN.
          </p>
        </div>
      </div>

    </section>
  );
}

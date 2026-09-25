import Image from "next/image";
import Button from "./Button";

export default function BetterProducts() {
  return (
    <section className="relative w-full bg-[#f9f6f1] overflow-hidden">
      <div className="w-full container mx-auto flex flex-col lg:flex-row relative">
        
        {/* Mobile/Flex Content Area */}
        <div className="flex flex-col px-6 lg:px-[84px] py-12 lg:py-[100px] z-20 w-full lg:w-1/2 flex-1">
          <div className="flex flex-col max-w-[580px]">
            <p className="text-[#9c5b49] text-[11px] font-medium tracking-[3.3px] leading-[16px] mb-4">OUR COMMITMENT</p>
            <div className="w-[48px] h-px bg-[#9c5b49]/45 mb-8" />
            
            <h2 className="text-[#1b2845] font-playfair leading-none mb-6 text-5xl lg:text-[70px]">
              <span className="block mb-2">Better products.</span>
              <span className="block text-[#9c5b49] font-extrabold italic">A brighter tomorrow.</span>
            </h2>
            
            <p className="text-[#505663] text-[15px] leading-[28px] lg:mt-8">
              We are committed to responsible manufacturing, conscious choices and lasting partnerships — because exceptional lingerie should make a positive difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-row lg:items-start gap-10 mt-12 lg:mt-[100px]">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="relative w-[82px] h-[82px] flex items-center justify-center">
                <Image src="/better-disc.svg" alt="" fill />
                <Image src="/better-icon1.svg" alt="" width={42} height={42} className="relative z-10" />
              </div>
              <div>
                <p className="text-[#1b2845] text-[12px] font-medium tracking-[3.2px]">PEOPLE</p>
                <p className="text-[#505663] text-[15px] leading-[25px] mt-2">A safe, respectful<br/>and empowering<br/>work environment.</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-[205px] bg-[#baa192]/35" />

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="relative w-[82px] h-[82px] flex items-center justify-center">
                <Image src="/better-disc.svg" alt="" fill />
                <Image src="/better-icon2.svg" alt="" width={42} height={42} className="relative z-10" />
              </div>
              <div>
                <p className="text-[#1b2845] text-[12px] font-medium tracking-[3.2px]">PRODUCTS</p>
                <p className="text-[#505663] text-[15px] leading-[25px] mt-2">Consistent quality<br/>through responsible<br/>practices.</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-[205px] bg-[#baa192]/35" />

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="relative w-[82px] h-[82px] flex items-center justify-center">
                <Image src="/better-disc.svg" alt="" fill />
                <Image src="/better-icon3.svg" alt="" width={42} height={42} className="relative z-10" />
              </div>
              <div>
                <p className="text-[#1b2845] text-[12px] font-medium tracking-[3.2px]">PLANET</p>
                <p className="text-[#505663] text-[15px] leading-[25px] mt-2">More conscious choices<br/>for a more sustainable<br/>future.</p>
              </div>
            </div>
          </div>

          <Button 
            href="/commitment" 
            variant="light"
            className="w-full sm:w-[280px] h-[52px] !border-[#9c5b49]/65 !text-[#1b2845] !justify-between !px-7 mt-12"
            icon={<span className="text-[18px]">→</span>}
          >
            OUR COMMITMENT
          </Button>
        </div>

        {/* Right side floating text - Desktop only */}
        <div className="hidden lg:flex flex-col absolute right-0 top-[83px] z-20 w-[130px] pr-[84px]">
          <div className="text-[#1b2845] text-[9.5px] font-medium tracking-[3px] leading-[20px]">
            <p>SMALL</p><p>CHOICES.</p><p>A BIGGER</p><p>TOMORROW.</p>
          </div>
          <div className="w-[48px] h-px bg-[#1b2845]/40 mt-4" />
        </div>

        {/* Right side image */}
        <div className="relative w-full h-[500px] lg:h-auto lg:absolute lg:right-0 lg:top-0 lg:w-[48%] lg:bottom-0">
          <Image src="/better-products-hero.png" alt="" fill className="object-cover" />
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[180px] bg-gradient-to-r from-[#f9f6f1] to-transparent" />
        </div>

      </div>

      {/* Footer Banner */}
      <div className="bg-[#f7f3ee] w-full">
        <div className="w-full container mx-auto py-12 lg:h-[163px] flex flex-col lg:flex-row gap-8 lg:gap-[60px] text-center lg:text-left items-center lg:justify-between">
          
          <div className="flex flex-col">
            <p className="text-[#1b2845] text-[34px] font-playfair lg:leading-none">E R I S H A</p>
            <p className="text-[#1b2845] text-[10px] font-medium tracking-[2.2px] lg:mt-2">I N T E R N A T I O N A L</p>
          </div>
          
          <div className="w-[70px] lg:w-px h-px lg:h-[70px] bg-[#baa192]/45 my-2 lg:my-0" />
          
          <div className="text-[#505663] text-[12px] font-medium tracking-[4px] leading-[28px] lg:flex-1">
            <p>BEAUTIFUL PRODUCTS.</p>
            <p>BRIGHTER POSSIBILITIES.</p>
          </div>
          
          <div className="w-[48px] lg:w-[48px] h-px lg:h-px bg-[#1b2845]/35 my-2 lg:my-0 lg:ml-auto" />

          <div className="text-[#505663] text-[9.5px] font-medium tracking-[2.9px] leading-[20px] lg:w-[140px]">
            <p>A MORE</p>
            <p>CONFIDENT</p>
            <p>TOMORROW</p>
          </div>

        </div>
      </div>
    </section>
  );
}

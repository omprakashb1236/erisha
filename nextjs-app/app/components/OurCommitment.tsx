import Image from "next/image";
import Button from "./Button";

export default function OurCommitment() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f9f5ef]">
      
      {/* Main Content Area */}
      <div className="w-full container flex flex-col pt-12 lg:pt-[40px]">
        
        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row px-6 lg:px-[70px] justify-between gap-12 lg:gap-8">
          {/* Left Intro */}
          <div className="flex flex-col lg:mt-8 flex-1 max-w-[520px]">
            <p className="text-[#965745] text-[11px] font-medium tracking-[3.4px] leading-[16px] mb-4">OUR COMMITMENT</p>
            <div className="w-[48px] h-px bg-[#965745]/55 mb-8" />
            
            <h2 className="text-[#1b2845] font-playfair leading-none mb-6 text-5xl lg:text-[70px]">
              <span className="block mb-2 lg:mb-0">Quality in</span>
              <span className="block text-[#965745] text-5xl lg:text-[62px] font-extrabold italic">every detail.</span>
            </h2>
            
            <p className="text-[#4a505e] text-[15px] leading-[24px] lg:mt-16">
              We combine craftsmanship, responsible practices and rigorous quality control to deliver lingerie that looks beautiful, feels exceptional and lasts.
            </p>
          </div>

          {/* Right Features */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 lg:gap-0 lg:mt-[100px] flex-1 justify-end max-w-[650px]">
            <div className="flex gap-4 items-start sm:w-[45%] lg:w-auto lg:flex-col lg:items-center lg:flex-1">
              <div className="w-[42px] h-[42px] relative shrink-0"><Image src="/footer-icon0.svg" alt="" fill /></div>
              <div className="lg:text-center lg:mt-4">
                <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] leading-[16px]">SUPERIOR<br/>CRAFTSMANSHIP</p>
                <p className="text-[#4a505e] text-[12.5px] leading-[19px] mt-2 lg:mt-4">Skilled people.<br/>Thoughtful construction.</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-[142px] bg-[#b89e8f]/35 mx-6" />

            <div className="flex gap-4 items-start sm:w-[45%] lg:w-auto lg:flex-col lg:items-center lg:flex-1">
              <div className="w-[42px] h-[42px] relative shrink-0"><Image src="/footer-icon1.svg" alt="" fill /></div>
              <div className="lg:text-center lg:mt-4">
                <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] leading-[16px]">RESPONSIBLE<br/>MANUFACTURING</p>
                <p className="text-[#4a505e] text-[12.5px] leading-[19px] mt-2 lg:mt-4">People, products<br/>and planet in balance.</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-[142px] bg-[#b89e8f]/35 mx-6" />

            <div className="flex gap-4 items-start sm:w-[45%] lg:w-auto lg:flex-col lg:items-center lg:flex-1">
              <div className="w-[42px] h-[42px] relative shrink-0"><Image src="/footer-icon2.svg" alt="" fill /></div>
              <div className="lg:text-center lg:mt-4">
                <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] leading-[16px]">RIGOROUS<br/>QUALITY CONTROL</p>
                <p className="text-[#4a505e] text-[12.5px] leading-[19px] mt-2 lg:mt-4">Consistent quality<br/>at every stage.</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-[142px] bg-[#b89e8f]/35 mx-6" />

            <div className="flex gap-4 items-start sm:w-[45%] lg:w-auto lg:flex-col lg:items-center lg:flex-1">
              <div className="w-[42px] h-[42px] relative shrink-0"><Image src="/footer-icon3.svg" alt="" fill /></div>
              <div className="lg:text-center lg:mt-4">
                <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] leading-[16px]">A MORE<br/>SUSTAINABLE FUTURE</p>
                <p className="text-[#4a505e] text-[12.5px] leading-[19px] mt-2 lg:mt-4">Conscious choices<br/>for lasting impact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop floating text detail right top */}
        <div className="hidden lg:flex flex-col absolute right-[70px] top-[61px] w-[150px] items-end">
          <div className="text-[#4a505e] text-[9.2px] font-medium tracking-[2.3px] leading-[17px] text-right">
            <p>BETTER PRODUCTS.</p><p>A BRIGHTER TOMORROW.</p>
          </div>
          <div className="w-[42px] h-px bg-[#965745]/45 mt-4" />
        </div>

        {/* Gallery & Lower Section */}
        <div className="px-6 lg:px-[56px] py-12 lg:pt-[100px] flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-8 relative z-10">
          
          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-6 flex-1">
            <div className="flex flex-col gap-3 lg:gap-6 w-full lg:w-[203px]">
              <div className="relative w-full aspect-[2/3] lg:h-[293px] rounded-sm overflow-hidden"><Image src="/commitment-photo1.png" alt="" fill className="object-cover" /></div>
              <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] lg:pl-1">CRAFTED BY EXPERTS</p>
            </div>
            
            <div className="flex flex-col gap-3 lg:gap-6 w-full lg:w-[203px] mt-8 lg:mt-0">
              <div className="relative w-full aspect-[2/3] lg:h-[293px] rounded-sm overflow-hidden"><Image src="/commitment-photo2.png" alt="" fill className="object-cover" /></div>
              <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] lg:pl-1">PREMIUM MATERIALS</p>
            </div>
            
            <div className="flex flex-col gap-3 lg:gap-6 w-full lg:w-[204px]">
              <div className="relative w-full aspect-[2/3] lg:h-[293px] rounded-sm overflow-hidden"><Image src="/commitment-photo3.png" alt="" fill className="object-cover" /></div>
              <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] lg:pl-1">CONSISTENT QUALITY</p>
            </div>
            
            <div className="flex flex-col gap-3 lg:gap-6 w-full lg:w-[203px] mt-8 lg:mt-0">
              <div className="relative w-full aspect-[2/3] lg:h-[293px] rounded-sm overflow-hidden"><Image src="/commitment-photo4.png" alt="" fill className="object-cover" /></div>
              <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.2px] lg:pl-1">READY FOR THE WORLD</p>
            </div>
          </div>

          <div className="flex flex-col max-w-[260px] lg:w-[260px] lg:pb-[18px]">
            <div className="w-[42px] h-px bg-[#b89e8f]/55 mb-6" />
            <div className="font-playfair leading-none text-[39px] text-[#1b2845] mb-6">
              <p>Responsible</p>
              <p>today. Beautiful</p>
              <p className="font-extrabold italic text-[33px]">tomorrow.</p>
            </div>
            <div className="text-[#4a505e] text-[13.5px] leading-[20px] mb-10">
              <p>We work towards more responsible sourcing, efficient processes and long-term partnerships — because exceptional products should also make a positive difference.</p>
            </div>
            <Button 
              href="/sustainability" 
              variant="light"
              className="w-[180px] h-[42px] !border-[#965745]/60 !text-[#1b2845] !justify-between !px-[22px]"
              icon={<span className="text-[20px]">→</span>}
            >
              Our Approach
            </Button>
          </div>

        </div>

      </div>

      {/* Decorative Right Graphic Desktop */}
      <div className="hidden lg:block absolute right-[20px] xl:right-0 top-[160px] w-[206px] h-[562px]">
        <Image src="/commitment-detail.png" alt="" fill className="object-cover object-left" />
        <div className="absolute right-[50px] top-[447px] text-[#faf6f2] text-[9.1px] font-medium tracking-[2.6px] leading-[18px]">
          <p>DETAILS</p><p>MAKE A</p><p>DIFFERENCE</p>
        </div>
        <div className="absolute right-[50px] top-[523px] w-[42px] h-px bg-[#faf6f2]/60" />
      </div>

      {/* Metrics Banner */}
      <div className="bg-[#f7f1eb] w-full">
        <div className="w-full container py-12 lg:py-[35px] flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between items-center text-center">
          
          <div className="flex flex-col items-center">
            <p className="text-[#1b2845] text-[42px] lg:text-[38px] font-playfair leading-[40px]">100%</p>
            <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.4px] mt-2 lg:mt-4">QUALITY CHECKS</p>
            <p className="text-[#4a505e] text-[12px] mt-1 lg:mt-2">At every stage</p>
          </div>
          
          <div className="hidden lg:block w-px h-[82px] bg-[#b89e8f]/35" />

          <div className="flex flex-col items-center border-t lg:border-none border-[#b89e8f]/35 pt-8 lg:pt-0">
            <p className="text-[#1b2845] text-[42px] lg:text-[38px] font-playfair leading-[40px]">30%</p>
            <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.4px] mt-2 lg:mt-4">REDUCTION IN WASTE</p>
            <p className="text-[#4a505e] text-[12px] mt-1 lg:mt-2">Through efficient production</p>
          </div>
          
          <div className="hidden lg:block w-px h-[82px] bg-[#b89e8f]/35" />

          <div className="flex flex-col items-center border-t lg:border-none border-[#b89e8f]/35 pt-8 lg:pt-0">
            <p className="text-[#1b2845] text-[42px] lg:text-[38px] font-playfair leading-[40px]">100+</p>
            <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.4px] mt-2 lg:mt-4">SKILLED PROFESSIONALS</p>
            <p className="text-[#4a505e] text-[12px] mt-1 lg:mt-2">Across design and production</p>
          </div>
          
          <div className="hidden lg:block w-px h-[82px] bg-[#b89e8f]/35" />

          <div className="flex flex-col items-center border-t lg:border-none border-[#b89e8f]/35 pt-8 lg:pt-0">
            <p className="text-[#1b2845] text-[42px] lg:text-[36px] font-playfair leading-[40px]">GLOBAL</p>
            <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.4px] mt-2 lg:mt-4">COMPLIANCE STANDARDS</p>
            <p className="text-[#4a505e] text-[12px] mt-1 lg:mt-2">For peace of mind</p>
          </div>

          <div className="hidden lg:flex items-center gap-4 border-l border-[#b89e8f]/35 pl-[80px] ml-[40px]">
             <div className="w-[62px] h-[62px] relative"><Image src="/commitment-leaf.svg" alt="" fill /></div>
             <div className="text-left font-medium text-[#4a505e] text-[8.5px] tracking-[2.5px] leading-[15px]">
               <p>A MORE</p><p>CONSCIOUS</p><p>TOMORROW</p>
             </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-[#b17c71] w-full">
        <div className="w-full container py-8 lg:py-10 flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center text-center">
          <p className="text-[#faf6f2] text-[9.2px] font-medium tracking-[4px]">BEAUTIFUL PRODUCTS. BRIGHTER POSSIBILITIES.</p>
          <div className="w-[44px] lg:w-px h-px lg:h-[44px] bg-[#faf6f2]/40" />
          <p className="text-[#faf6f2] text-[9.2px] font-medium tracking-[4px]">PEOPLE / PLANET / PROGRESS</p>
        </div>
      </div>

    </section>
  );
}

import Image from "next/image";

export default function PrivateLabel() {
  return (
    <section className="w-full bg-[#fefaf6] relative overflow-hidden flex flex-col lg:flex-row lg:h-[760px]">
      
      {/* Left Image Bleed */}
      {/* Takes 43vw on desktop to perfectly match the 620px width on a 1440px screen layout */}
      <div className="relative w-full h-[400px] lg:absolute lg:left-0 lg:top-0 lg:w-[43vw] lg:max-w-[620px] lg:h-[760px] shrink-0">
        <Image 
          src="/private-label.png" 
          alt="Private Label" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row lg:justify-end relative z-10 py-[60px] lg:py-[0]">
        
        {/* Text Block */}
        <div className="w-full lg:w-[600px] flex flex-col lg:pt-[75px]">
          
          {/* Eyebrow */}
          <p className="text-[#b86e58] text-[10px] font-medium tracking-[2.7px] leading-[16px] uppercase mb-[15px]">
            PRIVATE LABEL
          </p>
          
          <div className="w-[44px] h-px bg-[#b86e58]/55 mb-[28px]" />
          
          {/* Headline */}
          <h2 className="font-playfair text-[#1b2845] text-4xl lg:text-[52px] leading-[1.1] lg:leading-[57px] mb-[29px] max-w-[600px]">
            <span className="block">Made for your brand,</span>
            <span className="block">not ours.</span>
          </h2>
          
          {/* Pull Quote */}
          <p className="font-playfair font-extrabold italic text-[#b86e58] text-[22px] lg:text-[27px] leading-[1.3] lg:leading-[34px] mb-[43px] max-w-[560px]">
            A product can be developed as deeply as the brief requires.
          </p>
          
          {/* Description */}
          <p className="text-[#4a505e] text-[14px] leading-[1.6] lg:leading-[24px] mb-[50px] lg:mb-[73px] max-w-[545px]">
            From adapting an existing development base to building a new style around your reference, we can support the details that make the product distinctly yours.
          </p>
          
          {/* 2x2 Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[45px] gap-y-[40px] lg:gap-y-[52px]">
            
            <div className="flex flex-col">
              <p className="text-[#b86e58] text-[9px] font-medium tracking-[1.5px] leading-[15px] uppercase mb-[13px]">
                PRODUCT & FIT
              </p>
              <p className="text-[#4a505e] text-[11.8px] leading-[19px]">
                Silhouette, sizing, pattern and construction.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-[#b86e58] text-[9px] font-medium tracking-[1.5px] leading-[15px] uppercase mb-[13px]">
                FABRIC & COLOUR
              </p>
              <p className="text-[#4a505e] text-[11.8px] leading-[19px]">
                Material direction, colourways, lace and trims.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-[#b86e58] text-[9px] font-medium tracking-[1.5px] leading-[15px] uppercase mb-[13px]">
                BRANDING
              </p>
              <p className="text-[#4a505e] text-[11.8px] leading-[19px]">
                Labels, elastics, hardware and brand applications.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-[#b86e58] text-[9px] font-medium tracking-[1.5px] leading-[15px] uppercase mb-[13px]">
                PACKAGING
              </p>
              <p className="text-[#4a505e] text-[11.8px] leading-[19px]">
                Folding, presentation and private-label packaging.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

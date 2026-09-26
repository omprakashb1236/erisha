export default function OurStory() {
  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden py-[80px] lg:py-[100px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
        
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-16">
          
          {/* Left Block */}
          <div className="flex flex-col w-full lg:w-[560px]">
            <p className="text-[#b86e58] text-[10px] lg:text-[11px] font-medium tracking-[2px] lg:tracking-[3.1px] uppercase mb-[18px]">
              OUR STORY
            </p>
            <div className="w-[46px] h-px bg-[#b86e58]/55 mb-[38px]" />
            
            <h2 className="font-playfair text-[#1b2845] text-4xl lg:text-[56px] leading-[1.1] lg:leading-[60px] mb-[40px] lg:mb-[85px]">
              <span className="block">A clear vision,</span>
              <span className="block">grown carefully.</span>
            </h2>
            
            <p className="font-playfair font-extrabold italic text-[#b86e58] text-[26px] lg:text-[31px] leading-[1.3] lg:leading-[39px]">
              From a focused beginning to a trusted manufacturing partner.
            </p>
          </div>

          {/* Right Block (Top aligned with the left headline) */}
          <div className="flex flex-col w-full lg:w-[570px] lg:mt-[73px]">
            <p className="text-[#4a505e] text-[14px] lg:text-[15.5px] leading-[1.6] lg:leading-[27px] mb-[30px] lg:mb-[50px]">
              Erisha International was founded in 2018 with a simple belief: better products come from manufacturers who care about the idea, not just the order. Since then, we have grown by staying close to the product and close to our partners — connecting development, sourcing, production and quality under one accountable team.
            </p>
            <p className="text-[#4a505e] text-[14px] lg:text-[15.5px] leading-[1.6] lg:leading-[27px]">
              Along the way, we have supported brands including Clovia and Reliance, together with other private-label partners who value consistency, thoughtful development and dependable execution.
            </p>
          </div>

        </div>

        {/* Bottom Timeline Section */}
        <div className="flex flex-col mt-[80px] lg:mt-[100px]">
          {/* Full Width Divider */}
          <div className="w-full h-px bg-[#d2bfaf]/50 mb-[40px] lg:mb-[52px]" />
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            
            <div className="flex flex-col">
              <p className="font-playfair text-[#b86e58] text-[36px] lg:text-[43px] leading-none lg:leading-[48px] mb-[10px]">
                2018
              </p>
              <p className="text-[#4a505e] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase">
                FOUNDED WITH A CLEAR VISION
              </p>
            </div>
            
            <div className="flex flex-col">
              <p className="font-playfair text-[#1b2845] text-[36px] lg:text-[43px] leading-none lg:leading-[48px] mb-[10px]">
                TODAY
              </p>
              <p className="text-[#4a505e] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase">
                A TRUSTED MANUFACTURING PARTNER
              </p>
            </div>
            
            <div className="flex flex-col lg:mr-[20px]">
              <p className="font-playfair text-[#1b2845] text-[28px] lg:text-[32px] leading-[1.2] lg:leading-[40px] mb-[10px]">
                CLOVIA & RELIANCE
              </p>
              <p className="text-[#4a505e] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase">
                AND OTHER PRIVATE-LABEL PARTNERS
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

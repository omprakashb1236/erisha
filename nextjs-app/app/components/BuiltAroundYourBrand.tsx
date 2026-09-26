export default function BuiltAroundYourBrand() {
  return (
    <section className="w-full bg-[#1b2845] overflow-hidden py-[80px] lg:pt-[70px] lg:pb-[90px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col relative">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-16 lg:gap-0">
          
          {/* Left Block */}
          <div className="flex flex-col w-full lg:w-[560px] shrink-0">
            <p className="text-[#e5a191] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase mb-[37px]">
              MANUFACTURING, BUILT AROUND YOUR BRAND
            </p>
            
            <h2 className="font-playfair text-[#fefaf6] text-4xl lg:text-[51px] leading-[1.1] lg:leading-[56px] mb-[40px]">
              <span className="block">Flexible where it matters.</span>
              <span className="block">Structured where it counts.</span>
            </h2>
            
            <p className="text-[#f9f6f1]/78 text-[14px] leading-[1.6] lg:leading-[24px]">
              We adapt development and manufacturing to the needs of each programme while keeping quality, accountability and communication consistent.
            </p>
          </div>

          {/* Right Block (4 Columns) */}
          <div className="flex flex-col lg:mt-[75px] w-full lg:w-[705px] shrink-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-[35px]">
              
              <div className="flex flex-col w-full lg:w-[150px]">
                <p className="text-[#e5a191] text-[8.6px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[25px]">
                  LOW MOQ
                </p>
                <p className="text-[#f9f6f1]/78 text-[11.2px] leading-[1.6] lg:leading-[18px]">
                  Practical starting volumes for selected developments.
                </p>
              </div>

              <div className="flex flex-col w-full lg:w-[150px]">
                <p className="text-[#e5a191] text-[8.6px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[25px]">
                  FLEXIBLE DEVELOPMENT
                </p>
                <p className="text-[#f9f6f1]/78 text-[11.2px] leading-[1.6] lg:leading-[18px]">
                  A development route shaped around where your product starts.
                </p>
              </div>

              <div className="flex flex-col w-full lg:w-[150px]">
                <p className="text-[#e5a191] text-[8.6px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[25px]">
                  MULTI-CATEGORY EXPERTISE
                </p>
                <p className="text-[#f9f6f1]/78 text-[11.2px] leading-[1.6] lg:leading-[18px]">
                  Intimatewear and soft-apparel capability across collections.
                </p>
              </div>

              <div className="flex flex-col w-full lg:w-[150px]">
                <p className="text-[#e5a191] text-[8.6px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[25px]">
                  GLOBAL SUPPLY
                </p>
                <p className="text-[#f9f6f1]/78 text-[11.2px] leading-[1.6] lg:leading-[18px]">
                  Built to support brands across markets and programmes.
                </p>
              </div>

            </div>
          </div>
          
        </div>

        {/* Bottom Caption */}
        {/* Margin top offset is exactly calculated to match the 128px distance from the end of the left paragraph */}
        <p className="text-[#f9f6f1]/78 text-[9px] font-medium tracking-[1.9px] leading-[15px] uppercase whitespace-pre-wrap mt-[60px] lg:mt-[128px]">
          YOUR PRODUCT  /  YOUR STANDARDS  /  YOUR BRAND
        </p>
        
      </div>
    </section>
  );
}

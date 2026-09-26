export default function ClosingStatement() {
  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden py-[60px] lg:pt-[58px] lg:pb-[100px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
        
        {/* Eyebrow */}
        <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2.4px] leading-[16px] uppercase mb-[24px] lg:mb-[34px]">
          A MORE CONSCIOUS TOMORROW
        </p>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 lg:gap-10">
          
          {/* Headline */}
          <h2 className="font-playfair text-[#1b2845] text-3xl lg:text-[43px] leading-[1.2] lg:leading-[49px] w-full lg:max-w-[760px]">
            Progress is built one decision at a time.
          </h2>
          
          {/* Paragraph (Offset down slightly to match the exact 112px Y-coordinate from Figma) */}
          <p className="text-[#4a505e] text-[14px] lg:text-[14.2px] leading-[1.6] lg:leading-[24px] w-full lg:max-w-[460px] lg:mt-[4px]">
            We will keep improving the way we source, make, check and collaborate — with the same care we bring to every product.
          </p>
          
        </div>

      </div>
    </section>
  );
}

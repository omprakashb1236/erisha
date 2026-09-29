import Link from "next/link";
import Button from "../Button";
import Image from "next/image";

export default function CatalogueCta({ catalogue }: any) {
  return (
    <section className="w-full bg-[#f9f2ea] py-[60px] lg:py-[110px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-[60px]">
        
        {/* Left Side: Headings */}
        <div className="flex flex-col lg:max-w-[650px]">
          <p className="font-medium text-[10px] text-[#b86e58] tracking-[2.4px] uppercase mb-4 lg:mb-6">
            {catalogue?.ctaEyebrow || "LOOKING FOR SOMETHING SPECIFIC?"}
          </p>
          <h2 className="font-playfair text-[#1b2845] text-4xl lg:text-[42px] leading-[1.1] lg:leading-[48px]">
            <span className="block mb-1">{catalogue?.ctaHeadingLine1 || ""}</span>
            <span className="block">{catalogue?.ctaHeadingLine2 || ""}</span>
          </h2>
        </div>

        {/* Right Side: Text & Button */}
        <div className="flex flex-col lg:w-[450px] shrink-0 lg:pt-[10px]">
          <p className="text-[#4a505e] text-[14px] leading-[23px] mb-8 lg:mb-[40px]">
            {catalogue?.ctaDescription || ""}
          </p>
          <Button 
            href={catalogue?.ctaButtonLink || "/contact"} 
            className="w-[205px] !h-[46px] justify-between px-[26px] hover:bg-[#b86e58] group"
            icon={<span className="text-[17px] font-medium leading-[21px] group-hover:translate-x-1 transition-transform">→</span>}
          >
            {catalogue?.ctaButtonText || "Start a Project"}
          </Button>
        </div>

      </div>
    </section>
  );
}

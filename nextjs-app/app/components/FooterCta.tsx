import Button from "./Button";
import { FooterCta } from "@/sanity.types";

type FooterCtaProps = {
  block: FooterCta;
};

export default function FooterCtaComp({ block }: FooterCtaProps) {
  const eyebrow = block?.ctaEyebrow || "";
  const heading = block?.ctaHeading || "";
  const description = block?.ctaDescription || "";
  const buttonText = block?.ctaButtonText || "";
  const buttonLink = block?.ctaButtonLink || "/contact";

  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] py-[60px] lg:py-[105px]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-start gap-10 lg:gap-10">
          
          {/* Left Block */}
          <div className="flex flex-col lg:w-[650px] shrink-0">
            <p className="font-['DM_Sans'] text-[#b86e58] text-[9.8px] font-medium tracking-[2.3px] leading-[16px] uppercase mb-4 lg:mb-[30px]">
              {eyebrow}
            </p>
            <h2 className="font-playfair text-[#1b2845] text-[36px] lg:text-[43px] leading-[1.15] lg:leading-[49px]">
              {heading}
            </h2>
          </div>

          {/* Right Block */}
          <div className="flex flex-col lg:w-[430px] shrink-0 lg:mt-[3px]">
            <p className="font-['DM_Sans'] text-[#4a505e] text-[13.5px] leading-[22px] mb-8 lg:mb-[44px]">
              {description}
            </p>
            <Button
              href={buttonLink}
              className="w-[205px] !h-[46px] rounded-[23px] bg-[#1b2845] text-[#fefaf6] hover:bg-[#b86e58] px-[26px] justify-between group"
              icon={<span className="text-[17px] leading-[21px] group-hover:translate-x-1 transition-transform">→</span>}
            >
              <span className="font-['DM_Sans'] font-medium text-[12px] leading-[18px]">
                {buttonText}
              </span>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

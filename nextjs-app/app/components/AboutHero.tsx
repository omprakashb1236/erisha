import Image from "next/image";
import Button from "./Button";

export default function AboutHero() {
  return (
    <section className="w-full bg-[#fefaf6] overflow-hidden pt-[100px] lg:pt-[200px] pb-[80px] lg:pb-[150px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-0 relative">
        
        {/* Left Column (Content) */}
        <div className="flex flex-col w-full lg:w-[690px] shrink-0">
          
          <p className="text-[#b86e58] text-[10px] lg:text-[11px] font-medium tracking-[2px] lg:tracking-[3.1px] uppercase mb-[18px]">
            ABOUT ERISHA
          </p>
          <div className="w-[46px] h-px bg-[#b86e58]/55 mb-8 lg:mb-[40px]" />
          
          <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[66px] leading-[1.1] lg:leading-[70px] mb-10 lg:mb-[90px]">
            <span className="block">Founded in 2018.</span>
            <span className="block">Built to make thoughtfully.</span>
          </h1>
          
          <p className="font-playfair font-extrabold italic text-[#b86e58] text-[26px] lg:text-[35px] leading-[1.3] lg:leading-[44px] mb-8 lg:mb-[60px] lg:max-w-[660px]">
            A manufacturing company shaped by product, people and partnership.
          </p>
          
          <p className="text-[#4a505e] text-[14px] lg:text-[15.5px] leading-[1.6] lg:leading-[26px] mb-10 lg:mb-[110px] lg:max-w-[590px]">
            Erisha International is an intimatewear and apparel manufacturing partner. We combine product understanding, development expertise and dependable execution to help brands turn ideas into beautifully made products.
          </p>
          
          <Button 
            href="/capabilities" 
            className="w-full max-w-[190px] h-[48px] rounded-[24px]"
            icon={<span className="text-[18px]">→</span>}
          >
            Explore Capabilities
          </Button>

        </div>

        {/* Desktop Divider Line */}
        <div className="hidden lg:block absolute left-[840px] top-[-35px] w-px h-[580px] bg-[#d2bfaf]/45" />

        {/* Right Column (Image & Caption) */}
        <div className="flex flex-col w-full lg:w-[470px] shrink-0 lg:mt-[-50px]">
          <div className="relative w-full aspect-[4/5] lg:h-[610px] mb-6">
            <Image src="/about-hero.png" alt="Company Image" fill className="object-cover" />
          </div>
          <p className="text-[#4a505e] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase whitespace-pre-wrap">
            DESIGN  /  DEVELOPMENT  /  MAKING  /  PARTNERSHIP
          </p>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

// This is the wave SVG mapped from the design
const WaveLines = () => (
  <svg width="1456" height="150" viewBox="0 0 1456 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
    <path d="M-50 75C150 75 250 140 450 140C650 140 750 10 950 10C1150 10 1250 75 1450 75C1650 75 1750 140 1950 140" stroke="#B86E58" strokeWidth="0.5" />
    <path d="M-50 60C150 60 250 125 450 125C650 125 750 -5 950 -5C1150 -5 1250 60 1450 60C1650 60 1750 125 1950 125" stroke="#B86E58" strokeWidth="0.5" />
    <path d="M-50 45C150 45 250 110 450 110C650 110 750 -20 950 -20C1150 -20 1250 45 1450 45C1650 45 1750 110 1950 110" stroke="#B86E58" strokeWidth="0.5" />
    <path d="M-50 90C150 90 250 155 450 155C650 155 750 25 950 25C1150 25 1250 90 1450 90C1650 90 1750 155 1950 155" stroke="#B86E58" strokeWidth="0.5" />
  </svg>
);

export default function CatalogueHero({ catalogue }: { catalogue: any }) {
  const imageUrl = catalogue?.heroImage ? urlForImage(catalogue.heroImage)?.url() : "/catalogue-hero-placeholder.png";

  return (
    <section className="relative pt-[190px] w-full bg-[#fefaf6] flex flex-col items-center overflow-hidden">
      
      {/* Background Image Container */}
      <div className="relative w-full h-[530px] lg:h-[600px]">
        <Image 
          src={imageUrl} 
          alt="Catalogue Hero" 
          fill 
          className="object-cover pointer-events-none"
          priority
        />
        
        {/* Left Veil Overlay */}
        <div className="absolute top-0 left-0 h-full w-full lg:w-[60%] xl:w-[690px] bg-[#fefaf6]/90 lg:bg-[#fefaf6]/[0.88]" />

        {/* Content Container positioned above the image */}
        <div className="absolute inset-0 w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col justify-center">
          
          <div className="relative z-10 w-full lg:w-[570px] mt-10 lg:mt-0">
            {/* Eyebrow */}
            <p className="font-dm text-[#b86e58] text-[9px] lg:text-[10.5px] font-medium tracking-[2.9px] uppercase mb-4 lg:mb-6">
              {catalogue?.eyebrow || "PRODUCT CATALOGUE"}
            </p>
            
            {/* Main Heading */}
            <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[61px] leading-[1.1] lg:leading-[65px] mb-8 lg:mb-12">
              <span className="block">A closer look</span>
              <span className="block">at what we make.</span>
            </h1>

            {/* Sub-heading Italic */}
            <p className="font-playfair text-[#b86e58] text-2xl lg:text-[29px] italic font-extrabold leading-[1.2] lg:leading-[37px] mb-6">
              {catalogue?.subtitle || "Developed for brands. Made with care."}
            </p>

            {/* Body Description */}
            <p className="font-dm text-[#4a505e] text-sm lg:text-[14.5px] leading-[1.6] lg:leading-[24px] mb-12 lg:mb-[60px] max-w-[500px]">
              {catalogue?.description || "Browse our core product families across intimatewear and soft apparel. Each category can be developed to your fit, fabrication, construction and private-label requirements."}
            </p>

            {/* Footer tags */}
            <p className="font-dm text-[#1b2845] text-[8.5px] lg:text-[9px] font-medium tracking-[1.8px] leading-[15px] uppercase">
              {catalogue?.bottomTags || "PRIVATE LABEL  /  DEVELOPMENT  /  MANUFACTURING"}
            </p>
          </div>

        </div>
      </div>

      {/* Decorative Wave Lines spanning bottom */}
      <div className="relative w-full h-[100px] lg:h-[150px] -mt-[50px] lg:-mt-[75px] z-0 overflow-hidden mix-blend-multiply opacity-50 lg:opacity-100">
        <WaveLines />
      </div>

    </section>
  );
}

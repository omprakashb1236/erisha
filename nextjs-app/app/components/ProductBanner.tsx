import Image from "next/image";

interface ProductBannerProps {
  eyebrow?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  subhead?: string;
  paragraph?: string;
  caption?: string;
  imageSrc?: string;
  overlayTextLine1?: string;
  overlayTextLine2?: string;
  overlayTextLine3?: string;
  overlayTextLine4?: string;
  imageInsideContainer?: boolean;
  imageAlign?: "left" | "right";
  backgroundColor?: string;
}

export default function ProductBanner({
  eyebrow = "SUSTAINABILITY",
  headlineLine1 = "Better products.",
  headlineLine2 = "A brighter tomorrow.",
  subhead = "Responsibility belongs in the way a product is made.",
  paragraph = "We are committed to responsible manufacturing, conscious choices and lasting partnerships — bringing people, products and planet into the same conversation as quality, fit and execution.",
  caption = "PEOPLE  /  PRODUCTS  /  PLANET  /  PROGRESS",
  imageSrc = "/product-banner-image.png",
  overlayTextLine1 = "SMALL",
  overlayTextLine2 = "CHOICES.",
  overlayTextLine3 = "A BIGGER",
  overlayTextLine4 = "TOMORROW.",
  imageInsideContainer = false,
  imageAlign = "right",
  backgroundColor = "#fefaf6",
}: ProductBannerProps) {
  
  return (
    <section 
      className="w-full relative overflow-hidden pt-[80px] lg:pt-[245px] pb-[80px] lg:pb-[150px] min-h-[950px]"
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] relative z-10 flex flex-col lg:flex-row">
        
        {/* Main Text Content */}
        {/* lg:ml-auto pushes the text column to the right when the image is aligned left */}
        <div className={`flex flex-col w-full lg:w-[650px] relative z-20 ${imageAlign === "left" ? "lg:ml-auto" : ""}`}>
          <p className="text-[#b86e58] text-[10px] lg:text-[10.5px] font-medium tracking-[2px] lg:tracking-[2.9px] uppercase mb-[18px]">
            {eyebrow}
          </p>
          <div className="w-[44px] h-px bg-[#b86e58]/52 mb-[28px]" />
          
          <h2 className="font-playfair text-[#1b2845] text-4xl lg:text-[67px] leading-[1.1] lg:leading-[70px] mb-[25px]">
            {headlineLine1 && <span className="block">{headlineLine1}</span>}
            {headlineLine2 && <span className="block">{headlineLine2}</span>}
          </h2>
          
          <p className="font-playfair font-extrabold italic text-[#b86e58] text-[24px] lg:text-[33px] leading-[1.3] lg:leading-[42px] mb-[14px] lg:max-w-[610px]">
            {subhead}
          </p>
          
          <p className="text-[#4a505e] text-[14px] lg:text-[15.5px] leading-[1.6] lg:leading-[26px] mb-[50px] lg:mb-[97px] lg:max-w-[585px]">
            {paragraph}
          </p>
          
          <p className="text-[#1b2845] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase whitespace-pre-wrap lg:max-w-[640px]">
            {caption}
          </p>
        </div>

        {/* Desktop Image Placement */}
        {/* We use an absolute div to place the image under/beside the text. 
            If it bleeds out (imageInsideContainer=false), it stretches 100vw but is cropped by the section's overflow-hidden. */}
        <div 
          className={`hidden lg:block absolute top-[-55px] h-[650px] z-10 ${
            imageAlign === "right" 
              ? (imageInsideContainer ? 'left-[800px] w-[656px]' : 'left-[800px] w-[100vw]')
              : (imageInsideContainer ? 'left-[0px] w-[656px]' : 'right-[800px] w-[100vw]')
          }`}
        >
          <Image src={imageSrc} alt="Banner Graphic" fill className="object-cover" />
        </div>

        {/* Desktop Overlay Text */}
        {/* Positioned relative to the 1456px container so it stays in the exact right spot even if the image bleeds offscreen */}
        <div 
          className={`hidden lg:block absolute top-0 z-20 text-[#1b2845] text-[10px] font-medium tracking-[2.3px] leading-[19px] ${
            imageAlign === "right" ? 'left-[1210px]' : 'left-[410px]'
          }`}
        >
          <p>{overlayTextLine1}</p>
          <p>{overlayTextLine2}</p>
          <p>{overlayTextLine3}</p>
          <p>{overlayTextLine4}</p>
        </div>

      </div>

      {/* Mobile Image (Visible on smaller screens) */}
      <div className="block lg:hidden w-full h-[400px] sm:h-[500px] relative mt-12 z-10">
        <Image src={imageSrc} alt="Banner Graphic" fill className="object-cover" />
        <div className="absolute right-6 bottom-6 text-[#1b2845] text-[10px] font-medium tracking-[2.3px] leading-[19px] bg-white/80 p-4 rounded-sm">
           <p>{overlayTextLine1}</p>
           <p>{overlayTextLine2}</p>
           <p>{overlayTextLine3}</p>
           <p>{overlayTextLine4}</p>
        </div>
      </div>

    </section>
  );
}

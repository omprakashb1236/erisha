import Image from "next/image";

export default function CoreCapabilities() {
  const capabilities = [
    {
      id: "01",
      title: "Product\nDevelopment",
      desc: "Ideas translated into commercially considered products, with category, customer and manufacturing realities kept in view.",
      imgSrc: "/capabilities-1.png"
    },
    {
      id: "02",
      title: "Fabric & Trim\nSourcing",
      desc: "Materials selected around handfeel, performance, construction, cost and the purpose of the final product.",
      imgSrc: "/capabilities-2.png"
    },
    {
      id: "03",
      title: "Sampling &\nPrototyping",
      desc: "Concepts refined through physical development, review and purposeful iteration before bulk manufacturing.",
      imgSrc: "/capabilities-3.png"
    },
    {
      id: "04",
      title: "Pattern, Fit &\nConstruction",
      desc: "Proportion, support, movement and comfort resolved together through pattern and technical development.",
      imgSrc: "/capabilities-4.png"
    },
    {
      id: "05",
      title: "Quality Control",
      desc: "Consistency checked throughout development and production, not simply at the final inspection stage.",
      imgSrc: "/capabilities-5.png"
    },
    {
      id: "06",
      title: "Private Label\nManufacturing",
      desc: "Flexible manufacturing built around your collection, brand identity, volumes and repeat programme requirements.",
      imgSrc: "/capabilities-6.png"
    }
  ];

  return (
    <section className="w-full bg-[#f9f2ea] py-[80px] lg:pt-[100px] lg:pb-[120px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row lg:justify-between items-stretch gap-16 lg:gap-10">
        
        {/* Left Column (Sticky/Static Intro) */}
        <div className="flex flex-col w-full lg:w-[420px] shrink-0 justify-between">
          <div>
            <p className="text-[#b86e58] text-[10px] lg:text-[10.5px] font-medium tracking-[2.9px] leading-[17px] uppercase mb-[14px]">
              WHAT WE DO
            </p>
            <div className="w-[44px] h-px bg-[#b86e58]/52 mb-[28px]" />
            
            <h2 className="font-playfair text-[#1b2845] text-4xl lg:text-[52px] leading-[1.1] lg:leading-[58px] mb-[30px] lg:mb-[40px] pr-8">
              Expertise where the product needs it.
            </h2>
            
            <p className="text-[#4a505e] text-[14px] lg:text-[14.5px] leading-[1.6] lg:leading-[24px]">
              Our capabilities are designed to stay connected. Development decisions inform materials, fit informs construction, and quality follows the product from sample to production.
            </p>
          </div>

          {/* Bottom Quote (Pushed to bottom on desktop to align with grid) */}
          <div className="mt-16 lg:mt-auto">
            <p className="font-playfair font-extrabold italic text-[#b86e58] text-[24px] lg:text-[28px] leading-[1.3] lg:leading-[34px]">
              One team carries context forward — so a material decision is not separated from fit, and fit is not separated from production.
            </p>
          </div>
        </div>

        {/* Right Column (Grid of Capabilities) */}
        <div className="flex flex-col w-full lg:w-[780px] shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[60px] lg:gap-y-[80px]">
            {capabilities.map((cap) => (
              <div key={cap.id} className="flex flex-row gap-5 lg:gap-6 items-start h-full">
                
                {/* Image */}
                <div className="relative w-[100px] lg:w-[120px] h-[140px] lg:h-[160px] shrink-0 rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-sm">
                  <Image src={cap.imgSrc} alt={cap.title.replace('\n', ' ')} fill className="object-cover" />
                </div>

                {/* Text Block & Divider */}
                {/* h-full ensures this column stretches to match the image height, letting mt-auto push the line down */}
                <div className="flex flex-col pt-1 w-full h-full relative">
                  <p className="text-[#b86e58] text-[9.5px] font-medium tracking-[1.5px] mb-[8px]">
                    {cap.id}
                  </p>
                  <h3 className="font-playfair text-[#1b2845] text-[20px] lg:text-[22px] leading-[1.2] lg:leading-[26px] mb-[12px] whitespace-pre-line">
                    {cap.title}
                  </h3>
                  <p className="text-[#4a505e] text-[10.5px] lg:text-[11px] leading-[1.6] lg:leading-[18px]">
                    {cap.desc}
                  </p>
                  
                  {/* Faint Underline anchored to the absolute bottom of the text column wrapper */}
                  <div className="mt-auto w-full h-px bg-[#d2bfaf]/60" />
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

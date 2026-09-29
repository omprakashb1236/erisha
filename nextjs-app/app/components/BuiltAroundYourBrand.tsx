import { BuiltAroundYourBrand } from "@/sanity.types";


type BuiltAroundYourBrandProps = {
  block: BuiltAroundYourBrand
  index: number
}

export default function BuiltAroundYourBrandComp({ block }: BuiltAroundYourBrandProps) {
  const defaultFeatures = [
    { title: "LOW MOQ", description: "Practical starting volumes for selected developments." },
  ];

  const features = block?.features || defaultFeatures;

  return (
    <section className="w-full bg-[#1b2845] overflow-hidden py-[80px] lg:pt-[70px] lg:pb-[90px]">
      <div className="w-full container flex flex-col relative">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-16 lg:gap-0">
          
          {/* Left Block */}
          <div className="flex flex-col w-full lg:w-[650px] shrink-0">
            <p className="text-[#e5a191] text-[9.5px] font-medium tracking-[2.1px] leading-[16px] uppercase mb-[37px]">
              {block?.eyebrow || "MANUFACTURING, BUILT AROUND YOUR BRAND"}
            </p>
            
            <h2 className="font-playfair text-[#fefaf6] text-4xl lg:text-[51px] leading-[1.1] lg:leading-[56px] mb-[40px]">
              <span className="block">{block?.headingLine1 || "Flexible where it matters."}</span>
              <span className="block">{block?.headingLine2 || "Structured where it counts."}</span>
            </h2>
            
            <p className="text-[#F9F6F1C7] text-[14px] leading-[1.6] lg:leading-[24px]">
              {block?.description || "We adapt development and manufacturing to the needs of each programme while keeping quality, accountability and communication consistent."}
            </p>
          </div>

          {/* Right Block (4 Columns) */}
          <div className="flex flex-col lg:mt-[75px] w-full lg:w-[705px] shrink-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-[35px]">
              
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col w-full lg:w-[150px]">
                  <p className="text-[#e5a191] md:min-h-[28px] text-[8.6px] font-medium tracking-[1.4px] leading-[14px] uppercase mb-[11px]">
                    {feature.title}
                  </p>
                  <p className="text-[#F9F6F1C7] text-[11.2px] leading-[1.6] lg:leading-[18px]">
                    {feature.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
          
        </div>

        {/* Bottom Caption */}
        {/* Margin top offset is exactly calculated to match the 128px distance from the end of the left paragraph */}
        <p className="text-[#F9F6F1C7] text-[9px] font-medium tracking-[1.9px] leading-[15px] uppercase whitespace-pre-wrap mt-[60px] lg:mt-[128px]">
          {block?.bottomCaption || "YOUR PRODUCT  /  YOUR STANDARDS  /  YOUR BRAND"}
        </p>
        
      </div>
    </section>
  );
}

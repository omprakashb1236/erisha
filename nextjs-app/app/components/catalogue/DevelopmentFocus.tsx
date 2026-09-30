export default function DevelopmentFocus({ data }: any) {
  if (!data) return null;

  const features = data.features || [
    { title: "FIT & PROPORTION", description: "Cup, band, coverage and balance." },
    { title: "CONSTRUCTION", description: "Support, seams, wire and structure." },
    { title: "FABRICS & LACE", description: "Stretch, recovery, handfeel and finish." },
    { title: "TRIMS & DETAILS", description: "Elastics, straps, hardware and branding." },
  ];

  return (
    <section className="w-full bg-[#1b2845] py-[80px] lg:pt-[54px] lg:pb-[100px] overflow-hidden">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col relative">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-16 lg:gap-0">
          
          {/* Left Block */}
          <div className="flex flex-col w-full lg:w-[430px] shrink-0">
            <p className="text-[#e5a191] text-[9.8px] font-medium tracking-[2.3px] leading-[16px] uppercase mb-[30px] lg:mb-[37px]">
              {data.eyebrow || "DEVELOPMENT FOCUS"}
            </p>
            
            <h2 className="font-playfair text-[#f9f6f1] text-4xl lg:text-[40px] leading-[1.1] lg:leading-[45px]">
              <span className="block">{data.headingLine1 || "What we resolve"}</span>
              <span className="block">{data.headingLine2 || "before production."}</span>
            </h2>
          </div>

          {/* Right Block (4 Columns) */}
          <div className="flex flex-col lg:mt-[44px] w-full lg:w-[755px] shrink-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-[25px]">
              
              {features.map((feature: any, idx: number) => (
                <div key={idx} className="flex flex-col w-full lg:w-[170px]">
                  <p className="text-[#e5a191] text-[8.7px] font-medium tracking-[1.4px] leading-[15px] uppercase mb-[23px]">
                    {feature.title}
                  </p>
                  <p className="text-[#F9F6F1C7] text-[11.8px] leading-[19px]">
                    {feature.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

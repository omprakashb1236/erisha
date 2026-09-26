export default function CategoryIndex() {
  const categories = [
    { id: "01", name: "BRAS & BRALETTES" },
    { id: "02", name: "PANTIES" },
    { id: "03", name: "BRIEFS & BOXERS" },
    { id: "04", name: "CAMISOLES" },
    { id: "05", name: "LOUNGEWEAR" },
    { id: "06", name: "SLEEPWEAR" },
    { id: "07", name: "BASE LAYERS" },
    { id: "08", name: "ESSENTIALS" },
  ];

  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden py-[40px] lg:pt-[46px] lg:pb-[80px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
        
        {/* Eyebrow */}
        <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
          EXPLORE THE CATEGORIES
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[#d2bfaf]/50 mb-[24px] lg:mb-[23px]" />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[30px] lg:gap-y-[55px] gap-x-6 lg:gap-x-0">
          {categories.map((cat) => (
            <div key={cat.id} className="flex">
              <p className="text-[#1b2845] text-[10px] lg:text-[10.5px] font-medium tracking-[1.2px] leading-[18px] uppercase">
                <span className="mr-3">{cat.id}</span>
                <span>{cat.name}</span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

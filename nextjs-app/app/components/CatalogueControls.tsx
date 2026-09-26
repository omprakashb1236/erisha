export default function CatalogueControls() {
  const tabs = [
    { name: "ALL", active: true },
    { name: "BRAS & BRALETTES" },
    { name: "PANTIES" },
    { name: "CAMISOLES" },
    { name: "LOUNGEWEAR" },
  ];

  const filters = [
    "Category",
    "Product Type",
    "Gender / Fit",
    "Fabric Direction",
    "Construction",
    "Sort",
  ];

  return (
    <section className="w-full bg-[#f9f2ea] py-[40px] lg:pt-[58px] lg:pb-[100px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
        
        {/* Top Split Area: Title & Tabs */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-8 mb-[40px] lg:mb-[75px]">
          
          {/* Left Title Area */}
          <div className="flex flex-col w-full lg:w-[480px] shrink-0">
            <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[48px] leading-[1.1] lg:leading-[52px] mb-4 lg:mb-[13px]">
              The catalogue
            </h1>
            <p className="text-[#4a505e] text-[14px] lg:text-[13.5px] leading-[1.6] lg:leading-[22px]">
              Explore by category, product family or development need.
            </p>
          </div>

          {/* Right Tabs Area */}
          {/* Tabs start at top-72, headline at top-58, so lg:mt-[14px] creates perfect vertical offset */}
          <div className="flex w-full lg:w-auto overflow-x-auto no-scrollbar lg:mt-[14px]">
            <div className="flex items-center gap-6 lg:gap-[6px] whitespace-nowrap">
              {tabs.map((tab, idx) => (
                <div 
                  key={idx} 
                  className="relative cursor-pointer flex flex-col w-auto lg:w-[132px] shrink-0"
                >
                  <p className={`text-[10px] lg:text-[9.8px] font-medium tracking-[1px] leading-[16px] uppercase pb-[9px] ${
                    tab.active ? "text-[#b86e58]" : "text-[#1b2845] hover:text-[#b86e58] transition-colors"
                  }`}>
                    {tab.name}
                  </p>
                  {/* Active Underline */}
                  {tab.active && (
                    <div className="absolute bottom-0 left-0 w-full lg:w-[32px] h-[1.5px] bg-[#b86e58]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-[20px]">
          
          {filters.map((filter, idx) => (
            <button 
              key={idx}
              className="flex items-center justify-between bg-[#fefaf6] border border-[#d2bfaf] rounded-[21px] h-[42px] w-[165px] px-[17px] hover:border-[#1b2845] transition-colors shrink-0"
            >
              <span className="text-[#1b2845] text-[10.5px] font-medium leading-[18px]">
                {filter}
              </span>
              {/* Dropdown Chevron */}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#4a505e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ))}

          {/* Clear Filters */}
          <button className="flex items-center justify-center bg-[#fefaf6] rounded-[21px] h-[42px] w-[150px] lg:ml-auto hover:bg-[#f3ebe2] transition-colors shrink-0 mt-4 lg:mt-0">
            <span className="text-[#b86e58] text-[10.5px] font-medium leading-[18px]">
              Clear filters
            </span>
          </button>

        </div>

      </div>
    </section>
  );
}

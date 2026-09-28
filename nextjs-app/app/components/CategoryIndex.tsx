import Link from "next/link";
import type { CategoryIndex as CategoryIndexType } from "@/sanity.types";

export default function CategoryIndex({ block }: { block?: CategoryIndexType & { categories?: any[] } }) {
  const title = block?.title ?? "EXPLORE THE CATEGORIES";
  
  // Fallback if no block data is passed or it's empty
  const defaultCategories = [
    { id: "01", name: "BRAS & BRALETTES", slug: "" },
    { id: "02", name: "PANTIES", slug: "" },
    { id: "03", name: "BRIEFS & BOXERS", slug: "" },
    { id: "04", name: "CAMISOLES", slug: "" },
    { id: "05", name: "LOUNGEWEAR", slug: "" },
    { id: "06", name: "SLEEPWEAR", slug: "" },
    { id: "07", name: "BASE LAYERS", slug: "" },
    { id: "08", name: "ESSENTIALS", slug: "" },
  ];

  const categories = block?.categories?.length 
    ? block.categories.map((c: any) => ({
        id: c.id,
        name: c.categoryReference?.title || "",
        slug: c.categoryReference?.slug || ""
      }))
    : defaultCategories;

  return (
    <section className="w-full bg-[#f9f2ea] overflow-hidden py-[40px] lg:pt-[46px] lg:pb-[80px]">
      <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
        
        {/* Eyebrow */}
        <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
          {title}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[#d2bfaf]/50 mb-[24px] lg:mb-[23px]" />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[30px] lg:gap-y-[55px] gap-x-6 lg:gap-x-0">
          {categories.map((cat, index) => (
            <div key={cat.id || index} className="flex group">
              {cat.slug ? (
                <Link href={`/catalogue/${cat.slug}`} className="flex items-center w-full">
                  <p className="text-[#1b2845] group-hover:text-[#b86e58] transition-colors duration-300 text-[10px] lg:text-[10.5px] font-medium tracking-[1.2px] leading-[18px] uppercase">
                    <span className="mr-3">{cat.id}</span>
                    <span>{cat.name}</span>
                  </p>
                </Link>
              ) : (
                <p className="text-[#1b2845] text-[10px] lg:text-[10.5px] font-medium tracking-[1.2px] leading-[18px] uppercase">
                  <span className="mr-3">{cat.id}</span>
                  <span>{cat.name}</span>
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

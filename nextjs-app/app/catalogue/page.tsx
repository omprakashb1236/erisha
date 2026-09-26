import { sanityFetchCustom } from "@/sanity/lib/client";
import { catalogueQuery, allProductLinesQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import CatalogueFilters from "../components/catalogue/CatalogueFilters";
import CatalogueHero from "../components/catalogue/CatalogueHero";

// Make sure to define the expected Sanity return types loosely or via generated types
export default async function CataloguePage() {
  const catalogue = await sanityFetchCustom({ query: catalogueQuery, tags: ["catalogue"] });
  const allProductLines = await sanityFetchCustom({ query: allProductLinesQuery, tags: ["productLine"] });

  if (!catalogue && !allProductLines?.length) {
    return (
      <div className="w-full flex items-center justify-center h-screen bg-[#f9f2ea]">
        <h1 className="text-2xl text-[#1b2845] font-playfair">Catalogue not found.</h1>
      </div>
    );
  }

  const title = catalogue?.title || "The catalogue";
  const description = catalogue?.description || "Explore by category, product family or development need.";

  // Map Sanity catalogue global filters to the format expected by CatalogueFilters
  const filterGroups = [];
  if (catalogue?.filterCategory?.length) {
    filterGroups.push({ label: "Category", paramName: "category", options: catalogue.filterCategory });
  }
  if (catalogue?.filterProductType?.length) {
    filterGroups.push({ label: "Product Type", paramName: "type", options: catalogue.filterProductType });
  }
  if (catalogue?.filterGenderFit?.length) {
    filterGroups.push({ label: "Gender / Fit", paramName: "gender", options: catalogue.filterGenderFit });
  }
  if (catalogue?.filterFabricDescription?.length) {
    filterGroups.push({ label: "Fabric Description", paramName: "fabric", options: catalogue.filterFabricDescription });
  }
  if (catalogue?.filterConstruction?.length) {
    filterGroups.push({ label: "Construction", paramName: "construction", options: catalogue.filterConstruction });
  }

  return (
    <>
      <Header />
      

      <main className="w-full min-h-screen bg-[#f9f2ea] overflow-hidden">
        
        {/* Catalogue Hero Section */}
        <CatalogueHero catalogue={catalogue} />

        {/* Catalogue Header section (similar to CatalogueControls top part) */}
        <section className="w-full py-[40px] lg:pt-[58px] lg:pb-[100px]">
          <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">

            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-8 mb-[40px] lg:mb-[75px]">

              <div className="flex flex-col w-full lg:w-[480px] shrink-0">
                <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[48px] leading-[1.1] lg:leading-[52px] mb-4 lg:mb-[13px]">
                  {title}
                </h1>
                <p className="text-[#4a505e] text-[14px] lg:text-[13.5px] leading-[1.6] lg:leading-[22px]">
                  {description}
                </p>
              </div>

              {/* Product Lines Quick Tabs */}
              <div className="flex w-full lg:w-auto overflow-x-auto no-scrollbar lg:mt-[14px]">
                <div className="flex items-center gap-6 lg:gap-[6px] whitespace-nowrap">
                  <div className="relative cursor-pointer flex flex-col w-auto lg:w-[132px] shrink-0">
                    <p className="text-[10px] lg:text-[9.8px] font-medium tracking-[1px] leading-[16px] uppercase pb-[9px] text-[#b86e58]">
                      ALL
                    </p>
                    <div className="absolute bottom-0 left-0 w-full lg:w-[32px] h-[1.5px] bg-[#b86e58]" />
                  </div>
                  {allProductLines?.map((line: any) => (
                    <Link
                      key={line.slug?.current || line._id}
                      href={`/catalogue/${line.slug?.current}`}
                      className="relative cursor-pointer flex flex-col w-auto lg:w-[132px] shrink-0 group"
                    >
                      <p className="text-[10px] lg:text-[9.8px] font-medium tracking-[1px] leading-[16px] uppercase pb-[9px] text-[#1b2845] group-hover:text-[#b86e58] transition-colors">
                        {line.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Filters Row */}
            {filterGroups.length > 0 && (
              <CatalogueFilters filterGroups={filterGroups} />
            )}

          </div>
        </section>

        {/* Product Lines Grid (similar to CategoryIndex styling but with images) */}
        <section className="w-full bg-[#fefaf6] py-[60px] lg:py-[80px]">
          <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">

            <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
              EXPLORE THE CATEGORIES
            </p>
            <div className="w-full h-px bg-[#d2bfaf]/50 mb-[40px] lg:mb-[50px]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[40px] lg:gap-y-[60px] gap-x-6 lg:gap-x-8">
              {allProductLines?.map((line: any, idx: number) => {
                const numStr = String(idx + 1).padStart(2, "0");
                const thumbnailImage = line.thumbnailImage ? urlForImage(line.thumbnailImage)?.url() : null;

                return (
                  <Link key={line.slug?.current} href={`/catalogue/${line.slug?.current}`} className="flex flex-col group">
                    <div className="w-full aspect-[4/5] relative bg-[#f3ebe2] rounded-[24px] overflow-hidden mb-6">
                      {thumbnailImage && (
                        <Image
                          src={thumbnailImage}
                          alt={line.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <p className="text-[#1b2845] text-[10px] lg:text-[10.5px] font-medium tracking-[1.2px] leading-[18px] uppercase group-hover:text-[#b86e58] transition-colors">
                      <span className="mr-3">{numStr}</span>
                      <span>{line.title}</span>
                    </p>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

      </main>
      <ContactFooter />
    </>
  );
}

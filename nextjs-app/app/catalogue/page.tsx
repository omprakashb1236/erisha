import { sanityFetchCustom } from "@/sanity/lib/client";
import { catalogueQuery, allProductLinesQuery, headerQuery, footerQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import Header from "../components/Header";
import CatalogueFilters from "../components/catalogue/CatalogueFilters";
import CatalogueHero from "../components/catalogue/CatalogueHero";
import Footer from "../components/Footer";

// Make sure to define the expected Sanity return types loosely or via generated types
export default async function CataloguePage() {

  const [headerData, footerData] = await Promise.all([
    sanityFetchCustom({
      query: headerQuery,
      tags: ["fragment"],
    }),
    sanityFetchCustom({
      query: footerQuery,
      tags: ["fragment"],
    })
  ]);

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
  console.log(allProductLines)

  return (
    <>
      <Header fragment={headerData?.header} />


      <main className="w-full min-h-screen bg-[#f9f2ea] overflow-hidden">

        {/* Catalogue Hero Section */}
        <CatalogueHero catalogue={catalogue} />

        {/* Catalogue Header section (similar to CatalogueControls top part) */}
        <section className="w-full py-[40px] lg:pt-[58px] lg:pb-[60px]">
          <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">

            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-20 mb-[40px]">

              <div className="flex flex-col w-full lg:w-[480px] shrink-0">
                <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[48px] leading-[1.1] lg:leading-[52px] mb-4 lg:mb-[13px]">
                  {title}
                </h1>
                <p className="text-[#4a505e] text-[14px] lg:text-[13.5px] leading-[1.6] lg:leading-[22px]">
                  {description}
                </p>
              </div>

              {/* Product Lines Quick Tabs */}
              <div className="flex w-full lg:w-auto lg:mt-[14px]">
                <div className="flex items-center  gap-x-[6px] gap-y-4 flex-wrap">
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
                const thumbnailImage = urlForImage(line.thumbnailImage)?.url() || line.heroImage;

                return (
                  <Link
                    href={`/catalogue/${line.slug?.current}`}
                    key={line.slug?.current}
                    className="bg-[#fefaf6] border border-[#d2bfaf] rounded-[26px] overflow-hidden flex flex-col relative w-full h-[445px] transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
                  >
                    <div className="relative w-full h-[282px] shrink-0 bg-[#f3ebe2]">
                      {thumbnailImage && (
                        <Image
                          src={thumbnailImage}
                          alt={line.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>

                    {/* Family Info */}
                    <div className="flex flex-col px-[19px] pt-[22px] pb-[16px] flex-grow relative">
                      {/* Title */}
                      <h3 className="font-playfair text-[#1b2845] text-[21px] leading-[26px] mb-[8px] line-clamp-1">
                        {line.title}
                      </h3>
                      {/* Eyebrow */}
                      <p className="text-[#b86e58] text-[8.7px] font-medium tracking-[1.35px] leading-[15px] uppercase mb-[12px]">
                        {line.categoryTagline || "PRODUCT FAMILY"}
                      </p>

                      {/* Description and Add Icon aligned at bottom */}
                      <div className="flex items-center justify-between">
                        <p className="text-[#4a505e] text-[10.2px] leading-[16px] pr-4 line-clamp-2">
                          {line.subtitle || "Explore all styles"}
                        </p>
                        <span className="text-[#1b2845] text-[17px] font-medium leading-[20px] shrink-0">
                          <Image
                            src="/images/arrowRight.svg"
                            alt={line.title}
                            width={24}
                            height={24}
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </span>
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

      </main>
      <Footer fragment={footerData?.footer} />
    </>
  );
}

import { sanityFetchCustom } from "@/sanity/lib/client";
import { productLineBySlugQuery, filteredProductsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/app/components/catalogue/ProductCard";
import ProductFamilyCard from "@/app/components/catalogue/ProductFamilyCard";
import CatalogueFilters from "@/app/components/catalogue/CatalogueFilters";
import Header from "@/app/components/Header";
import ContactFooter from "@/app/components/ContactFooter";
import ProductBanner from "@/app/components/ProductBanner";

export default async function ProductLinePage({ 
  params,
  searchParams,
}: { 
  params: Promise<{ productLineSlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { productLineSlug } = await params;
  const resolvedSearchParams = await searchParams;
  
  // Fetch Product Line data (including filter definitions)
  const productLine = await sanityFetchCustom({ 
    query: productLineBySlugQuery, 
    params: { slug: productLineSlug },
    tags: ["productLine"] 
  });

  if (!productLine) {
    notFound();
  }

  // Extract active filter state from URL Search Params
  const categorySlug = typeof resolvedSearchParams.category === "string" ? resolvedSearchParams.category : undefined;
  const wireSlug = typeof resolvedSearchParams.wire === "string" ? resolvedSearchParams.wire : undefined;
  const supportSlug = typeof resolvedSearchParams.support === "string" ? resolvedSearchParams.support : undefined;

  // Query products matching these filters (you'll need to expand filteredProductsQuery if adding more filters)
  const filteredProducts = await sanityFetchCustom({
    query: filteredProductsQuery,
    params: {
      categorySlug: categorySlug || null,
      wireSlug: wireSlug || null,
      supportSlug: supportSlug || null,
    },
    tags: ["product"]
  });

  // Re-map Sanity filter schema definitions into the prop structure CatalogueFilters expects
  const filterGroups = [];
  if (productLine.filterType?.length) {
    filterGroups.push({ label: "Type", paramName: "type", options: productLine.filterType });
  }
  if (productLine.filterWire?.length) {
    filterGroups.push({ label: "Wire / Non-Wire", paramName: "wire", options: productLine.filterWire });
  }
  if (productLine.filterSupport?.length) {
    filterGroups.push({ label: "Support", paramName: "support", options: productLine.filterSupport });
  }

  return (
    <>
    <Header />
    
    <main className="w-full min-h-screen bg-[#f9f2ea] overflow-hidden">
      <ProductBanner 
        imageAlign="right" 
        imageInsideContainer={false} 
        eyebrow={productLine.eyebrow}
        headlineLine1={productLine.mainHeading || productLine.title}
        headlineLine2={""} 
        subhead={productLine.subtitle}
        paragraph={productLine.description}
        caption={productLine.bottomTags}
      />
      {/* Product Line Header section */}
      <section className="w-full py-[40px] lg:pt-[58px] lg:pb-[100px]">
        <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
          
          <div className="mb-6">
             <Link href="/catalogue" className="text-[#b86e58] text-[10px] font-medium tracking-[1.5px] uppercase hover:underline">
               ← Back to Catalogue
             </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-8 mb-[40px] lg:mb-[75px]">
            <div className="flex flex-col w-full lg:w-[480px] shrink-0">
              {productLine.eyebrow && (
                <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
                  {productLine.eyebrow}
                </p>
              )}
              <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[48px] leading-[1.1] lg:leading-[52px] mb-4 lg:mb-[13px]">
                {productLine.title}
              </h1>
              {productLine.description && (
                <p className="text-[#4a505e] text-[14px] lg:text-[13.5px] leading-[1.6] lg:leading-[22px]">
                  {productLine.description}
                </p>
              )}
            </div>
          </div>

          {/* Filters Row */}
          {filterGroups.length > 0 && (
            <CatalogueFilters filterGroups={filterGroups} />
          )}

        </div>
      </section>

      {/* Product Families Grid */}
      <section className="w-full bg-[#fefaf6] py-[60px] lg:py-[80px]">
        <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
          
          <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
            EXPLORE PRODUCT FAMILIES
          </p>
          <div className="w-full h-px bg-[#d2bfaf]/50 mb-[40px] lg:mb-[50px]" />

          {productLine.productFamilies && productLine.productFamilies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] lg:gap-y-[85px]">
              {productLine.productFamilies.map((family: any) => (
                <ProductFamilyCard 
                  key={family._id || family.slug?.current} 
                  family={family} 
                  lineSlug={productLineSlug} 
                />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center">
              <h3 className="font-playfair text-[#1b2845] text-2xl mb-4">No product families found</h3>
              <p className="text-[#4a505e]">Check back later for new additions.</p>
            </div>
          )}

        </div>
      </section>

      

    </main>
    <ContactFooter />
    </>
  );
}

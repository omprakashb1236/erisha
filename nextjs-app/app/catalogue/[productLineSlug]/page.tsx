import { sanityFetchCustom } from "@/sanity/lib/client";
import { productLineBySlugQuery, filteredProductsQuery, headerQuery, footerQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/app/components/catalogue/ProductCard";
import ProductFamilyCard from "@/app/components/catalogue/ProductFamilyCard";
import CatalogueFilters from "@/app/components/catalogue/CatalogueFilters";
import Header from "@/app/components/Header";
import ProductBanner from "@/app/components/ProductBanner";
import Footer from "@/app/components/Footer";
import DevelopmentFocus from "@/app/components/catalogue/DevelopmentFocus";
import { Metadata } from "next";

type Props = {
  params: Promise<{ productLineSlug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { productLineSlug } = await props.params;

  const page = await sanityFetchCustom({
    query: productLineBySlugQuery,
    params: { slug: productLineSlug },
    tags: [`productLine`],
  });

  return {
    title: page?.seo?.metaTitle || "E R I S H A I N T E R N A T I O N A L",
    description: page?.seo?.metaDescription || "Erisha International offers premium lingerie and intimate apparel.",
  } satisfies Metadata;
}

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

  if (!productLine) {
    notFound();
  }

  // Extract active filter state from URL Search Params
  const categorySlug = typeof resolvedSearchParams.category === "string" ? resolvedSearchParams.category : undefined;
  const typeSlug = typeof resolvedSearchParams.type === "string" ? resolvedSearchParams.type : undefined;
  const wireSlug = typeof resolvedSearchParams.wire === "string" ? resolvedSearchParams.wire : undefined;
  const paddingSlug = typeof resolvedSearchParams.padding === "string" ? resolvedSearchParams.padding : undefined;
  const supportSlug = typeof resolvedSearchParams.support === "string" ? resolvedSearchParams.support : undefined;
  const fabricSlug = typeof resolvedSearchParams.fabric === "string" ? resolvedSearchParams.fabric : undefined;

  // Filter product families based on search params
  const filteredFamilies = (productLine.productFamilies || []).filter((family: any) => {
    if (typeSlug && family.productType?.slug?.current !== typeSlug) return false;
    if (wireSlug && family.wire?.slug?.current !== wireSlug) return false;
    if (paddingSlug && family.padding?.slug?.current !== paddingSlug) return false;
    if (supportSlug && family.support?.slug?.current !== supportSlug) return false;
    if (fabricSlug && family.fabric?.slug?.current !== fabricSlug) return false;
    return true;
  });

  // Query products matching these filters (you'll need to expand filteredProductsQuery if adding more filters)
  const filteredProducts = await sanityFetchCustom({
    query: filteredProductsQuery,
    params: {
      categorySlug: categorySlug || null,
      typeSlug: typeSlug || null,
      wireSlug: wireSlug || null,
      paddingSlug: paddingSlug || null,
      supportSlug: supportSlug || null,
      fabricSlug: fabricSlug || null,
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
  if (productLine.filterPadding?.length) {
      filterGroups.push({ label: "Padding", paramName: "padding", options: productLine.filterPadding });
    }

  return (
    <>
      <Header fragment={headerData?.header} />

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
        <section className="w-full py-[40px] lg:pt-[60px] lg:pb-[60px]">
          <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">

            <div className="mb-6">
              <Link href="/catalogue" className="text-[#b86e58] text-[10px] font-medium tracking-[1.5px] uppercase hover:underline">
                ← Back to Catalogue
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-8 mb-[40px]">
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

            {/* Replaced Header for Product Families */}
            <div className="flex flex-col w-full mb-[40px] lg:mb-[50px]">
              <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
                {productLine.title} / {filteredFamilies?.length || 0} {(filteredFamilies?.length === 1) ? 'MODEL' : 'MODELS'}
              </p>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-[60px] pb-[30px] border-b border-[#d2bfaf]/50">
                <h2 className="font-playfair text-[#1b2845] text-3xl lg:text-[40px] leading-[1.1] lg:leading-[46px] max-w-[650px]">
                  Browse individual styles in the selected category.
                </h2>
                <p className="text-[#4a505e] text-[13px] leading-[20px] max-w-[450px]">
                  Model codes and details are structured for client review and can be replaced with your live catalogue data.
                </p>
              </div>
            </div>

            {filteredFamilies && filteredFamilies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] lg:gap-y-[60px]">
                {filteredFamilies.map((family: any) => (
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

        <DevelopmentFocus data={productLine.developmentFocus || {}} />

      </main>
      <Footer fragment={footerData?.footer} />
    </>
  );
}

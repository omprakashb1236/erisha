import { sanityFetchCustom } from "@/sanity/lib/client";
import { productFamilyBySlugQuery, productsByFamilyQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/app/components/catalogue/ProductCard";
import Header from "@/app/components/Header";
import ContactFooter from "@/app/components/ContactFooter";
import ProductBanner from "@/app/components/ProductBanner";

export default async function ProductFamilyPage({ 
  params 
}: { 
  params: Promise<{ productLineSlug: string; productFamilySlug: string }> 
}) {
  const { productLineSlug, productFamilySlug } = await params;

  // Fetch Product Family data
  const productFamily = await sanityFetchCustom({ 
    query: productFamilyBySlugQuery, 
    params: { slug: productFamilySlug },
    tags: ["productFamily"] 
  });

  if (!productFamily) {
    notFound();
  }

  // Fetch Products explicitly in this family
  const products = await sanityFetchCustom({
    query: productsByFamilyQuery,
    params: { familySlug: productFamilySlug },
    tags: ["product"]
  });

  return (
    <>
      <Header />
      <ProductBanner 
        imageAlign="right" 
        imageInsideContainer={false} 
        eyebrow={productFamily.eyebrow}
        headlineLine1={productFamily.mainHeading || productFamily.title}
        headlineLine2={""} 
        subhead={productFamily.subtitle}
        paragraph={productFamily.description}
        caption={productFamily.bottomTags}
      />
      <main className="w-full min-h-screen bg-[#f9f2ea] overflow-hidden">
      
      {/* Product Family Header section */}
      <section className="w-full py-[40px] lg:pt-[58px] lg:pb-[80px]">
        <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
          
          <div className="mb-6 flex items-center gap-2 text-[#b86e58] text-[10px] font-medium tracking-[1.5px] uppercase">
             <Link href="/catalogue" className="hover:underline">Catalogue</Link>
             <span>/</span>
             <Link href={`/catalogue/${productLineSlug}`} className="hover:underline">
               {productFamily.productLine?.title || productLineSlug}
             </Link>
             <span>/</span>
             <span className="text-[#1b2845]">{productFamily.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-8">
            <div className="flex flex-col w-full lg:w-[480px] shrink-0">
              {productFamily.eyebrow && (
                <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
                  {productFamily.eyebrow}
                </p>
              )}
              <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[48px] leading-[1.1] lg:leading-[52px] mb-4 lg:mb-[13px]">
                {productFamily.title}
              </h1>
              {productFamily.description && (
                <p className="text-[#4a505e] text-[14px] lg:text-[13.5px] leading-[1.6] lg:leading-[22px]">
                  {productFamily.description}
                </p>
              )}
            </div>
          </div>
          
        </div>
      </section>

      {/* Product Listing */}
      <section className="w-full bg-[#fefaf6] py-[60px] lg:py-[80px]">
        <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
          
          <p className="text-[#b86e58] text-[9px] lg:text-[10px] font-medium tracking-[2px] lg:tracking-[2.5px] leading-[16px] uppercase mb-[20px] lg:mb-[26px]">
            ALL STYLES IN THIS FAMILY
          </p>
          <div className="w-full h-px bg-[#d2bfaf]/50 mb-[40px] lg:mb-[50px]" />

          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] lg:gap-y-[85px]">
              {products.map((product: any) => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  baseUrl={`/catalogue/${productLineSlug}`} 
                />
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center">
              <h3 className="font-playfair text-[#1b2845] text-2xl mb-4">No products in this family</h3>
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

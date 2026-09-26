import { sanityFetchCustom } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

// Inlined query since we didn't add this one to queries.ts earlier
const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    ...,
    productLine->{title, slug},
    productFamily->{title, slug},
    category->{title},
    productType->{title},
    genderFit->{title},
    wire->{title},
    padding->{title},
    support->{title},
    cupRange->{title},
    fabric->{title}
  }
`;

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ productLineSlug: string; productFamilySlug: string; productSlug: string }> 
}) {
  const { productLineSlug, productFamilySlug, productSlug } = await params;

  const product = await sanityFetchCustom({ 
    query: productBySlugQuery, 
    params: { slug: productSlug },
    tags: ["product"] 
  });

  if (!product) {
    notFound();
  }

  const mainImageUrl = product.mainImage ? urlForImage(product.mainImage)?.url() : null;

  return (
    <main className="w-full min-h-screen bg-[#fefaf6] overflow-hidden">
      
      {/* Breadcrumbs */}
      <section className="w-full pt-[40px] lg:pt-[58px]">
        <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col">
          <div className="mb-[40px] flex items-center gap-2 text-[#b86e58] text-[10px] font-medium tracking-[1.5px] uppercase flex-wrap">
             <Link href="/catalogue" className="hover:underline">Catalogue</Link>
             <span>/</span>
             <Link href={`/catalogue/${productLineSlug}`} className="hover:underline">
               {product.productLine?.title || productLineSlug}
             </Link>
             <span>/</span>
             <Link href={`/catalogue/${productLineSlug}/${productFamilySlug}`} className="hover:underline">
               {product.productFamily?.title || productFamilySlug}
             </Link>
             <span>/</span>
             <span className="text-[#1b2845]">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="w-full pb-[60px] lg:pb-[100px]">
        <div className="w-full max-w-[1456px] mx-auto px-6 lg:px-[84px] flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Main Image Gallery */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative w-full aspect-[4/5] bg-[#f3ebe2] rounded-[32px] overflow-hidden">
              {mainImageUrl ? (
                <Image 
                  src={mainImageUrl} 
                  alt={product.title} 
                  fill 
                  className="object-cover" 
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#d2bfaf]">No Image</div>
              )}
            </div>
            
            {/* Additional gallery thumbnails would go here if product.gallery exists */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="flex gap-4 mt-4 overflow-x-auto no-scrollbar pb-2">
                {product.gallery.map((img: any, i: number) => {
                  const url = urlForImage(img)?.url();
                  return url ? (
                    <div key={i} className="relative w-[100px] aspect-[4/5] bg-[#f3ebe2] rounded-[16px] overflow-hidden shrink-0 cursor-pointer border border-transparent hover:border-[#b86e58]">
                      <Image src={url} alt={`${product.title} view ${i + 1}`} fill className="object-cover" />
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </div>

          {/* Product Info & Attributes */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {product.productCode && (
              <p className="text-[#b86e58] text-[10px] font-medium tracking-[2px] leading-[16px] uppercase mb-[16px]">
                {product.productCode}
              </p>
            )}

            <h1 className="font-playfair text-[#1b2845] text-4xl lg:text-[52px] leading-[1.1] mb-[24px]">
              {product.title}
            </h1>

            {product.shortDescription && (
              <p className="text-[#4a505e] text-[14px] lg:text-[15px] leading-[1.6] mb-[40px] max-w-[500px]">
                {product.shortDescription}
              </p>
            )}

            {/* Attributes List */}
            <div className="flex flex-col border-t border-[#d2bfaf]/50 pt-8">
              <h3 className="font-playfair text-[#1b2845] text-[20px] mb-6">Product Details</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {product.type?.title && (
                  <div className="flex flex-col">
                    <span className="text-[#4a505e] text-[9px] uppercase tracking-[1px] mb-1">Type</span>
                    <span className="text-[#1b2845] text-[14px]">{product.type.title}</span>
                  </div>
                )}
                {product.wire?.title && (
                  <div className="flex flex-col">
                    <span className="text-[#4a505e] text-[9px] uppercase tracking-[1px] mb-1">Wire</span>
                    <span className="text-[#1b2845] text-[14px]">{product.wire.title}</span>
                  </div>
                )}
                {product.padding?.title && (
                  <div className="flex flex-col">
                    <span className="text-[#4a505e] text-[9px] uppercase tracking-[1px] mb-1">Padding</span>
                    <span className="text-[#1b2845] text-[14px]">{product.padding.title}</span>
                  </div>
                )}
                {product.cupRange?.title && (
                  <div className="flex flex-col">
                    <span className="text-[#4a505e] text-[9px] uppercase tracking-[1px] mb-1">Cup Range</span>
                    <span className="text-[#1b2845] text-[14px]">{product.cupRange.title}</span>
                  </div>
                )}
                {product.support?.title && (
                  <div className="flex flex-col">
                    <span className="text-[#4a505e] text-[9px] uppercase tracking-[1px] mb-1">Support</span>
                    <span className="text-[#1b2845] text-[14px]">{product.support.title}</span>
                  </div>
                )}
                {product.fabric?.title && (
                  <div className="flex flex-col">
                    <span className="text-[#4a505e] text-[9px] uppercase tracking-[1px] mb-1">Fabric</span>
                    <span className="text-[#1b2845] text-[14px]">{product.fabric.title}</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

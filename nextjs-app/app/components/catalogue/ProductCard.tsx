import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/utils";

interface ProductCardProps {
  product: any;
  baseUrl?: string; // Optional if we construct it from the product directly
}

export default function ProductCard({ product, baseUrl }: ProductCardProps) {
  // Determine the correct image URL. If it's already a string (from GROQ projection), use it. Otherwise, use urlForImage.
  let resolvedThumbnail = "/placeholder.png";
  if (typeof product.thumbnailImage === "string") {
    resolvedThumbnail = product.thumbnailImage;
  } else if (product.thumbnailImage?.asset?._ref) {
    resolvedThumbnail = urlForImage(product.thumbnailImage)?.url() || "/placeholder.png";
  } else if (typeof product.mainImage === "string") {
    resolvedThumbnail = product.mainImage;
  } else if (product.mainImage?.asset?._ref) {
    resolvedThumbnail = urlForImage(product.mainImage)?.url() || "/placeholder.png";
  }

  const thumbnailImage = resolvedThumbnail;
  
  // Construct features from Sanity references
  const feature1 = [
    product.wire?.title, 
    product.padding?.title
  ].filter(Boolean).join(" • ").toUpperCase();

  const feature2 = [
    product.cupRange?.title, 
    product.support?.title ? `${product.support.title} SUPPORT` : ""
  ].filter(Boolean).join(" • ").toUpperCase();

  // Route: /catalogue/[line]/[family]/[product]
  // We prefer to construct this entirely from the product's resolved references if available
  const lineSlug = product.productLine?.slug?.current || "category";
  const familySlug = product.productFamily?.slug?.current || "family";
  const productSlug = product.slug?.current || "product";
  
  const href = baseUrl 
    ? `${baseUrl}/${familySlug}/${productSlug}` 
    : `/catalogue/${lineSlug}/${familySlug}/${productSlug}`;

  return (
    <Link 
      href={href}
      className="bg-[#fefaf6] border border-[#d2bfaf] rounded-[26px] overflow-hidden flex flex-col relative w-full h-[445px] transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
    >
      {/* Product Image */}
      <div className="relative w-full h-[282px] shrink-0 bg-[#f3ebe2]">
        {thumbnailImage && (
          <Image 
            src={thumbnailImage} 
            alt={product.title || "Product Image"} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col px-[19px] pt-[22px] pb-[16px] flex-grow relative">
        
        {/* SKU */}
        <p className="text-[#b86e58] text-[8.7px] font-medium tracking-[1.35px] leading-[15px] uppercase mb-[12px]">
          {product.productCode || "SKU N/A"}
        </p>
        
        {/* Title */}
        <h3 className="font-playfair text-[#1b2845] text-[21px] leading-[26px] mb-[8px] line-clamp-1">
          {product.title}
        </h3>
        
        {/* Features */}
        {(feature1 || feature2) ? (
          <>
            {feature1 && (
              <p className="text-[#4a505e] text-[8.2px] font-medium tracking-[1px] leading-[14px] uppercase mb-[4px] whitespace-pre-wrap">
                {feature1}
              </p>
            )}
            {feature2 && (
              <p className="text-[#4a505e] text-[8.2px] font-medium tracking-[0.85px] leading-[14px] uppercase mb-[10px] whitespace-pre-wrap">
                {feature2}
              </p>
            )}
          </>
        ) : (
          <div className="h-[38px]" /> // Spacer if no features
        )}
        
        {/* Description and Add Icon aligned at bottom */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-[#4a505e] text-[10.2px] leading-[16px] pr-4 line-clamp-2">
            {product.shortDescription || "Explore details inside"}
          </p>
          <span className="text-[#1b2845] text-[17px] font-medium leading-[20px] shrink-0">
            +
          </span>
        </div>
        
      </div>
    </Link>
  );
}

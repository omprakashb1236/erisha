import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/utils";

interface ProductFamilyCardProps {
  family: any;
  lineSlug: string;
}

export default function ProductFamilyCard({ family, lineSlug }: ProductFamilyCardProps) {
  // Try thumbnailImage first, then fallback to heroImage
  let resolvedImage = "/placeholder.png";
  if (typeof family.thumbnailImage === "string") {
    resolvedImage = family.thumbnailImage;
  } else if (family.thumbnailImage?.asset?._ref) {
    resolvedImage = urlForImage(family.thumbnailImage)?.url() || "/placeholder.png";
  } else if (typeof family.heroImage === "string") {
    resolvedImage = family.heroImage;
  } else if (family.heroImage?.asset?._ref) {
    resolvedImage = urlForImage(family.heroImage)?.url() || "/placeholder.png";
  }

  const href = `/catalogue/${lineSlug}/${family.slug?.current || "family"}`;

  return (
    <Link 
      href={href}
      className="bg-[#fefaf6] border border-[#d2bfaf] rounded-[26px] overflow-hidden flex flex-col relative w-full h-[445px] transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
    >
      {/* Family Image */}
      <div className="relative w-full h-[282px] shrink-0 bg-[#f3ebe2]">
        {resolvedImage && (
          <Image 
            src={resolvedImage} 
            alt={family.title || "Product Family Image"} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        )}
      </div>

      {/* Family Info */}
      <div className="flex flex-col px-[19px] pt-[22px] pb-[16px] flex-grow relative">
        
        {/* Eyebrow */}
        <p className="text-[#b86e58] text-[8.7px] font-medium tracking-[1.35px] leading-[15px] uppercase mb-[12px]">
          {family.eyebrow || "PRODUCT FAMILY"}
        </p>
        
        {/* Title */}
        <h3 className="font-playfair text-[#1b2845] text-[21px] leading-[26px] mb-[8px] line-clamp-1">
          {family.title}
        </h3>
        
        {/* Short info/features (Could be derived from attributes, but we leave blank if none) */}
        <div className="h-[38px]" />
        
        {/* Description and Add Icon aligned at bottom */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-[#4a505e] text-[10.2px] leading-[16px] pr-4 line-clamp-2">
            {family.description || "Explore all styles"}
          </p>
          <span className="text-[#1b2845] text-[17px] font-medium leading-[20px] shrink-0">
            →
          </span>
        </div>
        
      </div>
    </Link>
  );
}

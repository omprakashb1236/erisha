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
          {family.productCode || "PRODUCT FAMILY"}
        </p>

        {/* Title */}
        <h3 className="font-playfair text-[#1b2845] text-[22px] leading-[26px] mb-[8px] line-clamp-1">
          {family.title}
        </h3>


        {/* Description and Add Icon aligned at bottom */}
        <div className="flex items-center justify-between">
          <p className="text-[#4A505E] font-dm uppercase font-medium text-[9px] leading-[14px] pr-4">
            {family.wire.title} . {family.support.title} . {family.cupRange.title} . {family.fabric.title}
          </p>
          <span className="text-[#1b2845] text-[17px] font-medium leading-[20px] shrink-0">
            <Image
              src="/images/arrowRight.svg"
              alt={family.title}
              width={16}
              height={16}
            />
          </span>
        </div>

      </div>
    </Link>
  );
}

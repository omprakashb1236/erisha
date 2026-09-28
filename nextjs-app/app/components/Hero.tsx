import Image from "next/image";
import Button from "./Button";
import type { HomeHero } from "@/sanity.types"

type HomeheroProps = {
  block: HomeHero
  index: number
}

export default function Hero({ block }: HomeheroProps) {

  const eyebrow = block?.eyebrow || "Boutique Manufacturing For\nIntimates, Underwear & Apparel";
  const headingLine1 = block?.headingLine1 || "Thoughtfully";
  const headingLine2 = block?.headingLine2 || "crafted for";
  const headingLine3 = block?.headingLine3 || "every body.";
  const description = block?.description || "Erisha International partners with modern brands to develop premium bras, panties, briefs, boxers, sleepwear and everyday essentials — blending refined craftsmanship, flexible development and private-label manufacturing expertise.";
  const primaryBtnText = block?.primaryCta?.buttonText || "Explore Capabilities";

  const primaryLinkObj = block?.primaryCta?.link as any;
  const primaryBtnLink = primaryLinkObj?.linkType === 'page' && primaryLinkObj?.page?.slug
    ? `/${primaryLinkObj.page.slug}`
    : primaryLinkObj?.linkType === 'path' && primaryLinkObj?.path
      ? primaryLinkObj.path
      : primaryLinkObj?.linkType === 'href' && primaryLinkObj?.href
        ? primaryLinkObj.href
        : "/capabilities";

  const secondaryBtnText = block?.secondaryCta?.buttonText || "Start a Project";

  const secondaryLinkObj = block?.secondaryCta?.link as any;
  const secondaryBtnLink = secondaryLinkObj?.linkType === 'page' && secondaryLinkObj?.page?.slug
    ? `/${secondaryLinkObj.page.slug}`
    : secondaryLinkObj?.linkType === 'path' && secondaryLinkObj?.path
      ? secondaryLinkObj.path
      : secondaryLinkObj?.linkType === 'href' && secondaryLinkObj?.href
        ? secondaryLinkObj.href
        : "/start-project";
  const bgImage = (block?.backgroundImage as any) || "/images/heroBanner.png";
  const thumbImage = (block?.thumbnailImage as any) || "/hero-fabric-detail.png";
  const microcopy = block?.bottomMicrocopy || ["BETTER", "PRODUCTS", "A BRIGHTER", "TOMORROW"];

  return (
    <section className="relative md:pt-[45px] w-full overflow-hidden md:min-h-screen xl:min-h-[1104px]">



      {/* Mobile/Tablet Responsive View */}
      <div className="xl:hidden relative z-10 w-full flex flex-col bg-[#f9f4eebd] pt-[30px] px-4 pb-8">
        <div className="flex flex-col max-w-[500px]">
          <div className="text-[#b86e58] text-[10px] font-bold tracking-[1px] leading-[1.75] uppercase mb-4 whitespace-pre-line">
            {eyebrow}
          </div>

          <h1 className="text-[#1b2845] text-5xl sm:text-6xl leading-tight mb-6 font-playfair">
            <span className="block font-normal">{headingLine1}</span>
            <span className="block font-normal">{headingLine2}</span>
            <span className="block font-extrabold italic pr-2">{headingLine3}</span>
          </h1>

          <div className="text-[#4a505e] text-[15px] leading-[1.4] mb-8">
            <p>{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={primaryBtnLink} icon={<Image src="/hero-arrow-right.svg" alt="" width={13} height={13} />}>
              {primaryBtnText}
            </Button>
            <Button href={secondaryBtnLink} variant="secondary">{secondaryBtnText}</Button>
          </div>
        </div>
      </div>

      {/* Desktop Pixel Perfect View */}
      <div className="relative z-10 w-full container h-[1104px] hidden xl:block">

        {/* Main Content (Aligned 22px from left as requested) */}
        <div className="absolute left-[50px] top-[174px] w-[420px]">
          <div className="text-[#b86e58] text-[10px] font-bold tracking-[1px] leading-[17.5px] mb-[16px] whitespace-pre-line uppercase">
            {eyebrow}
          </div>

          <div className="text-[#1b2845] text-[62px] leading-none mb-[40px] font-playfair">
            <p className="mb-1">{headingLine1}</p>
            <p className="mb-1">{headingLine2}</p>
            <p className="font-extrabold italic">{headingLine3}</p>
          </div>

          <div className="text-[#4a505e] text-[14px] leading-[1.4] mb-[40px] w-[370px]">
            <p>{description}</p>
          </div>

          <div className="flex gap-[12px]">
            <Button href={primaryBtnLink} icon={<Image src="/hero-arrow-right.svg" alt="" width={13} height={13} />}>
              {primaryBtnText}
            </Button>
            <Button href={secondaryBtnLink} variant="secondary">{secondaryBtnText}</Button>
          </div>
        </div>

        {/* Thumbnail Bottom Left */}
        <div className="absolute left-[147.7px] top-[757.94px] w-[283.5px] h-[345.4px] border-[1.013px] border-[#d2bfaf] rounded-t-[141.75px] overflow-hidden">
          <Image src={thumbImage} alt="Fabric Detail" fill className="object-cover" />
        </div>

        {/* Microcopy Text Bottom Left */}
        <div className="absolute left-[29px] top-[886px] w-[131px] h-[105px]">
          <div className="absolute left-[23px] top-0 w-[1.5px] h-[31px] bg-[#122c52]" />
          <div className="absolute left-[6px] top-[49px] text-[#122c52] text-[9px] font-medium tracking-[2.16px] leading-[1.6]">
            {microcopy.map((line: string, idx: number) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Microcopy Text Right (Just in case it wasn't baked into banner) */}
        <div className="absolute left-[1362px] top-[183px]">
          <div className="text-[#122c52] text-[9.5px] font-medium tracking-[2.375px] leading-[1.7]">
            <p>IDEAS</p>
            <p>INTO</p>
            <p>EVERYDAY</p>
            <p>COMFORT</p>
          </div>
          <div className="absolute left-[28px] top-[107px] w-[1.4px] h-[35px] bg-[#122c52]" />
        </div>

      </div>
      {/* Full Width Background Banner */}
      <div className="md:absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Erisha Hero Banner"
          width={1920}
          height={1080}
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}



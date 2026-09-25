import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-[45px] w-full overflow-hidden min-h-screen xl:min-h-[1104px]">
      
      {/* Full Width Background Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroBanner.png"
          alt="Erisha Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile/Tablet Responsive View */}
      <div className="xl:hidden relative z-10 w-full flex flex-col pt-[140px] px-[22px] pb-12 min-h-screen">
        <div className="flex flex-col max-w-[500px]">
          <div className="text-[#b86e58] text-[10px] font-bold tracking-[1px] leading-[1.75] uppercase mb-4">
            <p>Boutique Manufacturing For</p>
            <p>Intimates, Underwear & Apparel</p>
          </div>
          
          <h1 className="text-[#1b2845] text-5xl sm:text-6xl leading-tight mb-6 font-playfair">
            <span className="block font-normal">Thoughtfully</span>
            <span className="block font-normal">crafted for</span>
            <span className="block font-extrabold italic pr-2">every body.</span>
          </h1>
          
          <div className="text-[#4a505e] text-[15px] leading-[1.4] mb-8">
            <p>Erisha International partners with modern brands to develop premium bras, panties, briefs, boxers, sleepwear and everyday essentials — blending refined craftsmanship, flexible development and private-label manufacturing expertise.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/capabilities" icon={<Image src="/hero-arrow-right.svg" alt="" width={13} height={13} />}>
              Explore Capabilities
            </Button>
            <Button href="/start-project" variant="secondary">Start a Project</Button>
          </div>
        </div>

        {/* Mobile Lower Decoratives */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end mt-16 gap-8">
          <div className="relative pl-6">
            <div className="absolute top-0 left-0 w-[1.5px] h-[31px] bg-[#122c52]" />
            <div className="text-[#122c52] text-[9px] font-medium tracking-[2.16px] leading-[1.6]">
              <p>BETTER</p>
              <p>PRODUCTS</p>
              <p>A BRIGHTER</p>
              <p>TOMORROW</p>
            </div>
          </div>

          <div className="relative w-[180px] aspect-[4/5] sm:w-[283px] border border-[#d2bfaf] rounded-t-[141px] overflow-hidden">
            <Image src="/hero-fabric-detail.png" alt="Fabric Detail" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Desktop Pixel Perfect View */}
      <div className="relative z-10 w-full container h-[1104px] hidden xl:block">
        
        {/* Main Content (Aligned 22px from left as requested) */}
        <div className="absolute left-[50px] top-[174px] w-[420px]">
          <div className="text-[#b86e58] text-[10px] font-bold tracking-[1px] leading-[17.5px] mb-[16px]">
            <p>BOUTIQUE MANUFACTURING FOR</p>
            <p>INTIMATES, UNDERWEAR & APPAREL</p>
          </div>
          
          <div className="text-[#1b2845] text-[62px] leading-none mb-[40px] font-playfair">
            <p className="mb-1">Thoughtfully</p>
            <p className="mb-1">crafted for</p>
            <p className="font-extrabold italic">every body.</p>
          </div>
          
          <div className="text-[#4a505e] text-[14px] leading-[1.4] mb-[40px] w-[370px]">
            <p>Erisha International partners with modern brands</p>
            <p>to develop premium bras, panties, briefs, boxers,</p>
            <p>sleepwear and everyday essentials — blending</p>
            <p>refined craftsmanship, flexible development</p>
            <p>and private-label manufacturing expertise.</p>
          </div>
          
          <div className="flex gap-[12px]">
            <Button href="/capabilities" icon={<Image src="/hero-arrow-right.svg" alt="" width={13} height={13} />}>
              Explore Capabilities
            </Button>
            <Button href="/start-project" variant="secondary">Start a Project</Button>
          </div>
        </div>

        {/* Thumbnail Bottom Left */}
        <div className="absolute left-[147.7px] top-[757.94px] w-[283.5px] h-[345.4px] border-[1.013px] border-[#d2bfaf] rounded-t-[141.75px] overflow-hidden">
          <Image src="/hero-fabric-detail.png" alt="Fabric Detail" fill className="object-cover" />
        </div>

        {/* Microcopy Text Bottom Left */}
        <div className="absolute left-[29px] top-[886px] w-[131px] h-[105px]">
          <div className="absolute left-[23px] top-0 w-[1.5px] h-[31px] bg-[#122c52]" />
          <div className="absolute left-[6px] top-[49px] text-[#122c52] text-[9px] font-medium tracking-[2.16px] leading-[1.6]">
            <p>BETTER</p>
            <p>PRODUCTS</p>
            <p>A BRIGHTER</p>
            <p>TOMORROW</p>
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
    </section>
  );
}

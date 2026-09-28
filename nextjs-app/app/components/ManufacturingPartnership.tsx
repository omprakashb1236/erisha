import Image from "next/image";
import Button from "./Button";
import type { ManufacturingPartnership } from "@/sanity.types";

export default function ManufacturingPartnership({ block }: { block?: ManufacturingPartnership }) {
  const eyebrow = block?.eyebrow || "MANUFACTURING, BUILT AROUND YOUR BRAND";
  const headingLine1 = block?.headingLine1 || "More than";
  const headingLine2 = block?.headingLine2 || "production.";
  const description = block?.description || "From the first brief to production-ready garments, Erisha brings product development, materials, fit, craftsmanship and manufacturing together under one thoughtful process.";

  const ctaText = block?.buttonText?.buttonText || "Explore Our Capabilities";
  const linkObj = block?.buttonText?.link as any;
  const ctaLink = linkObj?.linkType === 'page' && linkObj?.page?.slug
    ? `/${linkObj.page.slug}`
    : linkObj?.linkType === 'path' && linkObj?.path
      ? linkObj.path
      : linkObj?.linkType === 'href' && linkObj?.href
        ? linkObj.href
        : '/capabilities';

  const defaultSteps = [
    { title: "Product Development", description: "Ideas translated into commercially\nconsidered products." },
    { title: "Fabric & Trim Sourcing", description: "Materials selected around feel,\nperformance and purpose." },
    { title: "Sampling & Prototyping", description: "Concepts refined through\nphysical development." },
    { title: "Pattern, Fit & Construction", description: "Proportion, support and comfort\nconsidered together." },
    { title: "Quality Control", description: "Consistency checked throughout\ndevelopment and production." },
    { title: "Private Label Manufacturing", description: "Flexible manufacturing built around\nyour collection and brand." },
  ];
  const processSteps = block?.processSteps?.length ? block.processSteps : defaultSteps;

  const bottomTags = block?.bottomTags || [""];
  const circleMicrocopy = block?.circleMicrocopy || [""];
  const blueprintMicrocopy = block?.blueprintMicrocopy || [""];
  const blueprintImage = (block?.blueprintImage as any) || "/garment-blueprint.png";

  return (
    <section className="relative manufacturingPartnership w-full bg-[#0d2844] overflow-hidden">

      {/* Mobile/Tablet Responsive View */}
      <div className="xl:hidden flex flex-col z-20 px-6 py-12 pt-[100px] w-full min-h-screen">
        <div className="flex flex-col max-w-[590px] mx-auto w-full">
          <p className="text-[#e5a191] text-[12px] font-medium tracking-[3px] uppercase mb-4">
            {eyebrow}
          </p>
          <div className="w-[42px] h-[2px] bg-[rgba(229,161,145,0.95)] mb-8" />

          <h2 className="text-[#f7f1e9] font-playfair leading-none mb-8">
            <span className="block text-5xl mb-2">{headingLine1}</span>
            <span className="block font-extrabold italic text-5xl mb-2">{headingLine2}</span>
          </h2>

          <div className="text-[#f7f1e9] text-[16px] leading-[28px] tracking-[0.1px] mb-12">
            <p>{description}</p>
          </div>

          <Button
            href={ctaLink}
            variant="light"
            className="w-[292px] mb-12"
            icon={<span className="text-[22px] font-normal leading-[24px]">→</span>}
          >
            {ctaText}
          </Button>
        </div>

        {/* Process List Mobile */}
        <div className="flex flex-col gap-8 w-full max-w-[590px] mx-auto">
          {processSteps.map((step: any, idx: number) => {
            const num = (idx + 1).toString().padStart(2, '0');
            return (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] leading-none">{num}</span>
                  <div className="w-[1.2px] h-full min-h-[40px] bg-[rgba(229,161,145,0.55)] mt-2" />
                </div>
                <div className="flex flex-col pb-4">
                  <h3 className="text-[#f7f1e9] text-[24px] font-playfair mb-2">{step.title}</h3>
                  <p className="text-[#f7f1e9] text-[14.5px] leading-[22px] whitespace-pre-line">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Capabilities Mobile */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-[rgba(214,223,229,0.28)]">
          {bottomTags.map((item: string, idx: number) => (
            <span key={idx} className="text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] px-2 py-1 bg-[#e5a191]/10 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Pixel Perfect View */}
      <div className="relative w-full container mx-auto h-[900px] hidden xl:block">

        {/* Left Content */}
        <div className="absolute left-[84px] top-[96px] w-[590px] h-[690px]">
          <p className="absolute left-0 top-0 text-[#e5a191] text-[12px] font-medium tracking-[3px]">
            {eyebrow}
          </p>
          <div className="absolute left-0 top-[35px] w-[42px] h-[2px] bg-[rgba(229,161,145,0.95)]" />

          <div className="absolute left-0 top-[70px] w-[560px] text-[#f7f1e9]">
            <p className="font-playfair text-[72px] leading-none mb-0">{headingLine1}</p>
            <p className="font-playfair font-extrabold italic text-[66px] leading-none mb-0">{headingLine2}</p>
          </div>

          <div className="absolute left-[2px] top-[470px] w-[520px] text-[#f7f1e9] text-[16px] leading-[28px] tracking-[0.1px]">
            <p>{description}</p>
          </div>

          <Button
            href={ctaLink}
            variant="light"
            className="absolute left-0 top-[622px] !w-[292px] !h-[54px] !rounded-[27px] !text-[#0d2844] !bg-[#f7f1e9] !px-[31px] !justify-between"
            icon={<span className="text-[22px] font-normal leading-[24px]">→</span>}
          >
            <span className="text-[13px] font-medium tracking-[0.2px]">{ctaText}</span>
          </Button>

          <div className="absolute left-[320px] top-[649px] w-[128px] h-px bg-[rgba(229,161,145,0.7)]" />

          <div className="absolute left-[455px] top-[625px] w-[138px] h-[65px] flex items-center gap-4">
            <div className="relative w-[28px] h-[28px]">
              <Image src="/micro-circle.svg" alt="" fill className="object-contain" />
            </div>
            <div className="text-[rgba(247,241,233,0.88)] text-[8.5px] font-medium tracking-[2.2px] leading-[14px]">
              {circleMicrocopy.map((line: string, idx: number) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Main Column Divider */}
        <div className="absolute left-[716px] top-[103px] w-px h-[650px] bg-[rgba(214,223,229,0.25)]" />

        {/* Right Process List */}
        <div className="absolute left-[754px] top-[78px] w-[520px] h-[700px]">
          {processSteps.map((step: any, idx: number) => {
            const num = (idx + 1).toString().padStart(2, '0');
            const topBase = idx * 112;
            return (
              <div key={idx}>
                <p className="absolute left-0 text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] w-[58px] leading-[42px]" style={{ top: `${topBase + 4}px` }}>{num}</p>
                <div className="absolute left-[72px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" style={{ top: `${topBase + 6}px` }} />
                <p className="absolute left-[108px] text-[#f7f1e9] text-[24px] font-playfair leading-[28px] w-[390px]" style={{ top: `${topBase + 3}px` }}>{step.title}</p>
                <div className="absolute left-[108px] text-[#f7f1e9] text-[14.5px] leading-[22px] w-[360px]" style={{ top: `${topBase + 42}px` }}>
                  <p className="whitespace-pre-line">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blueprint Artwork */}
        <div className="absolute left-[1078px] top-[38px] w-[330px] h-[730px] pointer-events-none">
          <div className="absolute left-0 top-[28px] w-[330px] h-[650px] opacity-30">
            <Image src={blueprintImage} alt="" fill className="object-cover" />
          </div>

          <div className="absolute left-[205px] top-[28px] text-[#f7f1e9] text-[9.5px] font-medium tracking-[2.3px] leading-[18px]">
            {blueprintMicrocopy.map((line: string, idx: number) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <div className="absolute left-[205.6px] top-[111.4px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" />

          <div className="absolute left-[240px] top-[650px] w-[40px] h-[110px] -translate-x-1/2 flex items-center justify-center">
            <div className="rotate-90 text-[rgba(247,241,233,0.75)] text-[9px] font-medium tracking-[2.4px] leading-[18px] text-center w-[110px]">
              <p>ERISHA</p><p>INTERNATIONAL</p>
            </div>
          </div>
        </div>

        {/* Footer Capabilities */}
        <div className="absolute left-[84px] top-[782px] w-[1288px] h-[92px]">
          <div className="absolute left-0 top-0 w-[1288px] h-px bg-[rgba(214,223,229,0.28)]" />

          <p className="absolute left-[86px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[120px]">{bottomTags[0] || ""}</p>
          <div className="absolute left-[238px] top-[31px] w-[1.2px] h-[34px] bg-[rgba(229,161,145,0.6)]" />

          <p className="absolute left-[315px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[220px]">{bottomTags[1] || ""}</p>
          <div className="absolute left-[590px] top-[31px] w-[1.2px] h-[34px] bg-[rgba(229,161,145,0.6)]" />

          <p className="absolute left-[666px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[260px]">{bottomTags[2] || ""}</p>
          <div className="absolute left-[981px] top-[31px] w-[1.2px] h-[34px] bg-[rgba(229,161,145,0.6)]" />

          <p className="absolute left-[1058px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[150px]">{bottomTags[3] || ""}</p>

          <p className="absolute left-0 top-[31px] text-[#e5a191] text-[22px] leading-[24px]">+</p>
          <p className="absolute left-[1270px] top-[31px] text-[#e5a191] text-[22px] leading-[24px]">+</p>
        </div>

      </div>
    </section>
  );
}

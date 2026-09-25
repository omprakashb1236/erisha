import Image from "next/image";
import Button from "./Button";

export default function ManufacturingPartnership() {
  return (
    <section className="relative w-full bg-[#0d2844] overflow-hidden">
      
      {/* Mobile/Tablet Responsive View */}
      <div className="xl:hidden flex flex-col z-20 px-6 py-12 pt-[100px] w-full min-h-screen">
        <div className="flex flex-col max-w-[590px] mx-auto w-full">
          <p className="text-[#e5a191] text-[12px] font-medium tracking-[3px] uppercase mb-4">
            MANUFACTURING, BUILT AROUND YOUR BRAND
          </p>
          <div className="w-[42px] h-[2px] bg-[rgba(229,161,145,0.95)] mb-8" />

          <h2 className="text-[#f7f1e9] font-playfair leading-none mb-8">
            <span className="block text-5xl mb-2">More than</span>
            <span className="block text-5xl mb-2">production.</span>
            <span className="block font-extrabold italic text-5xl mb-2">A partner in</span>
            <span className="block font-extrabold italic text-5xl">development.</span>
          </h2>

          <div className="text-[#f7f1e9] text-[16px] leading-[28px] tracking-[0.1px] mb-12">
            <p>From the first brief to production-ready garments, Erisha brings product development, materials, fit, craftsmanship and manufacturing together under one thoughtful process.</p>
          </div>

          <Button 
            href="/capabilities" 
            variant="light"
            className="w-[292px] mb-12"
            icon={<span className="text-[22px] font-normal leading-[24px]">→</span>}
          >
            Explore Our Capabilities
          </Button>
        </div>

        {/* Process List Mobile */}
        <div className="flex flex-col gap-8 w-full max-w-[590px] mx-auto">
          {[
            { num: "01", title: "Product Development", desc: "Ideas translated into commercially\nconsidered products." },
            { num: "02", title: "Fabric & Trim Sourcing", desc: "Materials selected around feel,\nperformance and purpose." },
            { num: "03", title: "Sampling & Prototyping", desc: "Concepts refined through\nphysical development." },
            { num: "04", title: "Pattern, Fit & Construction", desc: "Proportion, support and comfort\nconsidered together." },
            { num: "05", title: "Quality Control", desc: "Consistency checked throughout\ndevelopment and production." },
            { num: "06", title: "Private Label Manufacturing", desc: "Flexible manufacturing built around\nyour collection and brand." },
          ].map((step, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] leading-none">{step.num}</span>
                <div className="w-[1.2px] h-full min-h-[40px] bg-[rgba(229,161,145,0.55)] mt-2" />
              </div>
              <div className="flex flex-col pb-4">
                <h3 className="text-[#f7f1e9] text-[24px] font-playfair mb-2">{step.title}</h3>
                <p className="text-[#f7f1e9] text-[14.5px] leading-[22px] whitespace-pre-line">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Capabilities Mobile */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-[rgba(214,223,229,0.28)]">
          {["LOW MOQ", "FLEXIBLE DEVELOPMENT", "MULTI-CATEGORY EXPERTISE", "GLOBAL SUPPLY"].map((item, idx) => (
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
            MANUFACTURING, BUILT AROUND YOUR BRAND
          </p>
          <div className="absolute left-0 top-[35px] w-[42px] h-[2px] bg-[rgba(229,161,145,0.95)]" />
          
          <div className="absolute left-0 top-[70px] w-[560px] text-[#f7f1e9]">
            <p className="font-playfair text-[72px] leading-none mb-0">More than</p>
            <p className="font-playfair text-[72px] leading-none mb-0">production.</p>
            <p className="font-playfair font-extrabold italic text-[66px] leading-none mb-0">A partner in</p>
            <p className="font-playfair font-extrabold italic text-[66px] leading-none">development.</p>
          </div>

          <div className="absolute left-[2px] top-[470px] w-[520px] text-[#f7f1e9] text-[16px] leading-[28px] tracking-[0.1px]">
            <p>From the first brief to production-ready garments,</p>
            <p>Erisha brings product development, materials, fit,</p>
            <p>craftsmanship and manufacturing together under</p>
            <p>one thoughtful process.</p>
          </div>

          <Button 
            href="/capabilities" 
            variant="light"
            className="absolute left-0 top-[622px] !w-[292px] !h-[54px] !rounded-[27px] !text-[#0d2844] !bg-[#f7f1e9] !px-[31px] !justify-between"
            icon={<span className="text-[22px] font-normal leading-[24px]">→</span>}
          >
            <span className="text-[13px] font-medium tracking-[0.2px]">Explore Our Capabilities</span>
          </Button>

          <div className="absolute left-[320px] top-[649px] w-[128px] h-px bg-[rgba(229,161,145,0.7)]" />
          
          <div className="absolute left-[455px] top-[625px] w-[138px] h-[65px] flex items-center gap-4">
            <div className="relative w-[28px] h-[28px]">
              <Image src="/micro-circle.svg" alt="" fill className="object-contain" />
            </div>
            <div className="text-[rgba(247,241,233,0.88)] text-[8.5px] font-medium tracking-[2.2px] leading-[14px]">
              <p>IDEAS</p><p>INTO</p><p>EVERYDAY</p><p>COMFORT</p>
            </div>
          </div>
        </div>

        {/* Main Column Divider */}
        <div className="absolute left-[716px] top-[103px] w-px h-[650px] bg-[rgba(214,223,229,0.25)]" />

        {/* Right Process List */}
        <div className="absolute left-[754px] top-[78px] w-[520px] h-[700px]">
          
          {/* 01 */}
          <p className="absolute left-0 top-[4px] text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] w-[58px] leading-[42px]">01</p>
          <div className="absolute left-[72px] top-[6px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" />
          <p className="absolute left-[108px] top-[3px] text-[#f7f1e9] text-[24px] font-playfair leading-[28px] w-[390px]">Product Development</p>
          <div className="absolute left-[108px] top-[42px] text-[#f7f1e9] text-[14.5px] leading-[22px] w-[360px]">
            <p>Ideas translated into commercially</p><p>considered products.</p>
          </div>

          {/* 02 */}
          <p className="absolute left-0 top-[116px] text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] w-[58px] leading-[42px]">02</p>
          <div className="absolute left-[72px] top-[118px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" />
          <p className="absolute left-[108px] top-[115px] text-[#f7f1e9] text-[24px] font-playfair leading-[28px] w-[390px]">Fabric & Trim Sourcing</p>
          <div className="absolute left-[108px] top-[154px] text-[#f7f1e9] text-[14.5px] leading-[22px] w-[360px]">
            <p>Materials selected around feel,</p><p>performance and purpose.</p>
          </div>

          {/* 03 */}
          <p className="absolute left-0 top-[228px] text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] w-[58px] leading-[42px]">03</p>
          <div className="absolute left-[72px] top-[230px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" />
          <p className="absolute left-[108px] top-[227px] text-[#f7f1e9] text-[24px] font-playfair leading-[28px] w-[390px]">Sampling & Prototyping</p>
          <div className="absolute left-[108px] top-[266px] text-[#f7f1e9] text-[14.5px] leading-[22px] w-[360px]">
            <p>Concepts refined through</p><p>physical development.</p>
          </div>

          {/* 04 */}
          <p className="absolute left-0 top-[340px] text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] w-[58px] leading-[42px]">04</p>
          <div className="absolute left-[72px] top-[342px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" />
          <p className="absolute left-[108px] top-[339px] text-[#f7f1e9] text-[24px] font-playfair leading-[28px] w-[390px]">Pattern, Fit & Construction</p>
          <div className="absolute left-[108px] top-[378px] text-[#f7f1e9] text-[14.5px] leading-[22px] w-[360px]">
            <p>Proportion, support and comfort</p><p>considered together.</p>
          </div>

          {/* 05 */}
          <p className="absolute left-0 top-[452px] text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] w-[58px] leading-[42px]">05</p>
          <div className="absolute left-[72px] top-[454px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" />
          <p className="absolute left-[108px] top-[451px] text-[#f7f1e9] text-[24px] font-playfair leading-[28px] w-[390px]">Quality Control</p>
          <div className="absolute left-[108px] top-[490px] text-[#f7f1e9] text-[14.5px] leading-[22px] w-[360px]">
            <p>Consistency checked throughout</p><p>development and production.</p>
          </div>

          {/* 06 */}
          <p className="absolute left-0 top-[564px] text-[#e5a191] text-[38px] font-playfair tracking-[-0.2px] w-[58px] leading-[42px]">06</p>
          <div className="absolute left-[72px] top-[566px] w-[1.2px] h-[62px] bg-[rgba(229,161,145,0.55)]" />
          <p className="absolute left-[108px] top-[563px] text-[#f7f1e9] text-[24px] font-playfair leading-[28px] w-[390px]">Private Label Manufacturing</p>
          <div className="absolute left-[108px] top-[602px] text-[#f7f1e9] text-[14.5px] leading-[22px] w-[360px]">
            <p>Flexible manufacturing built around</p><p>your collection and brand.</p>
          </div>
        </div>

        {/* Blueprint Artwork */}
        <div className="absolute left-[1078px] top-[38px] w-[330px] h-[730px] pointer-events-none">
          <div className="absolute left-0 top-[28px] w-[330px] h-[650px] opacity-30">
            <Image src="/garment-blueprint.png" alt="" fill className="object-cover" />
          </div>
          
          <div className="absolute left-[205px] top-[28px] text-[#f7f1e9] text-[9.5px] font-medium tracking-[2.3px] leading-[18px]">
            <p>FIT</p><p>FUNCTION</p><p>BEAUTY</p><p>TOGETHER</p>
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
          
          <p className="absolute left-[86px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[120px]">LOW MOQ</p>
          <div className="absolute left-[238px] top-[31px] w-[1.2px] h-[34px] bg-[rgba(229,161,145,0.6)]" />
          
          <p className="absolute left-[315px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[220px]">FLEXIBLE DEVELOPMENT</p>
          <div className="absolute left-[590px] top-[31px] w-[1.2px] h-[34px] bg-[rgba(229,161,145,0.6)]" />
          
          <p className="absolute left-[666px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[260px]">MULTI-CATEGORY EXPERTISE</p>
          <div className="absolute left-[981px] top-[31px] w-[1.2px] h-[34px] bg-[rgba(229,161,145,0.6)]" />
          
          <p className="absolute left-[1058px] top-[40px] text-[#f7f1e9] text-[11px] font-medium tracking-[1.8px] leading-[18px] w-[150px]">GLOBAL SUPPLY</p>
          
          <p className="absolute left-0 top-[31px] text-[#e5a191] text-[22px] leading-[24px]">+</p>
          <p className="absolute left-[1270px] top-[31px] text-[#e5a191] text-[22px] leading-[24px]">+</p>
        </div>

      </div>
    </section>
  );
}

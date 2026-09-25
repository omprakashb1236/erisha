import Image from "next/image";
import Button from "./Button";

export default function ContactFooter() {
  return (
    <section className="relative w-full bg-[#f9f6f1]">
      {/* Contact Section */}
      <div className="w-full container mx-auto py-16 lg:py-[100px] flex flex-col lg:flex-row gap-16 lg:gap-[150px]">
         {/* Left Col */}
         <div className="flex-1 flex flex-col">
            <p className="text-[#a2614f] text-[12px] font-medium tracking-[3.1px] leading-[18px] mb-4">LET'S CREATE TOGETHER</p>
            <div className="w-[45px] h-px bg-[#a2614f]/45 mb-8" />
            
            <h2 className="text-[#162437] font-playfair leading-none mb-6 text-5xl lg:text-[68px]">
              <span className="block mb-2">Your next collection</span>
              <span className="block text-[#a2614f] font-extrabold italic mb-1">starts with</span>
              <span className="block text-[#a2614f] font-extrabold italic">a conversation.</span>
            </h2>
            
            <p className="text-[#4d535e] text-[16px] leading-[26px] max-w-[520px] mb-12 lg:mb-16">
              Whether you are developing your first collection, expanding an established range or looking for a reliable private-label manufacturing partner, we would love to understand what you are creating.
            </p>
            
            {/* Feature Icons Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-y lg:border-y-0 lg:border-t border-[#b0a69c]/40 py-8 lg:pt-[60px] lg:pb-0 lg:max-w-[500px] lg:justify-between">
              <div className="flex items-center gap-4 lg:flex-col lg:items-center">
                <div className="w-[40px] h-[40px] relative shrink-0"><Image src="/contact-discuss.svg" alt="" fill /></div>
                <p className="text-[#4d535e] text-[11.5px] font-medium tracking-[2.4px] leading-[18px] lg:text-center">DISCUSS<br className="hidden lg:block"/>YOUR IDEAS</p>
              </div>
              
              <div className="hidden lg:block w-px h-[92px] bg-[#b0a69c]/40" />
              
              <div className="flex items-center gap-4 lg:flex-col lg:items-center">
                <div className="w-[40px] h-[40px] relative shrink-0"><Image src="/contact-explore.svg" alt="" fill /></div>
                <p className="text-[#4d535e] text-[11.5px] font-medium tracking-[2.4px] leading-[18px] lg:text-center">EXPLORE<br className="hidden lg:block"/>POSSIBILITIES</p>
              </div>
              
              <div className="hidden lg:block w-px h-[92px] bg-[#b0a69c]/40" />
              
              <div className="flex items-center gap-4 lg:flex-col lg:items-center">
                <div className="w-[40px] h-[40px] relative shrink-0"><Image src="/contact-build.svg" alt="" fill /></div>
                <p className="text-[#4d535e] text-[11.5px] font-medium tracking-[2.4px] leading-[18px] lg:text-center">BUILD<br className="hidden lg:block"/>TOGETHER</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-[44px] h-px bg-[#b0a69c]/55 mt-16" />
            <p className="hidden lg:block text-[#4d535e] text-[10.8px] font-medium tracking-[3.2px] mt-4">
              BEAUTIFUL PRODUCTS. BRIGHTER POSSIBILITIES.
            </p>
         </div>

         {/* Right Col: Form */}
         <div className="flex-1 flex flex-col lg:border-l border-[#b0a69c]/45 lg:pl-[100px] lg:-ml-[50px]">
            <form className="flex flex-col gap-10 lg:gap-12 w-full max-w-[460px]">
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex-1 relative border-b border-[#b0a69c]/70 pb-2">
                  <input type="text" placeholder="Your Name *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" />
                </div>
                <div className="flex-1 relative border-b border-[#b0a69c]/70 pb-2">
                  <input type="text" placeholder="Company / Brand *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" />
                </div>
              </div>
              <div className="relative border-b border-[#b0a69c]/70 pb-2">
                <input type="email" placeholder="Work Email *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" />
              </div>
              <div className="relative flex items-center border-b border-[#b0a69c]/70 pb-2">
                <input type="text" placeholder="What are you looking to develop? *" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" />
                <span className="text-[#162437] text-[20px] leading-none absolute right-2">⌄</span>
              </div>
              <div className="relative flex items-center border-b border-[#b0a69c]/70 pb-2">
                <input type="text" placeholder="Approximate quantities" className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e]" />
                <span className="text-[#162437] text-[20px] leading-none absolute right-2">⌄</span>
              </div>
              <div className="relative flex items-start border-b border-[#b0a69c]/70 pb-2">
                <textarea placeholder="Tell us more about your project" rows={3} className="w-full bg-transparent text-[#4d535e] text-[11.5px] outline-none placeholder:text-[#4d535e] resize-none" />
                <span className="text-[rgba(77,83,94,0.65)] text-[18px] leading-none absolute right-0 bottom-2">⌟</span>
              </div>
              
              <button type="button" className="w-full sm:w-[310px] h-[52px] bg-[#b77462] text-[#f9f6f1] rounded-[26px] flex items-center justify-between px-7 hover:bg-[#a2614f] transition-colors lg:mt-4">
                <span className="text-[12px] font-medium font-sans">Start a Conversation</span>
                <span className="text-[18px] font-normal font-sans">↗</span>
              </button>
            </form>

            <div className="mt-12 flex flex-col gap-4">
              <div className="w-[44px] h-px bg-[#b0a69c]/55" />
              <p className="text-[12px]">
                <span className="text-[#4d535e]">Prefer email? </span>
                <span className="text-[#a2614f]">hello@erishainternational.com</span>
              </p>
            </div>
         </div>
      </div>

      {/* Full Width Image Separator */}
      <div className="relative w-full aspect-square md:aspect-video lg:h-[393px]">
        <Image src="/contact-design-table.png" alt="Design Table" fill className="object-cover" />
      </div>

      {/* Footer Section */}
      <footer className="bg-[#162433] text-[#f9f6f1]">
        <div className="w-full container py-16 lg:py-[60px] flex flex-col gap-12 lg:gap-16">
          
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 lg:items-start border-b border-[rgba(249,246,241,0.25)] lg:border-none pb-8 lg:pb-0">
            {/* Logo Area */}
            <div className="flex flex-col gap-2 max-w-[300px]">
              <p className="font-playfair text-[35px] leading-none">E R I S H A</p>
              <p className="text-[11px] text-[rgba(249,246,241,0.9)] font-medium tracking-[2.5px] mb-4">I N T E R N A T I O N A L</p>
              <div className="text-[11.5px] text-[rgba(249,246,241,0.85)] leading-[20px]">
                <p>Thoughtfully made.</p>
                <p>From the first idea to the final stitch.</p>
              </div>
              <div className="hidden lg:block w-[46px] h-px bg-[rgba(249,246,241,0.45)] mt-6" />
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-0 lg:flex-1 lg:justify-end">
              <div className="flex flex-col gap-6 lg:w-[220px]">
                <p className="text-[11px] font-medium tracking-[2.2px]">EXPLORE</p>
                <div className="flex flex-col gap-3 text-[11px] text-[rgba(249,246,241,0.88)]">
                  <p>Our Story</p><p>What We Make</p><p>Our Process</p><p>Our Capabilities</p>
                </div>
              </div>
              
              <div className="hidden lg:block w-px h-[120px] bg-[rgba(249,246,241,0.25)] mr-[40px]" />

              <div className="flex flex-col gap-6 lg:w-[220px]">
                <p className="text-[11px] font-medium tracking-[2.2px]">COMPANY</p>
                <div className="flex flex-col gap-3 text-[11px] text-[rgba(249,246,241,0.88)]">
                  <p>Sustainability</p><p>Partner With Us</p><p>Contact</p>
                </div>
              </div>

              <div className="hidden lg:block w-px h-[120px] bg-[rgba(249,246,241,0.25)] mr-[40px]" />

              <div className="flex flex-col gap-6 col-span-2 lg:col-span-1 lg:w-[260px]">
                <p className="text-[11px] font-medium tracking-[2.2px]">GET IN TOUCH</p>
                <div className="flex flex-col gap-3 text-[11px] text-[rgba(249,246,241,0.88)] whitespace-pre-wrap">
                  <p>{`✉   hello@erishainternational.com`}</p>
                  <p>{`☎   +91 11 4167 0000`}</p>
                  <p>{`●   New Delhi, India`}</p>
                </div>
                <div className="flex gap-4 mt-2">
                  <span className="text-[18px] font-medium">in</span>
                  <span className="text-[18px] font-medium">◎</span>
                </div>
              </div>
              
              {/* Desktop only far right column */}
              <div className="hidden lg:flex flex-col gap-6 border-l border-[rgba(249,246,241,0.25)] pl-[40px]">
                <div className="w-[46px] h-px bg-[rgba(249,246,241,0.45)] mb-2" />
                <div className="text-[11px] text-[rgba(249,246,241,0.9)] font-medium tracking-[2.8px] leading-[20px]">
                  <p>PEOPLE</p><p>PRODUCTS</p><p>A BRIGHTER</p><p>TOMORROW</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 lg:border-t border-[rgba(249,246,241,0.25)] lg:pt-6">
            <p className="text-[11px] text-[rgba(249,246,241,0.8)]">© 2026 Erisha International. All rights reserved.</p>
            <p className="text-[11px] text-[rgba(249,246,241,0.8)] whitespace-pre-wrap">{`Privacy Policy   |   Terms of Use`}</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

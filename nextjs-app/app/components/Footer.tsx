import React from 'react';
import Image from 'next/image';
import Button from './Button';
// @ts-ignore
import type { FooterBlock } from '@/sanity.types';

type FooterProps = {
  fragment?: any;
};

export default function Footer({ fragment: block }: FooterProps) {
  const title = block?.title || "E R I S H A";
  const subtitle = block?.subtitle || "I N T E R N A T I O N A L";
  const descriptionLines = block?.descriptionLines?.length ? block.descriptionLines : [
    "Thoughtfully made.",
    "From the first idea to the final stitch."
  ];

  const defaultLinkColumns = [
    { heading: "EXPLORE", links: [] },
    { heading: "OFFICES", links: [] }
  ];
  const linkColumns = block?.linkColumns?.length ? block.linkColumns : defaultLinkColumns;

  const defaultBottomLinks = ["Privacy Policy", "Terms of Service", "Accessibility"];
  const bottomLinks = block?.bottomLinks?.length ? block.bottomLinks : defaultBottomLinks;

  const copyright = block?.copyright || "© 2024 Erisha International. All rights reserved.";

  const renderLink = (linkItem: any, key: number) => {
    const text = typeof linkItem === 'string' ? linkItem : linkItem?.buttonText || '';
    const linkObj = typeof linkItem === 'string' ? null : linkItem?.link;
    const href = linkObj?.linkType === 'page' && (linkObj?.page?.slug || (typeof linkObj?.page === 'string' && linkObj?.page))
      ? `/${linkObj?.page?.slug || linkObj?.page}`
      : linkObj?.linkType === 'path' && linkObj?.path
        ? linkObj.path
        : linkObj?.linkType === 'href' && linkObj?.href
          ? linkObj.href
          : '#';
    return (
      <a key={key} href={href} className="hover:text-white transition-colors">{text}</a>
    );
  };

  return (
    <section className="relative w-full bg-[#f9f6f1]">
      {/* Footer Section */}
      <footer className="bg-[#162433] text-[#f9f6f1]">
        <div className="w-full container mx-auto py-10 lg:py-[60px] flex flex-col gap-8 lg:gap-16">
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:items-start border-b border-[rgba(249,246,241,0.25)] lg:border-none pb-8 lg:pb-0 px-0">
            {/* Logo Area */}
            <div className="flex flex-col gap-2 max-w-[300px]">
              <p className="font-playfair text-[35px] leading-none">{title}</p>
              <p className="text-[11px] text-[rgba(249,246,241,0.9)] font-medium tracking-[2.5px] mb-4">{subtitle}</p>
              <div className="text-[11.5px] text-[rgba(249,246,241,0.85)] leading-[20px]">
                {descriptionLines.map((line: string, i: number) => <p key={i}>{line}</p>)}
              </div>
              <div className="hidden lg:block w-[46px] h-px bg-[rgba(249,246,241,0.45)] mt-6" />
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-0 lg:flex-1 lg:justify-end">
              {linkColumns.map((col: any, i: number) => (
                <div key={i} className="flex flex-col gap-6 lg:w-[220px]">
                  <p className="text-[11px] font-medium tracking-[2.2px]">{col.heading}</p>
                  <div className="flex flex-col gap-3 text-[11px] text-[rgba(249,246,241,0.88)]">
                    {col.links?.map((linkItem: any, j: number) => renderLink(linkItem, j))}
                  </div>
                </div>
              ))}
             

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
              <div className="hidden lg:flex flex-col gap-6 pl-[40px]">
                <div className="w-[46px] h-px bg-[rgba(249,246,241,0.45)] mb-2" />
                <div className="text-[11px] text-[rgba(249,246,241,0.9)] font-medium tracking-[2.8px] leading-[20px]">
                  <p>PEOPLE</p><p>PRODUCTS</p><p>A BRIGHTER</p><p>TOMORROW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 text-[9.5px] text-[rgba(249,246,241,0.65)] font-medium tracking-[1.5px] px-6 lg:px-0">
            <p>{copyright}</p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {bottomLinks.map((linkItem: any, i: number) => renderLink(linkItem, i))}
            </div>
            
          </div>
          
        </div>
      </footer>
    </section>
  );
}




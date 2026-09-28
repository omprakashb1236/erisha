"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

type HeaderProps = {
  fragment?: any;
};

export default function Header({ fragment }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const utilityLeft = fragment?.utilityTextLeft || "Intimatewear & Apparel Manufacturing";
  const utilityRight = fragment?.utilityTextRight || "Let's create together";

  const logoUrl = fragment?.logo || "/erisha-logo.svg";
  const logoTextUrl = fragment?.logoText || "/erisha-text.svg";
  const logoSubtextUrl = fragment?.logoSubtext || "/international-text.svg";

  const leftNav = fragment?.primaryNavigationLeft || [];
  const rightNav = fragment?.primaryNavigationRight || [];

  const ctaButton = fragment?.ctaButton;

  const renderNav = (navItems: any[]) => {
    return navItems.map((item: any, i: number) => {
      const slug = item.link?.page?.slug || (typeof item.link?.page === 'string' && item.link?.page);
      const href = item.link?.linkType === 'page' && slug ? (slug === 'home' ? '/' : '/' + slug) : item.link?.path || item.link?.href || '#';
      const text = item.buttonText || item.title || item.linkText || 'Link';
      
      const isActive = pathname === href;

      if (isActive) {
        return (
          <div key={i} className="relative h-full flex items-center">
            <Link href={href} className="text-[#be6852] text-[15px] font-medium whitespace-nowrap">
              {text}
            </Link>
            <div className="absolute -bottom-[28px] left-0 h-[2px] w-[41px] bg-[#be6852]" />
          </div>
        );
      }

      return (
        <Link key={i} href={href} className="text-[#122c52] text-[15px] font-medium hover:text-[#be6852] transition-colors whitespace-nowrap">
          {text}
        </Link>
      );
    });
  };

  return (
    <header className="w-full relative md:absolute z-50 h-[132px]">
      {/* Background Top Band */}
      <div className="absolute top-0 left-0 w-full h-[132px] bg-[#f9f4eebd] -z-20" />

      {/* Logo Patch Background */}
      <div className="hidden absolute top-[132px] left-1/2 -translate-x-1/2 w-[285px] h-[94px] bg-[#f9f4ee] -z-20" />

      {/* Utility Bar (Hidden on mobile) */}
      <div className="hidden lg:flex w-full mx-auto relative h-[50px]">
        <div className="absolute left-0 bottom-0 w-full h-px bg-[#daccc2] opacity-72" />
        <div className="container mx-auto items-center justify-between flex">
          <p className="text-[#122c52] text-[11px] font-medium tracking-[3.52px] uppercase z-10">
            {utilityLeft}
          </p>
          <p className="text-[#122c52] text-[11px] font-medium tracking-[1.98px] z-10">
            {utilityRight}
          </p>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="w-full container mx-auto relative flex items-center justify-between h-[82px] lg:h-[82px]">
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#122c52] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Primary Navigation - Left */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-[44px] w-1/3">
          {renderNav(leftNav)}
        </nav>

        {/* Center Logo Area */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-[-38px] flex flex-col items-center z-10">
          <Image 
            src={logoUrl} 
            alt="Erisha Logo" 
            width={70} 
            height={120} 
            className="w-[70px] h-[120px] object-contain bg-[#F8F3EC]"
            priority
          />
          <div className="flex flex-col items-center gap-[5px] mt-1">
            <Image 
              src={logoTextUrl} 
              alt="ERISHA" 
              width={131} 
              height={23} 
              className="w-[131.3px] h-[22.7px] object-contain"
            />
            <Image 
              src={logoSubtextUrl} 
              alt="INTERNATIONAL" 
              width={133} 
              height={7} 
              className="w-[132.8px] h-[7.2px] object-contain"
            />
          </div>
        </Link>

        {/* Primary Navigation - Right */}
        <nav className="hidden lg:flex items-center justify-end gap-8 xl:gap-[44px] w-1/3">
          {renderNav(rightNav)}
          
          <Button 
            href={ctaButton?.linkType === 'page' && (ctaButton?.page?.slug || (typeof ctaButton?.page === 'string' && ctaButton?.page)) ? ((ctaButton?.page?.slug || ctaButton?.page) === 'home' ? '/' : '/' + (ctaButton?.page?.slug || ctaButton?.page)) : ctaButton?.path || ctaButton?.href || '/start-project'}
            variant="header"
            icon={<Image src="/cta-icon.svg" alt="" width={10} height={10} className="w-[10px] h-[10px] ml-2" />}
          >
            {ctaButton?.buttonText || "Start a Project"}
          </Button>
        </nav>

        {/* Mobile CTA (Visible on mobile) */}
        <div className="lg:hidden">
           <Link href={ctaButton?.linkType === 'page' && (ctaButton?.page?.slug || (typeof ctaButton?.page === 'string' && ctaButton?.page)) ? ((ctaButton?.page?.slug || ctaButton?.page) === 'home' ? '/' : '/' + (ctaButton?.page?.slug || ctaButton?.page)) : ctaButton?.path || ctaButton?.href || '/start-project'} className="flex items-center justify-center bg-[#122c52] text-[#faf6f0] h-10 px-4 rounded-full font-medium text-sm">
            {ctaButton?.buttonText || "Start"}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[132px] left-0 w-full bg-[#f9f4ee] shadow-lg lg:hidden z-40 border-t border-[#daccc2] p-6 flex flex-col gap-4">
          {[...leftNav, ...rightNav].map((item: any, i: number) => {
            const slug = item.link?.page?.slug || (typeof item.link?.page === 'string' && item.link?.page);
            const href = item.link?.linkType === 'page' && slug ? (slug === 'home' ? '/' : '/' + slug) : item.link?.path || item.link?.href || '#';
            const text = item.buttonText || item.title || item.linkText || 'Link';
            const isActive = pathname === href;
            
            return (
              <Link key={i} href={href} className={`${isActive ? 'text-[#be6852]' : 'text-[#122c52]'} text-lg font-medium`}>
                {text}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  );
}

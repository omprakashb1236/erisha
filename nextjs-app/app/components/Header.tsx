"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative md:absolute z-50 h-[132px]">
      {/* Background Top Band */}
      <div className="absolute top-0 left-0 w-full h-[132px] bg-[#f9f4eebd] -z-20" />

      {/* Logo Patch Background */}
      <div className="hidden absolute top-[132px] left-1/2 -translate-x-1/2 w-[285px] h-[94px] bg-[#f9f4ee] -z-20" />

      {/* Utility Bar (Hidden on mobile) */}
      <div className="hidden lg:flex w-full mx-auto relative h-[50px]">
        <div className="absolute left-0 bottom-0 w-full h-px bg-[#daccc2] opacity-72" />
        <div className="container items-center justify-between flex">
        
        <p className="text-[#122c52] text-[11px] font-medium tracking-[3.52px] uppercase z-10">
          Intimatewear & Apparel Manufacturing
        </p>
        <p className="text-[#122c52] text-[11px] font-medium tracking-[1.98px] z-10">
          Let’s create together
        </p>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="w-full container relative flex items-center justify-between h-[82px] lg:h-[82px]">
        
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
          <div className="relative h-full flex items-center">
            <Link href="/" className="text-[#be6852] text-[15px] font-medium whitespace-nowrap">
              Home
            </Link>
            <div className="absolute -bottom-[28px] left-0 h-[2px] w-[41px] bg-[#be6852]" />
          </div>
          <Link href="/our-story" className="text-[#122c52] text-[15px] font-medium hover:text-[#be6852] transition-colors whitespace-nowrap">
            Our Story
          </Link>
          <Link href="/what-we-make" className="text-[#122c52] text-[15px] font-medium hover:text-[#be6852] transition-colors whitespace-nowrap">
            What We Make
          </Link>
          <Link href="/our-process" className="text-[#122c52] text-[15px] font-medium hover:text-[#be6852] transition-colors whitespace-nowrap">
            Our Process
          </Link>
        </nav>

        {/* Center Logo Area */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-[-38px] flex flex-col items-center z-10">
          <Image 
            src="/erisha-logo.svg" 
            alt="Erisha Logo" 
            width={70} 
            height={120} 
            className="w-[70px] h-[120px] object-contain bg-[#F8F3EC]"
            priority
          />
          <div className="flex flex-col items-center gap-[5px] mt-1">
            <Image 
              src="/erisha-text.svg" 
              alt="ERISHA" 
              width={131} 
              height={23} 
              className="w-[131.3px] h-[22.7px] object-contain"
            />
            <Image 
              src="/international-text.svg" 
              alt="INTERNATIONAL" 
              width={133} 
              height={7} 
              className="w-[132.8px] h-[7.2px] object-contain"
            />
          </div>
        </Link>

        {/* Primary Navigation - Right */}
        <nav className="hidden lg:flex items-center justify-end gap-8 xl:gap-[44px] w-1/3">
          <Link href="/sustainability" className="text-[#122c52] text-[14.5px] font-medium hover:text-[#be6852] transition-colors whitespace-nowrap">
            Sustainability
          </Link>
          <Link href="/resources" className="text-[#122c52] text-[14.5px] font-medium hover:text-[#be6852] transition-colors whitespace-nowrap">
            Resources
          </Link>
          <Link href="/contact" className="text-[#122c52] text-[14.5px] font-medium hover:text-[#be6852] transition-colors whitespace-nowrap">
            Contact
          </Link>
          
          <Button 
            href="/start-project" 
            variant="header"
            icon={<Image src="/cta-icon.svg" alt="" width={10} height={10} className="w-[10px] h-[10px] ml-2" />}
          >
            Start a Project
          </Button>
        </nav>

        {/* Mobile CTA (Visible on mobile) */}
        <div className="lg:hidden">
           <Link href="/start-project" className="flex items-center justify-center bg-[#122c52] text-[#faf6f0] h-10 px-4 rounded-full font-medium text-sm">
            Start
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[132px] left-0 w-full bg-[#f9f4ee] shadow-lg lg:hidden z-40 border-t border-[#daccc2] p-6 flex flex-col gap-4">
          <Link href="/" className="text-[#be6852] text-lg font-medium">Home</Link>
          <Link href="/our-story" className="text-[#122c52] text-lg font-medium">Our Story</Link>
          <Link href="/what-we-make" className="text-[#122c52] text-lg font-medium">What We Make</Link>
          <Link href="/our-process" className="text-[#122c52] text-lg font-medium">Our Process</Link>
          <div className="h-px w-full bg-[#daccc2] my-2" />
          <Link href="/sustainability" className="text-[#122c52] text-lg font-medium">Sustainability</Link>
          <Link href="/resources" className="text-[#122c52] text-lg font-medium">Resources</Link>
          <Link href="/contact" className="text-[#122c52] text-lg font-medium">Contact</Link>
        </div>
      )}
    </header>
  );
}

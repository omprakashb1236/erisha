"use client";

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import ContactForm from './ContactForm';
// @ts-ignore
import type { FooterBlock } from '@/sanity.types';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FooterProps = {
  fragment?: any;
};

export default function Footer({ fragment: block }: FooterProps) {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    const elements = gsap.utils.toArray(containerRef.current!.querySelectorAll('.gsap-animate'));
    if (elements.length > 0) {
      gsap.from(elements, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }
  }, { scope: containerRef });

  const title = block?.title || "E R I S H A";
  const subtitle = block?.subtitle || "I N T E R N A T I O N A L";
  const descriptionLines = block?.descriptionLines?.length ? block.descriptionLines : [
    "Thoughtfully made.",
    "From the first idea to the final stitch."
  ];

  const defaultLinkColumns = [
    { heading: "EXPLORE", links: ["Our Story", "What We Make", "Our Process", "Our Capabilities"] },
    { heading: "COMPANY", links: ["Sustainability", "Partner With Us", "Contact"] }
  ];
  const linkColumns = block?.linkColumns?.length ? block.linkColumns : defaultLinkColumns;

  const defaultContact = {
    heading: "",
    email: "",
    phone: "",
    address: ""
  };
  const contactInfo = block?.contactInfo || defaultContact;

  const defaultSocials = [
    { platform: "linkedin", url: "#" },
    { platform: "instagram", url: "#" }
  ];
  const socialLinks = block?.socialLinks?.length ? block.socialLinks : defaultSocials;

  const defaultRightText = [""];
  const rightText = block?.rightText?.length ? block.rightText : defaultRightText;

  const defaultBottomLinks = [""];
  const bottomLinks = block?.bottomLinks?.length ? block.bottomLinks : defaultBottomLinks;

  const copyright = block?.copyright || "© 2026 Erisha International. All rights reserved.";

  const renderLink = (linkItem: any, key: number) => {
    const text = typeof linkItem === 'string' ? linkItem : linkItem?.buttonText || '';
    const linkObj = typeof linkItem === 'string' ? null : linkItem?.link;
    const pageSlug = linkObj?.page?.slug || (typeof linkObj?.page === 'string' && linkObj?.page);
    const href = linkObj?.linkType === 'page' && pageSlug
      ? (pageSlug === 'home' ? '/' : `/${pageSlug}`)
      : linkObj?.linkType === 'path' && linkObj?.path
        ? linkObj.path
        : linkObj?.linkType === 'href' && linkObj?.href
          ? linkObj.href
          : '#';
    return (
      <a key={key} href={href} className="hover:text-white transition-colors">{text}</a>
    );
  };

  const getSocialIcon = (platform: string) => {
    switch (platform?.toLowerCase()) {
      case 'linkedin': return <span className="text-[14px] font-bold">in</span>;
      case 'instagram': return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>;
      case 'twitter': return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
      case 'facebook': return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
      default: return <span className="text-[14px] font-bold">{platform}</span>;
    }
  };

  return (
    <>
      {block?.contactForm && <ContactForm block={block.contactForm} />}
      <section className="relative w-full bg-[#f9f6f1]">
        {/* Footer Section */}
        <footer ref={containerRef} className="bg-[#162331] text-[#f9f6f1]">
        <div className="w-full container mx-auto pt-14 lg:pt-[80px] flex flex-col">
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 lg:items-start pb-12 lg:pb-[60px] px-0 lg:px-2">
            
            {/* Logo Area */}
            <div className="flex flex-col gap-2 w-full lg:w-[35%]">
              <h2 className="gsap-animate font-playfair text-[32px] md:text-[38px] leading-none mb-1">
                {title.split('').join(' ')}
              </h2>
              <p className="gsap-animate text-[9px] md:text-[10px] text-[rgba(249,246,241,0.9)] font-medium tracking-[4px] md:tracking-[6px] mb-8 md:mb-12">
                {subtitle.split('').join(' ')}
              </p>
              
              <div className="text-[11px] md:text-[12px] text-[rgba(249,246,241,0.85)] leading-[20px] md:leading-[22px]">
                {descriptionLines.map((line: string, i: number) => <p key={i} className="gsap-animate">{line}</p>)}
              </div>
              
              <div className="gsap-animate w-[46px] h-px bg-[rgba(249,246,241,0.3)] mt-6" />
            </div>

            {/* Links Columns Group (Explore, Company, Contact, People) */}
            <div className="flex flex-col md:flex-row flex-1 justify-between lg:pl-10">
              
              {linkColumns.map((col: any, i: number) => (
                <div key={i} className="gsap-animate flex flex-col gap-6 w-full md:w-auto md:min-w-[160px] border-l-0 md:border-l border-[rgba(249,246,241,0.15)] md:pl-6 lg:pl-10 mt-8 md:mt-0">
                  <p className="text-[10.5px] font-bold tracking-[1.5px] text-[rgba(249,246,241,0.9)]">{col.heading}</p>
                  <div className="flex flex-col gap-3 text-[11.5px] text-[rgba(249,246,241,0.7)]">
                    {col.links?.map((linkItem: any, j: number) => renderLink(linkItem, j))}
                  </div>
                </div>
              ))}

              {/* Get in Touch */}
              <div className="gsap-animate flex flex-col gap-6 w-full md:w-auto md:min-w-[200px] border-l-0 md:border-l border-[rgba(249,246,241,0.15)] md:pl-6 lg:pl-10 mt-8 md:mt-0">
                <p className="text-[10.5px] font-bold tracking-[1.5px] text-[rgba(249,246,241,0.9)]">{contactInfo.heading || 'GET IN TOUCH'}</p>
                <div className="flex flex-col gap-3 text-[11.5px] text-[rgba(249,246,241,0.7)]">
                  {contactInfo.email && (
                    <div className="flex items-center gap-3">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 1.5C0.5 0.947715 0.947715 0.5 1.5 0.5H10.5C11.0523 0.5 11.5 0.947715 11.5 1.5V7.5C11.5 8.05228 11.0523 8.5 10.5 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5V1.5Z" fill="#F9F6F1" fillOpacity="0.8"/><path d="M1 1.5L6 5L11 1.5" stroke="#162331" strokeWidth="0.8"/></svg>
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">{contactInfo.email}</a>
                    </div>
                  )}
                  {contactInfo.phone && (
                    <div className="flex items-center gap-3">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H7.5C8.60457 2.5 9.5 3.39543 9.5 4.5V7.5C9.5 8.60457 8.60457 9.5 7.5 9.5H4.5C3.39543 9.5 2.5 8.60457 2.5 7.5V4.5Z" fill="#E54335"/><path d="M4 4.5C4 4.22386 4.22386 4 4.5 4H7.5C7.77614 4 8 4.22386 8 4.5V7.5C8 7.77614 7.77614 8 7.5 8H4.5C4.22386 8 4 7.77614 4 7.5V4.5Z" stroke="#F9F6F1" strokeWidth="0.8"/></svg>
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">{contactInfo.phone}</a>
                    </div>
                  )}
                  {contactInfo.address && (
                    <div className="flex items-center gap-3">
                      <div className="w-[11px] h-[11px] rounded-full bg-[rgba(249,246,241,0.8)] border-2 border-[#162331]" />
                      <span>{contactInfo.address}</span>
                    </div>
                  )}
                </div>
                {socialLinks && socialLinks.length > 0 && (
                  <div className="flex items-center gap-4 mt-2">
                    {socialLinks.map((social: any, idx: number) => (
                      <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[rgba(249,246,241,0.8)] hover:text-white transition-colors">
                        {getSocialIcon(social.platform)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* People / Products Area */}
              <div className="gsap-animate hidden lg:flex flex-col gap-6 pl-12 mt-8 md:mt-0">
                <div className="w-[46px] h-[1.5px] bg-[rgba(249,246,241,0.2)]" />
                <div className="text-[10.5px] text-[rgba(249,246,241,0.9)] font-medium tracking-[2.5px] leading-[22px]">
                  {rightText.map((text: string, idx: number) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="gsap-animate border-t border-[rgba(249,246,241,0.1)] py-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-[10px] text-[rgba(249,246,241,0.6)] px-2">
            <p>{copyright}</p>
            <div className="flex items-center gap-3 md:gap-4">
              {bottomLinks.map((linkItem: any, i: number) => (
                <React.Fragment key={i}>
                  {renderLink(linkItem, i)}
                  {i < bottomLinks.length - 1 && <span className="text-[rgba(249,246,241,0.3)]">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
        </footer>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageBuilderPage from "@/app/components/PageBuilder";
import { getHomePageQuery } from "@/sanity/lib/queries";
import { GetPageQueryResult } from "@/sanity.types";
import { PageOnboarding } from "@/app/components/Onboarding";
import { sanityFetchCustom } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import App from "next/app";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWeMake from "../components/WhatWeMake";
import ManufacturingPartnership from "../components/ManufacturingPartnership";
import OurProcess from "../components/OurProcess";
import OurImpact from "../components/OurImpact";
import OurCommitment from "../components/OurCommitment";
import BetterProducts from "../components/BetterProducts";
import ContactFooter from "../components/ContactFooter";
import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import WhatWeStandFor from "../components/WhatWeStandFor";

/**
 * Generate metadata for the page.
 */
export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityFetchCustom({
    query: getHomePageQuery(),
      tags: ["page"],
  });

  return {
    title: page?.seo?.metaTitle,
    description: page?.seo?.metaDescription,
  } satisfies Metadata;
}

export default async function Page() {
  return (
    <div className="main_page relative">
      <Header />
      <main className="w-full">
        <AboutHero/>
        <OurStory />
        <WhatWeStandFor />
        <ContactFooter />
      </main>
    </div>
  );
}
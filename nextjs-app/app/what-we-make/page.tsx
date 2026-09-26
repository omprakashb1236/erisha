import type { Metadata } from "next";
import PageBuilderPage from "@/app/components/PageBuilder";
import { getHomePageQuery } from "@/sanity/lib/queries";
import { GetPageQueryResult } from "@/sanity.types";
import { PageOnboarding } from "@/app/components/Onboarding";
import { sanityFetchCustom } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import App from "next/app";
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import WhatWeStandFor from "../components/WhatWeStandFor";
import ProductBanner from "../components/ProductBanner";
import CategoryIndex from "../components/CategoryIndex";
import PeopleProductsPlanet from "../components/PeopleProductsPlanet";
import QualityProgress from "../components/QualityProgress";
import ClosingStatement from "../components/ClosingStatement";
import CatalogueControls from "../components/CatalogueControls";
import Products from "../components/Products";
import CoreCapabilities from "../components/CoreCapabilities";
import BuiltAroundYourBrand from "../components/BuiltAroundYourBrand";
import PrivateLabel from "../components/PrivateLabel";

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
        <ProductBanner
          imageAlign="right"
          imageInsideContainer={true}
          backgroundColor="#F9F2EA"
        />
        <CategoryIndex />
        <PeopleProductsPlanet />
        <QualityProgress />
        <ClosingStatement />
        <CatalogueControls />
        <CoreCapabilities />
        <PrivateLabel />
        <BuiltAroundYourBrand />
        <Products />

        <WhatWeStandFor />
        <ContactFooter />
      </main>
    </div>
  );
}
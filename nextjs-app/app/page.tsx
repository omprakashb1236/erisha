import type { Metadata } from "next";
import PageBuilderPage from "@/app/components/PageBuilder";
import { getHomePageQuery, headerQuery, footerQuery } from "@/sanity/lib/queries";
import { GetPageQueryResult } from "@/sanity.types";
import { PageOnboarding } from "@/app/components/Onboarding";
import { sanityFetchCustom } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  const [page, headerData, footerData] = await Promise.all([
    sanityFetchCustom({
      query: getHomePageQuery(),
      tags: ["page"],
    }),
    sanityFetchCustom({
      query: headerQuery,
      tags: ["fragment"],
    }),
    sanityFetchCustom({
      query: footerQuery,
      tags: ["fragment"],
    })
  ]);

  if (!page?._id) {
    return notFound();
  }

  return (
    <div className="main_page relative">
      <Header fragment={headerData?.header} />
      <main className="w-full">
        <PageBuilderPage page={page as GetPageQueryResult} />
      </main>
      <Footer fragment={footerData?.footer} />
    </div>
  );
}

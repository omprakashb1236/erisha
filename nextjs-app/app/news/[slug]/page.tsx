import type { Metadata } from "next";
import PageBuilderPage from "@/app/components/PageBuilder";
import { getNewsDetailQuery } from "@/sanity/lib/queries";
import { sanityFetchCustom } from "@/sanity/lib/client";
import { GetPageQueryResult, News } from "@/sanity.types";
import ImageComp from "@/app/components/CustomImage";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { locale, slug } = params;

  // Adjust slug based on locale
  const updatedSlug = locale === "ar" ? `ar/${slug}` : slug;

  const page = await sanityFetchCustom({
    query: getNewsDetailQuery,
    params: { slug: updatedSlug },
    tags: [`news:${updatedSlug}`],
  });

  return {
    title: page?.seo?.metaTitle,
    description: page?.seo?.metaDescription,
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { locale, slug } = params;
  const updatedSlug = locale === "ar" ? `ar/${slug}` : slug;

  return (
   <div className={`main_page innerPage newsDetailPage textBlack`}>
      News Detail Page
    </div>
  );
}

import type { Metadata } from "next";
import PageBuilderPage from "@/app/components/PageBuilder";
import { getPageQuery } from "@/sanity/lib/queries";
import { GetPageQueryResult } from "@/sanity.types";
import { PageOnboarding } from "@/app/components/Onboarding";
import { sanityFetchCustom } from "@/sanity/lib/client";
import { notFound,redirect  } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params; // Await the promise first
  const { locale, slug } = params; // Destructure params

  // Adjust slug based on locale
  const updatedSlug = locale === "ar" ? `ar/${slug}` : slug;

  const page = await sanityFetchCustom({
    query: getPageQuery,
    params: { slug: updatedSlug },
    tags: [`page:${updatedSlug}`],
  });

  return {
    title: page?.seo?.metaTitle,
    description: page?.heading,
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { locale, slug } = params;
  const updatedSlug = locale === "ar" ? `ar/${slug}` : slug;

  return (
    <>
      Inner pages layout
    </>
  );
}

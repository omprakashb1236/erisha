import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "Page Not Found - [PROJECT_NAME]",
    description:"[PROJECT_NAME]",
  } satisfies Metadata;
}

export default async function Page({ params }: { params: { locale?: string } }) {
  const locale = params?.locale ?? "en";


  return (
    <div className="notFoundPage">
     <div className="notFound min-h-screen px-5 relative flex flex-col justify-center text-center items-center">
      <div className="relative z-10">
      <h1 className="md:text-[2rem] mt-3 mb-5 md:leading-[39px]">Sorry, this page could not be found      </h1>
      <p className="text-[18px] leading-[26px]">We couldn’t find the page you were looking for, or maybe it never<br/> existed. Try heading back to the home page.
      </p>
      <Link className="btn mt-5 text-[18px] leading-[26px] inline-block text-white font-medium bg-[#194bff] px-[15px] py-[10px] rounded-md" href={`/en`}>Back Home</Link>
      </div>
      </div>
  </div>
  );
}

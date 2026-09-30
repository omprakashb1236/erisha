import React from "react";

import { dataAttr } from "@/sanity/lib/utils";
import Cta from "@/app/components/Cta";
import Info from "@/app/components/InfoSection";
import Hero from "@/app/components/Hero"
import ManufacturingPartnership from "@/app/components/ManufacturingPartnership"
import OurProcess from "@/app/components/OurProcess"
import OurImpact from "@/app/components/OurImpact"
import OurCommitment from "@/app/components/OurCommitment"
import BetterProducts from "@/app/components/BetterProducts"
import ProductBanner from "@/app/components/ProductBanner"
import ContactForm from "@/app/components/ContactForm"
import CategoryIndex from "./CategoryIndex";
import OurStory from "./OurStory";
import JourneyOverview from "./JourneyOverview";
import PeopleProductsPlanet from "./PeopleProductsPlanet";
import QualityProgress from "./QualityProgress";
import ClosingStatement from "./ClosingStatement";
import CategoryBlock from "./CategoryBlock";
import WhatWeMake from "./WhatWeMake";
import CoreCapabilities from "./CoreCapabilities";
import BuiltAroundYourBrand from "./BuiltAroundYourBrand";
import PrivateLabel from "./PrivateLabel";
import FooterCta from "./FooterCta";

type BlocksType = {
  [key: string]: React.FC<any>;
};

type BlockType = {
  _type: string;
  _key: string;
};

type BlockProps = {
  index: number;
  block: BlockType;
  pageId: string;
  pageType: string;
};

const Blocks: BlocksType = {
  callToAction: Cta,
  infoSection: Info,
  homeHero : Hero,
  manufacturingPartnership: ManufacturingPartnership,
  ourProcess: OurProcess,
  ourImpact: OurImpact,
  ourCommitment: OurCommitment,
  betterProducts: BetterProducts,
  productBanner: ProductBanner,
  contactForm: ContactForm,
  categoryIndex : CategoryIndex,
  ourStory : OurStory,
  categoryBlock : CategoryBlock,
  journeyOverview : JourneyOverview,
  peopleProductsPlanet : PeopleProductsPlanet,
  qualityProgress : QualityProgress,
  closingStatement : ClosingStatement,
  whatWeMake : WhatWeMake,
  coreCapabilities: CoreCapabilities,
  builtAroundYourBrand: BuiltAroundYourBrand,
  privateLabel: PrivateLabel,
  footerCta : FooterCta
};

/**
 * Used by the <PageBuilder>, this component renders a the component that matches the block type.
 */
export default function BlockRenderer({
  block,
  index,
  pageId,
  pageType,
}: BlockProps) {
  // Block does exist
  if (typeof Blocks[block._type] !== "undefined") {
    return (
      <div
        key={block._key}
        data-sanity={dataAttr({
          id: pageId,
          type: pageType,
          path: `pageBuilder[_key=="${block._key}"]`,
        }).toString()}
      >
        {React.createElement(Blocks[block._type], {
          key: block._key,
          block: block,
          index: index,
        })}
      </div>
    );
  }
  // Block doesn't exist yet
  return React.createElement(
    () => (
      <div className="w-full bg-gray-100 text-center text-gray-500 p-20 rounded">
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    { key: block._key },
  );
}



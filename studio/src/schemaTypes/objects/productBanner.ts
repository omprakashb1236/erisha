import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const productBanner = defineType({
  name: "productBanner",
  title: "Product Banner",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "SUSTAINABILITY",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2",
      type: "string",
    }),
    defineField({
      name: "subhead",
      title: "Subhead",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    }),
   defineField({
  name: "captionItem",
  title: "Caption Items",
  type: "array",
  of: [
    {
      type: "object",
      title: "Caption Item",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "string",
        }),
      ],
      preview: {
        select: {
          title: "title",
          subtitle: "text",
        },
      },
    },
  ],
  description:
    "Add caption title and text, e.g. YOUR VISION / Our expertise / One connected journey",
}),
    defineField({
      name: "overlayTextItems",
      title: "Overlay Text Items",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. SMALL, CHOICES., A BIGGER, TOMORROW. If provided, this overrides the individual lines below.",
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "callToAction",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageCaptionItems",
      title: "Image Bottom Caption Items",
      type: "string",
      description: "e.g. DISCOVERY  /  DEVELOPMENT  /  REFINEMENT  /  MAKING.",
    }),
    defineField({
      name: "imageInsideContainer",
      title: "Image Inside Container",
      type: "boolean",
      initialValue: false,
      description: "If true, image stays within the max width. If false, it bleeds to the edge.",
    }),
    defineField({
      name: "imageAlign",
      title: "Image Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "right",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "#fefaf6",
      description: "Hex code (e.g., #fefaf6)",
    }),
  ],
  preview: {
    select: {
      title: "headlineLine1",
      subtitle: "headlineLine2",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Product Banner",
        subtitle: subtitle,
        media: media,
      };
    },
  },
});

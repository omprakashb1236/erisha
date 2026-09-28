import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const qualityProgress = defineType({
  name: "qualityProgress",
  title: "Quality & Progress",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "QUALITY & PROGRESS",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
      initialValue: "Quality is part of",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2",
      type: "string",
      initialValue: "responsibility.",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "statValue",
              title: "Stat Value",
              type: "string",
            }),
            defineField({
              name: "statTitle",
              title: "Stat Title",
              type: "string",
            }),
            defineField({
              name: "statSubtitle",
              title: "Stat Subtitle",
              type: "string",
            }),
            defineField({
              name: "isMediumSize",
              title: "Use Medium Size for Value",
              type: "boolean",
              description: "Turn this on for longer text like 'GLOBAL' to prevent line breaks.",
              initialValue: false,
            }),
          ],
        },
      ],
      description: "List of stats. Recommended exactly 4 for layout.",
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
      description: "List of photos. Recommended exactly 4 for layout.",
    }),
  ],
  preview: {
    select: {
      title: "headlineLine1",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Quality & Progress",
        subtitle: subtitle,
      };
    },
  },
});

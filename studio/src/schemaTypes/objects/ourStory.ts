import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const ourStory = defineType({
  name: "ourStory",
  title: "Our Story",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "OUR STORY",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
      initialValue: "A clear vision,",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2",
      type: "string",
      initialValue: "grown carefully.",
    }),
    defineField({
      name: "subhead",
      title: "Subhead",
      type: "string",
      initialValue: "From a focused beginning to a trusted manufacturing partner.",
    }),
    defineField({
      name: "paragraph1",
      title: "Paragraph 1",
      type: "text",
    }),
    defineField({
      name: "paragraph2",
      title: "Paragraph 2",
      type: "text",
    }),
    defineField({
      name: "timelineItems",
      title: "Timeline Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title (e.g. 2018 or TODAY)",
              type: "string",
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            }),
            defineField({
              name: "isHighlighted",
              title: "Highlight Color",
              type: "boolean",
              description: "If true, displays the title in the brand color (#b86e58).",
              initialValue: false,
            }),
            defineField({
              name: "titleSize",
              title: "Title Size",
              type: "string",
              options: {
                list: [
                  { title: "Large (43px)", value: "large" },
                  { title: "Medium (32px)", value: "medium" },
                ],
                layout: "radio",
              },
              initialValue: "large",
              description: "Use Medium for longer text like 'CLOVIA & RELIANCE'",
            })
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "subtitle",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "headlineLine1",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Our Story",
        subtitle: subtitle,
      };
    },
  },
});

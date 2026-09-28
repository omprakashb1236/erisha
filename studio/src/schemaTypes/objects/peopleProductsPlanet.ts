import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const peopleProductsPlanet = defineType({
  name: "peopleProductsPlanet",
  title: "People, Products, Planet (Approach)",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "OUR APPROACH",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
      initialValue: "Responsibility,",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2",
      type: "string",
      initialValue: "considered as a whole.",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        },
      ],
      description: "List of pillars (e.g. People, Products, Planet). The numbering (01, 02...) is automatic. Max 3 recommended for optimal layout.",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "headlineLine1",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "People, Products, Planet",
        subtitle: subtitle,
      };
    },
  },
});

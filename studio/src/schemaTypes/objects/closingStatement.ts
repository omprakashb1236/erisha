import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const closingStatement = defineType({
  name: "closingStatement",
  title: "Closing Statement",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "A MORE CONSCIOUS TOMORROW",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      initialValue: "Progress is built one decision at a time.",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "headline",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Closing Statement",
        subtitle: subtitle,
      };
    },
  },
});

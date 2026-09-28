import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const journeyOverview = defineType({
  name: "journeyOverview",
  title: "Journey Overview",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "THE JOURNEY",
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "string" }],
      description: "List of steps in the journey. The numbers (01, 02) will be added automatically.",
    }),
  ],
  preview: {
    select: {
      title: "eyebrow",
    },
    prepare({ title }) {
      return {
        title: title || "Journey Overview",
      };
    },
  },
});

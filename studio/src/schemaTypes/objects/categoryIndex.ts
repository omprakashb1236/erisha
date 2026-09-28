import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const categoryIndex = defineType({
  name: "categoryIndex",
  title: "Category Index",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title / Eyebrow",
      type: "string",
      initialValue: "EXPLORE THE CATEGORIES",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID / Number",
              type: "string",
              description: "e.g. 01, 02",
            }),
            defineField({
              name: "categoryReference",
              title: "Product Line Category",
              type: "reference",
              to: [{ type: "productLine" }],
            }),
          ],
          preview: {
            select: {
              title: "categoryReference.title",
              subtitle: "id",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || "Category",
                subtitle: subtitle ? `ID: ${subtitle}` : "",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Category Index",
      };
    },
  },
});

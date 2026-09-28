import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const contactForm = defineType({
  name: "contactForm",
  title: "Contact Form",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "LET'S CREATE TOGETHER",
    }),
    defineField({
      name: "headingLine1",
      title: "Heading Line 1",
      type: "string",
      initialValue: "Your next collection",
    }),
    defineField({
      name: "headingLine2",
      title: "Heading Line 2 (Italic)",
      type: "string",
      initialValue: "starts with",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "features",
      title: "Features (Icons & Text)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
            }),
            defineField({
              name: "title",
              title: "Title (use \\n for line breaks)",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "bottomMicrocopy",
      title: "Bottom Microcopy",
      type: "string",
      initialValue: "BEAUTIFUL PRODUCTS. BRIGHTER POSSIBILITIES.",
    }),
    // Form fields Configuration
    defineField({
      name: "namePlaceholder",
      title: "Name Field Placeholder",
      type: "string",
      initialValue: "Your Name *",
    }),
    defineField({
      name: "companyPlaceholder",
      title: "Company Field Placeholder",
      type: "string",
      initialValue: "Company / Brand *",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Email Field Placeholder",
      type: "string",
      initialValue: "Work Email *",
    }),
    defineField({
      name: "projectPlaceholder",
      title: "Project Field Placeholder",
      type: "string",
      initialValue: "What are you looking to develop? *",
    }),
    defineField({
      name: "projectOptions",
      title: "Project Dropdown Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quantityPlaceholder",
      title: "Quantity Field Placeholder",
      type: "string",
      initialValue: "Approximate quantities",
    }),
    defineField({
      name: "quantityOptions",
      title: "Quantity Dropdown Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "messagePlaceholder",
      title: "Message Field Placeholder",
      type: "string",
      initialValue: "Tell us more about your project",
    }),
    defineField({
      name: "buttonText",
      title: "Submit Button Text",
      type: "string",
      initialValue: "Start a Conversation",
    }),
    defineField({
      name: 'footerImage',
      type: 'image',
      title: 'Footer Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for accessibility and SEO',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "headingLine1",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Form",
        subtitle: subtitle,
      };
    },
  },
});

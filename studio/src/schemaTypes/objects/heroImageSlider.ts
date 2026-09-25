// heroImageSlider.ts (Sanity Schema)
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroImageSlider',
  type: 'object',
  title: 'Hero Image Slider',
  fields: [
    defineField({
      name: 'slides',
      type: 'array',
      title: 'Slides',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
          fields: [
            defineField({
              name: 'desktopImage',
              type: 'image',
              title: 'Desktop Image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'mobileImage',
              type: 'image',
              title: 'Mobile Image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'tabImage',
              type: 'image',
              title: 'Tablet Image',
              options: { hotspot: true },
            }),
            // Add other fields for headings, buttons, etc. if needed
            // e.g.,
            // defineField({
            //   name: 'heading',
            //   type: 'string',
            //   title: 'Heading',
            // }),
            // defineField({
            //   name: 'buttonText',
            //   type: 'string',
            //   title: 'Button Text',
            // }),
            // defineField({
            //     name: 'buttonLink',
            //     type: 'url',
            //     title: 'Button Link'
            // })
          ],
        },
      ],
    }),
  ],
});
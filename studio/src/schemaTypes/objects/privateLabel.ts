import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const privateLabel = defineType({
  name: 'privateLabel',
  title: 'Private Label',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Left side image.',
      options: { hotspot: true }
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'E.g., PRIVATE LABEL',
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line',
      type: 'string',
      description: 'E.g., Made for your brand,',
    }),
    defineField({
      name: 'quote',
      title: 'Quote (Italic)',
      type: 'text',
      description: 'E.g., A product can be developed as deeply as the brief requires.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Intro text below the quote.',
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Capability Title (e.g., PRODUCT & FIT)' }),
            defineField({ name: 'description', type: 'text', title: 'Capability Description' }),
          ],
        },
      ],
      validation: (rule) => rule.max(4).warning('It looks best with 4 or fewer items.'),
    }),
  ],
  preview: {
    select: {
      title: 'headingLine1',
      subtitle: 'headingLine2',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Private Label Section',
        subtitle: subtitle || 'Private Label',
        media: media || ComponentIcon,
      }
    },
  },
})

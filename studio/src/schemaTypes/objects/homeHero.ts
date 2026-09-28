import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homeHero = defineType({
  name: 'homeHero',
  title: 'Home Hero',
  type: 'object',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'E.g., BOUTIQUE MANUFACTURING FOR...'
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      description: 'E.g., Thoughtfully'
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
      description: 'E.g., crafted for'
    }),
    defineField({
      name: 'headingLine3',
      title: 'Heading Line 3 (Italic)',
      type: 'string',
      description: 'E.g., every body.'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'primaryCta',
      type: 'callToAction',
      title: 'Primary Call to Action',
    }),
    defineField({
      name: 'secondaryCta',
      type: 'callToAction',
      title: 'Secondary Call to Action',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Fabric Detail Thumbnail',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'bottomMicrocopy',
      title: 'Bottom Microcopy (Lines)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., BETTER, PRODUCTS, A BRIGHTER, TOMORROW'
    }),
  ]
})

import {ProjectsIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productLine = defineType({
  name: 'productLine',
  title: 'Product Line / Category',
  type: 'document',
  icon: ProjectsIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'media', title: 'Media' },
    { name: 'relationships', title: 'Relationships' },
    { name: 'filters', title: 'Product Line Filters' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'Used for the main title.',
      group: 'general',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Used for the bold italic text below the main title.',
      group: 'general',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'general',
    }),
    defineField({
      name: 'bottomTags',
      title: 'Bottom Tags',
      type: 'string',
      description: 'Used for the small uppercase tags at the bottom of the hero (e.g. PRIVATE LABEL / DEVELOPMENT).',
      group: 'general',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      group: 'media',
    }),
    defineField({
      name: 'productFamilies',
      title: 'Product Families',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'productFamily' }] }],
      group: 'relationships',
      description: 'The product families belonging to this product line.',
    }),
    // Product Line-level filter configurations
    defineField({
      name: 'filterType',
      title: 'Type Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterWire',
      title: 'Wire / Non-Wire Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterPadding',
      title: 'Padding Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterSupport',
      title: 'Support Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterFabric',
      title: 'Fabric Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
})

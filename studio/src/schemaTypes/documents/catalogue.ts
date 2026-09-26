import {BookIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const catalogue = defineType({
  name: 'catalogue',
  title: 'Catalogue',
  type: 'document',
  icon: BookIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'media', title: 'Media' },
    { name: 'relationships', title: 'Relationships' },
    { name: 'filters', title: 'Catalogue Filters' },
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
      name: 'productLines',
      title: 'Product Lines / Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'productLine' }] }],
      group: 'relationships',
      description: 'The product lines available in this catalogue.',
    }),
    // Catalogue-level filter configurations
    defineField({
      name: 'filterCategory',
      title: 'Category Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterProductType',
      title: 'Product Type Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterGenderFit',
      title: 'Gender / Fit Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterFabricDescription',
      title: 'Fabric Description Filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filterOption' }] }],
      group: 'filters',
    }),
    defineField({
      name: 'filterConstruction',
      title: 'Construction Filters',
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

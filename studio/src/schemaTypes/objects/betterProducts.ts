import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const betterProducts = defineType({
  name: 'betterProducts',
  title: 'Better Products',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string' }),
    defineField({ name: 'headingLine2', title: 'Heading Line 2', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'image' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle (use \\n for line breaks)', type: 'string' })
          ]
        }
      ]
    }),
    defineField({ name: 'ctaButton', title: 'CTA Button', type: 'callToAction' }),
    defineField({
      name: 'rightMicrocopy',
      title: 'Right Floating Microcopy',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({ name: 'rightImage', title: 'Right Side Image', type: 'image', options: { hotspot: true } }),
    
    // Footer Banner elements
    defineField({ name: 'footerBannerTitle', title: 'Footer Banner Title (e.g. E R I S H A)', type: 'string' }),
    defineField({ name: 'footerBannerSubtitle', title: 'Footer Banner Subtitle (e.g. I N T E R N A T I O N A L)', type: 'string' }),
    defineField({
      name: 'footerBannerCenterMicrocopy',
      title: 'Footer Banner Center Microcopy',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'footerBannerRightMicrocopy',
      title: 'Footer Banner Right Microcopy',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
})

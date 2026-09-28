import { defineField, defineType } from 'sanity'
import { HeartIcon } from '@sanity/icons'

export const ourCommitment = defineType({
  name: 'ourCommitment',
  title: 'Our Commitment',
  type: 'object',
  icon: HeartIcon,
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
            defineField({ name: 'title', title: 'Title (use \\n for line breaks)', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle (use \\n for line breaks)', type: 'string' })
          ]
        }
      ]
    }),
    defineField({
      name: 'rightMicrocopy',
      title: 'Right Microcopy',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' })
          ]
        }
      ]
    }),
    defineField({ name: 'rightCTAHeadingLine1', title: 'Right CTA Heading Line 1', type: 'string' }),
    defineField({ name: 'rightCTAHeadingLine2', title: 'Right CTA Heading Line 2', type: 'string' }),
    defineField({ name: 'rightCTAHeadingLine3', title: 'Right CTA Heading Line 3 (Italic)', type: 'string' }),
    defineField({ name: 'rightCTADescription', title: 'Right CTA Description', type: 'text' }),
    defineField({ name: 'ctaButton', title: 'CTA Button', type: 'callToAction' }),
    defineField({
      name: 'rightGraphicText',
      title: 'Right Graphic Text Detail',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics Banner Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Metric Value (e.g. 100%)', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'string' })
          ]
        }
      ]
    }),
    defineField({
      name: 'metricsBadgeText',
      title: 'Metrics Badge Text',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({ name: 'footerBannerLeftText', title: 'Footer Banner Left Text', type: 'string' }),
    defineField({ name: 'footerBannerRightText', title: 'Footer Banner Right Text', type: 'string' })
  ]
})

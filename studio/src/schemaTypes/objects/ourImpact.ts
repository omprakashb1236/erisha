import { defineField, defineType } from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export const ourImpact = defineType({
  name: 'ourImpact',
  title: 'Our Impact',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string' }),
    defineField({ name: 'headingLine2', title: 'Heading Line 2', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g. 20+)', type: 'string' }),
            defineField({ name: 'label', title: 'Label (use \\n for line breaks)', type: 'string' })
          ]
        }
      ]
    }),
    defineField({ name: 'mapImage', title: 'Map Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'globalPartnerTitle', title: 'Global Partner Title', type: 'string' }),
    defineField({ name: 'globalPartnerDescription', title: 'Global Partner Description', type: 'text' }),
    defineField({ name: 'ctaButton', title: 'CTA Button', type: 'callToAction' }),
    defineField({ name: 'rightImage', title: 'Right Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'brandsStripTitle', title: 'Brands Strip Title', type: 'string' }),
    defineField({
      name: 'brandLogos',
      title: 'Brand Logos',
      type: 'array',
      of: [{ type: 'image' }]
    }),
defineField({ name: 'footerStatementStripLft', title: 'Footer Statement Strip Left', type: 'string' }),
defineField({ name: 'footerStatementStripRgt', title: 'Footer Statement Strip Right', type: 'string' }),
  ]
})

import { defineField, defineType } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export const ourProcess = defineType({
  name: 'ourProcess',
  title: 'Our Process',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string' }),
    defineField({ name: 'headingLine2', title: 'Heading Line 2', type: 'string' }),
    defineField({ name: 'headingLine3', title: 'Heading Line 3', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'rightMicrocopy',
      title: 'Right Microcopy',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'num', title: 'Number (e.g. 01)', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description Lines', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'img', title: 'Image', type: 'image', options: { hotspot: true } })
          ]
        }
      ]
    }),
    defineField({
      name: 'footerLeftMicrocopy',
      title: 'Footer Left Microcopy',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'footerValues',
      title: 'Footer Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title (use \\n for line breaks)', type: 'string' }),
            defineField({ name: 'icon', title: 'Icon', type: 'image' })
          ]
        }
      ]
    }),
    defineField({
      name: 'footerRightMicrocopy',
      title: 'Footer Right Microcopy',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Footer CTA Button',
      type: 'callToAction'
    })
  ]
})

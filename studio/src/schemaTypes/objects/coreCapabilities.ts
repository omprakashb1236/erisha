import { defineField, defineType } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export const coreCapabilities = defineType({
  name: 'coreCapabilities',
  title: 'Core Capabilities',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'E.g., WHAT WE DO',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'E.g., Expertise where the product needs it.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Intro text below the heading.',
    }),
    defineField({
      name: 'quote',
      title: 'Quote (Italic)',
      type: 'text',
      description: 'E.g., One team carries context forward...',
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'string', title: 'Number (e.g., 01)' }),
            defineField({ name: 'title', type: 'string', title: 'Title (Use \\n for line breaks)' }),
            defineField({ name: 'description', type: 'text', title: 'Description' }),
            defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'number',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Core Capabilities Section',
        subtitle: 'Core Capabilities',
        media: ThListIcon,
      }
    },
  },
})

import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const developmentFocus = defineType({
  name: 'developmentFocus',
  title: 'Development Focus',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'E.g., DEVELOPMENT FOCUS',
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      description: 'E.g., What we resolve',
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
      description: 'E.g., before production.',
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Feature Title (e.g., FIT & PROPORTION)' }),
            defineField({ name: 'description', type: 'text', title: 'Feature Description' }),
          ],
        },
      ],
      validation: (rule) => rule.max(4).warning('It looks best with 4 or fewer items.'),
    }),
  ],
})

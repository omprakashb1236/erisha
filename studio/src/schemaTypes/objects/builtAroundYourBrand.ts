import { defineField, defineType } from 'sanity'
import { CheckmarkCircleIcon } from '@sanity/icons'

export const builtAroundYourBrand = defineType({
  name: 'builtAroundYourBrand',
  title: 'Built Around Your Brand',
  type: 'object',
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'E.g., MANUFACTURING, BUILT AROUND YOUR BRAND',
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      description: 'E.g., Flexible where it matters.',
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
      description: 'E.g., Structured where it counts.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Intro text below the heading.',
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Feature Title (e.g., LOW MOQ)' }),
            defineField({ name: 'description', type: 'text', title: 'Feature Description' }),
          ],
        },
      ],
      validation: (rule) => rule.max(4).warning('It looks best with 4 or fewer items.'),
    }),
    defineField({
      name: 'bottomCaption',
      title: 'Bottom Caption',
      type: 'string',
      description: 'E.g., YOUR PRODUCT  /  YOUR STANDARDS  /  YOUR BRAND',
    }),
  ],
  preview: {
    select: {
      title: 'headingLine1',
      subtitle: 'headingLine2',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Built Around Your Brand Section',
        subtitle: subtitle || 'Built Around Your Brand',
        media: CheckmarkCircleIcon,
      }
    },
  },
})

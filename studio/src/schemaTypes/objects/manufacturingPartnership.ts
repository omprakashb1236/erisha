import { defineField, defineType } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export const manufacturingPartnership = defineType({
  name: 'manufacturingPartnership',
  title: 'Manufacturing Partnership',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'E.g., MANUFACTURING, BUILT AROUND YOUR BRAND'
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
            name: "buttonText",
            title: "Explore Our Capabilities Label",
            type: "callToAction",
        }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'description', type: 'text', title: 'Description' })
          ]
        }
      ],
      description: 'List of process steps (01 to 06)'
    }),
    defineField({
      name: 'bottomTags',
      title: 'Bottom Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., LOW MOQ, FLEXIBLE DEVELOPMENT, etc.'
    }),
    defineField({
      name: 'blueprintImage',
      title: 'Blueprint Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'circleMicrocopy',
      title: 'Circle Microcopy (Lines)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., IDEAS, INTO, EVERYDAY, COMFORT'
    }),
    defineField({
      name: 'blueprintMicrocopy',
      title: 'Blueprint Microcopy (Lines)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g., FIT, FUNCTION, BEAUTY, TOGETHER'
    }),
  ]
})

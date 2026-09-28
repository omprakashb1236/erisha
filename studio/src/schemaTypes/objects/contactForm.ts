import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactForm = defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string' }),
    defineField({ name: 'headingLine2', title: 'Heading Line 2', type: 'string' }),
    defineField({ name: 'headingLine3', title: 'Heading Line 3 (Italic)', type: 'string' }),
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
            defineField({ name: 'title', title: 'Title (use \\n for line breaks)', type: 'string' })
          ]
        }
      ]
    }),
    defineField({ name: 'bottomMicrocopy', title: 'Bottom Microcopy', type: 'string' })
  ]
})

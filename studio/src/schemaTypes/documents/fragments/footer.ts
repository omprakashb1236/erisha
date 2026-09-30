import { defineField, defineType } from 'sanity'
import { InsertAboveIcon } from '@sanity/icons'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  icon: InsertAboveIcon,
  groups: [
    { name: 'footerInfo', title: 'Footer Info' },
    { name: 'contactForm', title: 'Contact Form' },
  ],
  fields: [
    defineField({
      name: 'contactForm',
      title: 'Contact Form',
      type: 'contactForm',
      group: 'contactForm'
    }),
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'footerInfo' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string', group: 'footerInfo' }),
    defineField({
      name: 'descriptionLines',
      title: 'Description Lines',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'footerInfo'
    }),
    defineField({
      name: 'linkColumns',
      title: 'Link Columns',
      type: 'array',
      group: 'footerInfo',
      of: [
        {
          name: 'linkColumn',
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Column Heading', type: 'string' }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [{ type: 'callToAction' }]
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'bottomLinks',
      title: 'Bottom Links',
      type: 'array',
      of: [{ type: 'callToAction' }],
      group: 'footerInfo'
    }),
    defineField({ name: 'copyright', title: 'Copyright Text', type: 'string', group: 'footerInfo' })
  ]
})







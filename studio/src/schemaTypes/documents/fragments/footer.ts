import { defineField, defineType } from 'sanity'
import { InsertAboveIcon } from '@sanity/icons'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  icon: InsertAboveIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({
      name: 'descriptionLines',
      title: 'Description Lines',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'linkColumns',
      title: 'Link Columns',
      type: 'array',
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
      of: [{ type: 'callToAction' }]
    }),
    defineField({ name: 'copyright', title: 'Copyright Text', type: 'string' })
  ]
})







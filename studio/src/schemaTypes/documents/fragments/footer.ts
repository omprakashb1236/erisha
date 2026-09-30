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
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      group: 'footerInfo',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'GET IN TOUCH' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'string' })
      ]
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      group: 'footerInfo',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform', type: 'string', options: { list: ['linkedin', 'instagram', 'twitter', 'facebook'] } }),
            defineField({ name: 'url', title: 'URL', type: 'url' })
          ]
        }
      ]
    }),
    defineField({
      name: 'rightText',
      title: 'Right Side Text',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'footerInfo',
      description: 'E.g. PEOPLE, PRODUCTS, A BRIGHTER TOMORROW'
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

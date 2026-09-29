import { defineField, defineType } from 'sanity'

export const whatWeMake = defineType({
  name: 'whatWeMake',
  title: 'What We Make',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'E.g., WHAT WE MAKE'
    }),
    defineField({
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
      description: 'E.g., Designed'
    }),
    defineField({
      name: 'headingLine2',
      title: 'Heading Line 2 (Italic)',
      type: 'string',
      description: 'E.g., every category.'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'callToAction',
    }),
    defineField({
      name: 'productLinesCategories',
      title: 'Product Lines Categories (Bottom)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'productLine',
              title: 'Product Line Category',
              type: 'reference',
              to: [{ type: 'productLine' }],
            }),
            defineField({
              name: 'productFamilies',
              title: 'Product Families (Carousel)',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'productFamily' }] }],
            }),
          ],
          preview: {
            select: {
              title: 'productLine.title',
            },
            prepare({ title }) {
              return {
                title: title || 'Unnamed Category',
              }
            }
          }
        },
      ],
    }),
  ]
})

import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const filterOption = defineType({
  name: 'filterOption',
  title: 'Filter Option / Taxonomy',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'filterType',
      title: 'Filter Type',
      type: 'string',
      options: {
        list: [
          {title: 'Category', value: 'category'},
          {title: 'Product Type', value: 'productType'},
          {title: 'Gender / Fit', value: 'genderFit'},
          {title: 'Fabric Description', value: 'fabricDescription'},
          {title: 'Construction', value: 'construction'},
          {title: 'Type', value: 'type'},
          {title: 'Wire / Non-Wire', value: 'wire'},
          {title: 'Padding', value: 'padding'},
          {title: 'Support', value: 'support'},
          {title: 'Cup Range', value: 'cupRange'},
          {title: 'Fabric', value: 'fabric'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description of the filter.',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order in which this filter appears in the UI (e.g. 1 for first).',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Is this filter option currently active/selectable?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'filterType',
    },
  },
})

import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'news',
  title: 'news',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { name: 'basic', title: 'Basic' },
    { name: 'seo', title: 'SEO Metadata' },
  ],
  fields: [
    defineField({
      name : 'isNevNews',
      title : 'Is NEV News',
      type : 'boolean',
      description : 'True only for NEV related news'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'basic',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      description: 'image size should be 561x287 pixels',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),
    defineField({
        name: 'publishDate', // Name of the date field
        title: 'Publish Date', // Label displayed in Sanity Studio
        type: 'date',
        description: 'Select the date this news item should be published.', // Optional description
        options: {
          dateFormat: 'YYYY-MM-DD', // Optional: Customize date format in the Studio
          // minDate: '2023-01-01', // Optional: Minimum date
          // maxDate: '2024-12-31', // Optional: Maximum date
        },
        group: 'basic', // Or whatever group you want it in
        validation: (Rule) => Rule.required(), // Optional: Make the date required
      }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [{type:'richText'},{type:'image'}
    ], 
      options: {
        insertMenu: {
          // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/array-type#efb1fe03459d
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
      group: 'basic',
    }),
    defineField({
      title: "Seo",
      name: "seo",
      type: "seoMetaFields",
      group: 'seo',
    }),
defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'boolean',
      description: 'Highlight this news item',
      group: 'basic',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle : `slug : ${subtitle}`,
      }
    }
  }
})
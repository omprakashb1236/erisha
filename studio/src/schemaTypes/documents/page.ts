import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'
/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { name: 'basic', title: 'Basic' },
    { name: 'seo', title: 'SEO Metadata' },
    { name: 'advanced', title: 'Advanced' },
  ],
  fields: [
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
      name: "blackBackground",
      type: "boolean",
      title: "Active White Background",
      description: "Toggle to enable Text black and white Background",
      initialValue: false, // Default value (optional)
    }),
    defineField({
      name: 'redirect',
      type: 'url',
      title: 'Redirection Url',
      group: 'advanced',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',

      of: [
        
      ],

      options: {
        insertMenu: {
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
      title: 'Seo',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
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
        subtitle: `slug : ${subtitle}`,
      };
    },
  },
});

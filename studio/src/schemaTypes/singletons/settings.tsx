import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

import * as demo from '../../lib/initialValues'

/**
 * Settings schema Singleton.  Singletons are single documents that are displayed not in a collection, handy for things like site settings and other global configurations.
 * Learn more: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
 */

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic',
    },
    {
      name: 'social',
      title: 'Social',
    },
  ],

  fields: [
    defineField({
      name : 'logo',
      type : 'customImage',
      title : 'Logo',
      description : 'The logo displayed in the header of your site.',
    }),
    defineField({
      name: 'copyrightText',
      title: 'CopyRight Text',
      type: 'string',
      group: 'basic',
    }),
    defineField({
      name: 'title',
      description: 'This field is the title of your Site.',
      title: 'Title',
      type: 'string',
      initialValue: demo.title,
      validation: (rule) => rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'description',
      description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Description',
      type: 'array',
      initialValue: demo.description,
      of: [
        // Define a minified block content field for the description. https://www.sanity.io/docs/block-content
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      group: 'basic',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        defineField({
          name: 'alt',
          description: 'Important for accessibility and SEO.',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        }),
        defineField({
          name: 'metadataBase',
          type: 'url',
          description: (
            <a
              href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase"
              rel="noreferrer noopener"
            >
              More information
            </a>
            ),
          }),
          ],
          group: 'basic',
        }),
        defineField({
          name: 'facebookLink',
          title: 'Facebook Link',
          type: 'url',
          group: 'social',
        }),
        defineField({
          name: 'instagramLink',
          title: 'Instagram Link',
          type: 'url',
          group: 'social',
        }),
        defineField({
          name: 'twitterLink',
          title: 'Twitter Link',
          type: 'url',
          group: 'social',
        }),
        defineField({
          name: 'youtubeLink',
          title: 'YouTube Link',
          type: 'url',
          group: 'social',
        }),
        ],
        preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
import { defineType, defineField, defineArrayMember } from 'sanity'

export const fragment = defineType({
  name: 'fragment',
  type: 'document',
  title: 'Fragment',
  groups: [
    { name: 'details', title: 'Basic Details' },
  ],
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      title: 'Fragment Type ',
      options: {
        list: ['Header', 'Footer', 'SideKick'],
        layout: 'dropdown'
      },
      readOnly: true,
      hidden : true,
      group: 'details'
    }),

    /* fields for header */
    defineField({
      name: 'header',
      type: 'header',
      title: 'Header',
      hidden: (({ document }) => !document?.type || document?.type == 'Footer' || document?.type == 'SideKick'),
      group: 'details'
    }),
  

    /* feilds for Footer */
    defineField({
      name: 'footer',
      type: 'footer',
      title: 'Footer',
      hidden: (({ document }) => !document?.type || document?.type == 'Header' || document?.type == 'SideKick'),
      group: 'details'
    }),

    /* feilds for Footer */
    defineField({
      name: 'sideKickSection',
      type: 'sideKickSection',
      title: 'Side Kick Section',
      hidden: (({ document }) => !document?.type || document?.type == 'Header' || document?.type == 'Footer'),
      group: 'details'
    }),
    

  ],
  preview: {
    select: {
      title: "type",
    },
    prepare({ title }) {
      return {
        title: title + ' Fragment',
      }
    }
  }

});

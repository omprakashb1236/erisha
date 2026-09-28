import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'


export const callToAction = defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  icon: BulbOutlineIcon,
  validation: (Rule) =>
    
    Rule.custom((fields) => {
      const {buttonText, link} = (fields || {}) as any
      const hasLinkTarget = link && (link.href || link.page || link.path || link.post || link.car)
      
      if ((buttonText && hasLinkTarget) || (!buttonText && !hasLinkTarget)) {
        return true
      }
      return 'Both Button text and Button link must be set, or both must be empty'
    }),
  fields: [

    defineField({
      name: 'buttonText',
      title: 'Button text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Button link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: title,
        subtitle: 'Call to Action',
      }
    },
  },
})




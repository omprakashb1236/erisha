import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactSubmission = defineType({
  name: 'contactSubmission',
  title: 'Contact Submissions',
  type: 'document',
  icon: EnvelopeIcon,
  readOnly: true, // Typically, submissions are read-only in the studio
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'company', title: 'Company / Brand', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'project', title: 'Project Type', type: 'string' }),
    defineField({ name: 'quantity', title: 'Approximate Quantities', type: 'string' }),
    defineField({ name: 'message', title: 'Message', type: 'text' }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime' }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      date: 'submittedAt'
    },
    prepare({ title, subtitle, date }) {
      return {
        title: `${title} - ${subtitle}`,
        subtitle: date ? new Date(date).toLocaleString() : 'No date'
      }
    }
  }
})

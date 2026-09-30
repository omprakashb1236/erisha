import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const footerCta = defineType({
  name: 'footerCta',
  title: 'Footer CTA',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({ name: 'ctaEyebrow', title: 'Eyebrow', type: 'string', description: 'e.g. HAVE A PRODUCT IN MIND?' }),
    defineField({ name: 'ctaHeading', title: 'Heading', type: 'string', description: 'e.g. Tell us what you want to build.' }),
    defineField({ name: 'ctaDescription', title: 'Description', type: 'text', description: 'e.g. Share a reference...' }),
    defineField({ name: 'ctaButtonText', title: 'Button Text', type: 'string', description: 'e.g. Start a Project' }),
    defineField({ name: 'ctaButtonLink', title: 'Button Link', type: 'string', description: 'e.g. /contact' }),
  ],
})

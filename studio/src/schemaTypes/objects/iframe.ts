import { defineField, defineType } from "sanity";


export const iframe = defineType({
    name: 'iframe',
    title: 'Iframe',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the iframe (optional)',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
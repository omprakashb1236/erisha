import { defineField, defineType } from "sanity";

export const navItem = defineType({
    name: 'navItem',
    title: 'Navigation Item',
    type: 'object',

    fields: [
        defineField({
            name: 'title',
            title: 'Navigation Title',
            type: 'string',
            description: 'The title of the navigation item',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
            description: 'The link for the navigation item',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            type: 'boolean',
            name: 'hideInNavigation',
            title: 'Hide in Navigation',
            description: 'Check this box to hide this item in the navigation',
        }),
        defineField({
            type: 'boolean',
            name: 'hasSubPages',
            title: 'Has Sub Pages',
            description: 'Check this box if this item has sub pages',
        }),
        defineField({
            name: 'navigation',
            title: 'Navigation',
            type: 'navigation',
            hidden: ({ parent }) => !parent?.hasSubPages,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            link: 'link.linkType',
        },
        prepare({ title, link }) {
            return {
                title: title,
                subtitle: link,
            };
        },
    },
})
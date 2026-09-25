import { defineType } from "sanity";

export const navigation = defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'object',

    fields: [
        {
            name: 'navItems',
            title: 'Navigation Items',
            type: 'array',
            of: [{ type: 'navItem' }],
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            length: 'navItems.length',
        },
        prepare(length) {
            return {
                title: `Navigation`,
                subtitle : `${length} items`
            }
        }
    }
})
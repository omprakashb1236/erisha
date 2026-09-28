import { defineField, defineType } from "sanity";

export const header = defineType({
    name: 'header',
    title: 'Header Fragment',
    type: 'object',
    fields: [
        defineField({
            name: 'utilityTextLeft',
            title: 'Utility Bar Text Left',
            type: 'string',
        }),
        defineField({
            name: 'utilityTextRight',
            title: 'Utility Bar Text Right',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            type: 'customImage',
            title: 'Logo Image',
        }),
        defineField({
            name: 'logoText',
            type: 'customImage',
            title: 'Logo Text Image',
        }),
        defineField({
            name: 'logoSubtext',
            type: 'customImage',
            title: 'Logo Subtext Image',
        }),
        defineField({
            name: 'primaryNavigationLeft',
            title: 'Primary Navigation (Left)',
            type: 'array',
            of: [{ type: 'callToAction' }],
        }),
        defineField({
            name: 'primaryNavigationRight',
            title: 'Primary Navigation (Right)',
            type: 'array',
            of: [{ type: 'callToAction' }],
        }),
        defineField({
            name: 'ctaButton',
            title: 'CTA Button',
            type: 'callToAction',
        }),
    ],
    preview: {
        select: {
            title: 'utilityTextLeft',
            media: 'logo'
        },
        prepare({ title, media }) {
            return {
                title: title || 'Header Fragment',
                media: media
            }
        }
    }
});

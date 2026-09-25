import { defineField, defineType } from "sanity";

export const footer = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'object',
    fields: [
        defineField({
            name: 'copyrightText',
            type: 'string',
            title: 'Copyright Text',
        }),
        defineField({
            name: 'footerLogo',
            type: 'customImage',
            title: 'Footer Logo',
        }),
        defineField({
            name: 'footerLogo2',
            type: 'customImage',
            title: 'Footer Logo 2',
        }),

        defineField({
            name: 'linkList',
            type: 'linkList',
            title: 'Link List',
            description: 'This link list is below copyright text'
        }),
        defineField({
            name: 'linkList1',
            type: 'linkList',
            title: 'Link List 1',
        }),
        defineField({
            name: 'linkList2',
            type: 'linkList',
            title: 'Link List 2',
        }),
        defineField({
            name: 'linkList3',
            type: 'linkList',
            title: 'Link List 3',
        }),
        defineField({
            name: 'imageLinkArray',
            title: 'StickyLinks',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            type: 'customImage',
                            title: 'Image',
                        }),
                        defineField({
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        }),
                        defineField({
                            name: 'pageLink',
                            title: 'Select Page Link',
                            type: 'reference',
                            to: [{ type: 'page' }],
                        }),
                    ],
                },
            ],
        }),

    ],
});

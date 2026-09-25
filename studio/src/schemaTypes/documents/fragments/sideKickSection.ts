import { defineType } from 'sanity';

export const sideKickSection = defineType({
    name: 'sideKickSection',
    type: 'object',
    title: 'Side Kick Section',
    fields: [
        {
            name: 'logo',
            type: 'customImage',
            title: 'Logo'
        },
        
    ]
});
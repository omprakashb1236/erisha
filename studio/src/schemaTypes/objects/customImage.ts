import { defineField, defineType } from "sanity";

/**
 * Handle any icon, image and logo
 */

export const customImage = defineType({
    name : 'customImage',
    type : 'object',
    title : 'Image Component',

    fields :[
        defineField({
            name : 'image',
            type : 'image',
            title : 'Image',
            validation : rule => rule.required().error("please select image"),
            options : {
                hotspot : true,
            }
        }),
        defineField({
            name : 'altText',
            type : 'string',
            title : 'Alternative Text',
            validation : rule => rule.required().error("please fill this field"),
        }),
        defineField({
            type : 'boolean',
            name : 'isImageFullWidth',
            title : 'Is image full width ?'
        })
    ]
})
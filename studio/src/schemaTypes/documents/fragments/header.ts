import { defineField, defineType } from "sanity";

export const header = defineType({
    name: 'header',
    title: 'Header',
    type: 'object',
    fields: [
        defineField({
            name: 'logo',
            type: 'customImage',
            title: 'Logo Image',
            validation : rule => rule.required().error("please select logo"),
        }),
        defineField({
            name: 'blackLogo',
            type: 'customImage',
            title: 'Black Logo Image',
            validation : rule => rule.required().error("please select logo"),
        }),
        defineField({
            name: 'navigation',
            type: 'navigation',
            title: 'Navigation'
        }),
        defineField({
            name: 'searchIcon',
            type: 'customImage',
            title: 'Search Icon',
            validation : rule => rule.required().error("please select searchIcon"),
        }),
        defineField({
            name: 'searchIconBlack',
            type: 'customImage',
            title: 'Search Icon Black',
            validation : rule => rule.required().error("please select searchIcon"),
        }),
        defineField({
            name: 'mapIcon',
            type: 'customImage',
            title: 'Map Icon',
            validation : rule => rule.required().error("please select Map Icon"),
        }),
        defineField({
            name: 'mapIconBlack',
            type: 'customImage',
            title: 'Map Icon Black',
            validation : rule => rule.required().error("please select Map Icon"),
        }),
        defineField({
            name: 'toggleMenuIcon',
            type: 'customImage',
            title: 'Toggle Menu Icon',
            validation : rule => rule.required().error("please select Menu Icon"),
        }),
        defineField({
            name: 'toggleMenuIconBlack',
            type: 'customImage',
            title: 'Toggle Menu Icon Black',
            validation : rule => rule.required().error("please select Menu Icon"),
        }),
    ],
    preview: {
        select: {
            logo: 'logo',
            navItems: 'navigation.navItems'
        },
        prepare({ logo, navItems }) {
            return {
                title: `Header`,
                subtitle: `${navItems.length} navigation items`,
                media: logo
            }
        }
    }
});

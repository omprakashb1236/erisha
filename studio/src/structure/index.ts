import { ColorWheelIcon, ComponentIcon, FolderIcon, UlistIcon, EarthGlobeIcon, TiersIcon, CogIcon, DocumentIcon } from '@sanity/icons'
import type { StructureBuilder, StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title("Pages")
        .schemaType('page')
        .icon(FolderIcon)
        .child(
          S.documentList()
            .id('all-pages')
            .title('All Pages')
            .schemaType('page')
            .filter('_type == "page"')
        ),

      S.listItem()
        .title("News")
        .schemaType('news')
        .icon(UlistIcon)
        .child(
          S.documentList()
            .id('all-news')
            .title('All News')
            .schemaType('news')
            .filter('_type == "news"')
        ),

      S.listItem()
        .title("Header/Footer/SideKick")
        .schemaType('fragment')
        .icon(FolderIcon)
        .child(
          S.documentList()
            .id('all-fragments')
            .title('Fragments')
            .schemaType('fragment')
            .filter('_type == "fragment"')
        ),

      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
    ])

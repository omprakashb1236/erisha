import { ColorWheelIcon, ComponentIcon, FolderIcon, UlistIcon, EarthGlobeIcon, TiersIcon, CogIcon, DocumentIcon, BookIcon, ProjectsIcon, CubeIcon, TagIcon } from '@sanity/icons'
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

      S.divider(),

      // E-COMMERCE SECTION
      S.listItem()
        .title("E-Commerce Catalogue")
        .icon(BookIcon)
        .child(
          S.list()
            .title('Catalogue Management')
            .items([
              S.listItem()
                .title('Catalogue')
                .schemaType('catalogue')
                .icon(BookIcon)
                .child(
                  S.documentList()
                    .id('all-catalogues')
                    .title('Catalogues')
                    .schemaType('catalogue')
                    .filter('_type == "catalogue"')
                ),
              S.listItem()
                .title('Product Lines / Categories')
                .schemaType('productLine')
                .icon(ProjectsIcon)
                .child(
                  S.documentList()
                    .id('all-product-lines')
                    .title('Product Lines')
                    .schemaType('productLine')
                    .filter('_type == "productLine"')
                ),
              S.listItem()
                .title('Product Families')
                .schemaType('productFamily')
                .icon(ComponentIcon)
                .child(
                  S.documentList()
                    .id('all-product-families')
                    .title('Product Families')
                    .schemaType('productFamily')
                    .filter('_type == "productFamily"')
                ),
              S.listItem()
                .title('Products')
                .schemaType('product')
                .icon(CubeIcon)
                .child(
                  S.documentList()
                    .id('all-products')
                    .title('Products')
                    .schemaType('product')
                    .filter('_type == "product"')
                ),
              S.divider(),
              S.listItem()
                .title('Filter Options / Taxonomies')
                .schemaType('filterOption')
                .icon(TagIcon)
                .child(
                  S.documentList()
                    .id('all-filter-options')
                    .title('Filter Options')
                    .schemaType('filterOption')
                    .filter('_type == "filterOption"')
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
    ])

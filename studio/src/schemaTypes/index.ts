import { productBanner } from './objects/productBanner'
import { categoryIndex } from './objects/categoryIndex'
import { ourStory } from './objects/ourStory'
import { categoryBlock } from './objects/categoryBlock'
import news from './documents/news'
import { page } from './documents/page'
import { catalogue } from './documents/catalogue'
import { productLine } from './documents/productLine'
import { productFamily } from './documents/productFamily'
import { product } from './documents/product'
import { filterOption } from './documents/filterOption'

import { callToAction } from './objects/callToAction'
import { customImage } from './objects/customImage'
import { iframe } from './objects/iframe'
import image from './objects/image'
import { link } from './objects/link'
import { linkList } from './objects/linkList'
import { navItem } from './objects/navItem'
import { navigation } from './objects/navigation'
import newsList from './objects/newsList'
import richText from './objects/richText'
import { seo } from './objects/seo'

import { settings } from './singletons/settings'
import { header } from './documents/fragments/header'
import { footer } from './documents/fragments/footer'
import { fragment } from './documents/fragments/fragment'
import { linkItem } from './objects/linkItem'
import { blockContent } from './objects/blockContent'
import { sideKickSection } from './documents/fragments/sideKickSection'

import { homeHero } from './objects/homeHero'
import { manufacturingPartnership } from './objects/manufacturingPartnership'
import { ourProcess } from './objects/ourProcess'
import { ourImpact } from './objects/ourImpact'
import { ourCommitment } from './objects/ourCommitment'
import { betterProducts } from './objects/betterProducts'
import { contactForm } from './objects/contactForm'
import { footerBlock } from './objects/footerBlock'

export const schemaTypes = [
  productBanner,
  categoryIndex,
  ourStory,
  categoryBlock,
  // Singletons
  settings,
  homeHero,
  
  // Documents
  page,
  news,
  fragment,
  catalogue,
  productLine,
  productFamily,
  product,
  filterOption,
  
  // Objects
  manufacturingPartnership,
  ourProcess,
  ourImpact,
  ourCommitment,
  betterProducts,
  contactForm,
  footerBlock,
  callToAction,
  link,
  customImage,
  linkList,
  linkItem,
  blockContent,
  header,
  footer,
  sideKickSection,
  navItem,
  navigation,
  richText,
  image,
  newsList,
  iframe,
  seo,
]



import news from './documents/news'
import { page } from './documents/page'
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

import { settings } from './singletons/settings'
import { header } from './documents/fragments/header'
import { footer } from './documents/fragments/footer'
import { fragment } from './documents/fragments/fragment'
import { linkItem } from './objects/linkItem'
import { blockContent } from './objects/blockContent'
import { sideKickSection } from './documents/fragments/sideKickSection'


export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  news,
  fragment,
  
  // Objects
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
]

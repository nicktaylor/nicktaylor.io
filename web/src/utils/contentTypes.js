import ContentBlock from '~/components/ContentBlock.vue'
import ContentList from '~/components/ContentList.vue'
import ContentHeader from "~/components/ContentHeader.vue";
import IntroVideo from '~/components/IntroVideo'

export const getComponent = content => {
  switch (content._type) {
    case 'fullPortableTextObject':
      return ContentBlock
    case 'header':
      return ContentHeader
    case 'contentList':
      return ContentList
    case 'introVideo':
      return IntroVideo
    default:
      throw `${content._type} not found`
  }
}

export const contentSerializers = {}

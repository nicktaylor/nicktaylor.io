import ContentBlock from '~/components/ContentBlock.vue'
import ContentList from '~/components/ContentList.vue'

export const getComponent = content => {
  switch (content._type) {
    case 'fullPortableTextObject':
      return ContentBlock
    case 'contentList':
      return ContentList
    default:
      throw `${content._type} not found`
  }
}

export const contentSerializers = {}

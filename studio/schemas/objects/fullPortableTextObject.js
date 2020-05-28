import { BsFileRichtext } from 'react-icons/bs'
import fullPortableText from './fullPortableText'

export default {
  name: 'fullPortableTextObject',
  type: 'object',
  title: 'Portable Text Container Object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Describe the content for your reference',
    },
    {
      name: 'content',
      type: 'fullPortableText',
      title: 'Content',
    },
  ],
  preview: {
    select: {
      title: 'name',
      content: 'content',
    },
    prepare(value) {
      const block = (value.content || []).find(block => block._type === 'block')
      return {
        media: BsFileRichtext,
        subtitle: block
          ? block.children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
              .substring(0, 150)
          : 'No title',
        title: value.title,
      }
    },
  },
}

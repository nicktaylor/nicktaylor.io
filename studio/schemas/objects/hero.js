import {
  BsFileRichtext,
  BsArrowUpLeft,
  BsArrowUp,
  BsArrowUpRight,
  BsArrowLeft,
  BsArrowsMove,
  BsArrowRight,
  BsArrowDownLeft,
  BsArrowDown,
  BsArrowDownRight
} from "react-icons/bs";

export default {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    {
      name: 'content',
      type: 'fullPortableText',
      title: 'Content'
    },
    {
      name: 'contentPosition',
      type: 'visualOptions',
      title: 'Content Position',
      options: {
        showTooltip: true,
        optionSize: 'small',
        list: {
          centerTop: {
            name: 'Centre Top',
            icon: BsArrowUp
          },
          centerMiddle: {
            name: 'Centre Middle',
            icon: BsArrowsMove
          },
          centerBottom: {
            name: 'Centre Bottom',
            icon: BsArrowDown
          },
          leftTop: {
            name: 'Left Top',
            icon: BsArrowUpLeft
          },
          leftMiddle: {
            name: 'Left Middle',
            icon: BsArrowLeft
          },
          leftBottom: {
            name: 'Left Bottom',
            icon: BsArrowDownLeft
          },
          rightTop: {
            name: 'Right Top',
            icon: BsArrowUpRight
          },
          rightMiddle: {
            name: 'Right Middle',
            icon: BsArrowRight
          },
          rightBottom: {
            name: 'Right Bottom',
            icon: BsArrowDownRight
          }
        }
      }
    },
    {
      name: 'image',
      type: 'seoImage',
      title: 'Main Background Image',
      description: 'If no image selected, main image from content will be used'
    }
  ],
  preview: {
    select: {
      title: 'content',
      content: 'content',
    },
    prepare(value) {
      const block = (value.content || []).find(block => block._type === 'block')
      return {
        media: BsFileRichtext,
        subtitle: block
            ? block.children
                .filter(child => child.text)
                .map(span => span.text)
                .join('')
                .substring(0, 150)
            : 'No title',
        title: 'Hero',
      }
    },
  },
}

import InternalLink from './internalLink'
import ExternalLink from './externalLink'
import {BsBlockquoteLeft, BsFileCode, BsCardImage} from "react-icons/bs";

export default {
  name: 'fullPortableText',
  type: 'array',
  title: 'Rich Text',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [InternalLink, ExternalLink],
      },
    },
    {
      type: 'contentImage',
      title: 'Image',
      icon: BsCardImage
    },
    {
      type: 'codeBlock',
      title: 'Code Block',
      icon: BsFileCode
    },
    {
      type: 'quote',
      title: 'Quote',
      icon: BsBlockquoteLeft
    }
  ],
}

import {BsArrowsAngleContract, BsArrowsAngleExpand} from "react-icons/bs";

export default {
  name: 'contentImage',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'seoImage',
      title: 'Image'
    },
    {
      name: 'layout',
      type: 'visualOptions',
      title: 'layout',
      options: {
        list: {
          inset: {
            name: 'Inset Image',
            icon: BsArrowsAngleContract
          },
          fullWidth: {
            name: 'Full Width',
            icon: BsArrowsAngleExpand
          }
        }
      }
    },
    {
      name: 'maxHeight',
      type: 'string',
      title: 'Max. Height',
      description: 'Max. height with unit e.g. px or vh'
    }
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      caption: 'image.caption',
      alt: 'image.alt',
      layout: 'layout',
    },
    prepare: ({imageUrl, alt, caption, layout}) => ({
      title: caption ? caption : alt,
      imageUrl: imageUrl,
      subtitle: `Layout: ${layout ? layout : 'Not Set'}`
    })
  }
}
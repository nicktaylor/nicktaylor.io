import {MdTitle} from "react-icons/md";
import {BsArrowsAngleContract, BsArrowsAngleExpand} from "react-icons/bs"

export default {
  name: 'header',
  type: 'object',
  title: 'Header',
  fields: [
    {
      name: 'showDate',
      type: 'boolean',
      title: 'Show Date'
    },
    {
      name: 'showImage',
      type: 'boolean',
      title: 'Show Image'
    },
    {
      name: 'fade',
      type: 'boolean',
      title: 'Fade',
    },
    {
      name: 'layout',
      type: 'visualOptions',
      title: 'Layout',
      options: {
        showTooltip: true,
        optionSize: 'small',
        list: {
          contain: {
            name: 'Contain Image',
            icon: BsArrowsAngleContract,
          },
          cover: {
            name: 'Cover Image',
            icon: BsArrowsAngleExpand
          }
        }
      }
    },
    {
      name: 'image',
      type: 'seoImage',
      title: 'Image',
      description: 'Select an image if you wish to override the content main image'
    },
  ],
  preview: {
    select: {
      showDate: 'showDate',
      showImage: 'showImage',
    },
    prepare(value) {
      return {
        title: `Header${value.showDate ? ', with Date' : ''}${value.showImage? ', with Image' : ''}`,
        media: MdTitle
      }
    }
  }
}
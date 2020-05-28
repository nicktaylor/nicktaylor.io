import {MdTitle} from "react-icons/md";

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
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Select an image if you wish to override the content main image'
    }
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
import { FaFileVideo } from 'react-icons/fa'

export default {
  name: 'videoSource',
  type: 'object',
  title: 'Video Source',
  icon: FaFileVideo,
  fields: [
    {
      name: 'url',
      type: 'string',
      title: 'URL',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      description: 'e.g. video/mp4',
    },
  ],
  preview: {
    select: {
      title: 'url',
      subtitle: 'type',
    },
  },
}
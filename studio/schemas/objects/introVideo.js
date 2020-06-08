import { MdVideoLibrary } from 'react-icons/md'

export default {
  name: 'introVideo',
  type: 'object',
  title: 'Intro Video',
  icon: MdVideoLibrary,
  fields: [
    {
      name: 'sources',
      type: 'array',
      title: 'Video Sources',
      of: [{ type: 'videoSource' }],
    },
  ],
  preview: {
    select: {
      title: 'sources.0.url',
    },
  },
}
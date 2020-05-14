import { BsFileRichtext } from 'react-icons/bs'

export default {
  name: 'content',
  type: 'document',
  title: 'Content',
  fields: [
    {
      name: 'content',
      type: 'contentObject',
      title: 'Content',
    },
  ],
  preview: {
    select: {
      media: 'content.mainImage.asset.url',
      imageUrl: 'content.mainImage.asset.url',
      title: 'content.title',
    },
    prepare: content => ({
      title: content.title,
      imageUrl: content.imageUrl,
      media: content.media && content.media.length != 0 ? null : BsFileRichtext,
    }),
  },
  orderings: [
    {
      name: 'publishDateAsc',
      title: 'Publish date - Old -> New',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishDateDesc',
      title: 'Publish date - New -> Old',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
}

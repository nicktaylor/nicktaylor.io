import colorList from '../../library/color-list'
import { BsTag } from 'react-icons/bs'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().min(2),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'parents',
      type: 'array',
      title: 'Parents',
      of: [{ type: 'reference', to: { type: 'category' } }],
      description:
        'First category in the list is the master category. This will allow /<master-category/<child-category> URLs',
      options: {
        editModal: 'popover',
        sortable: false,
      },
      validation: Rule =>
        Rule.custom((parents, context) => {
          const isTopLevel = !parents || parents.length == 0
          const color = context.document.color || ''

          if (color.length == 0 && isTopLevel) {
            return 'Parent must be chosen if colour has not been selected'
          }

          if (
            parents &&
            parents.filter(
              r =>
                r._ref == context.document._id ||
                `drafts.${r._ref}` == context.document._id
            ).length > 0
          ) {
            return 'Parents must not contain self'
          }

          return true
        }),
    },
    {
      name: 'homepage',
      type: 'reference',
      title: 'Homepage',
      to: [{ type: 'content' }],
    },
    {
      name: 'color',
      type: 'colors',
      title: 'Main Colour',
      options: {
        borderradius: {
          outer: '100%',
          inner: '100%',
        },
        list: colorList,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: content => ({
      title: content.title,
      media: BsTag,
    }),
  },
}

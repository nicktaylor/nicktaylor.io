import { MdViewList } from 'react-icons/md'

export default {
  name: 'contentList',
  type: 'object',
  title: 'Content List',
  fieldsets: [{ name: 'filters', title: 'Filters' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'List Title',
      description: 'For reference only',
      validation: Rule =>
        Rule.required().error(
          'Reference is required. It will make knowing with this content is a lot easier'
        ),
    },
    {
      name: 'resultsPerPage',
      type: 'number',
      title: 'No. of Results Per Page',
    },
    {
      name: 'hasPaging',
      type: 'boolean',
      title: 'Show Paging',
      description:
        'Turning has paging off can be useful if only a fixed number of results need to be displayed',
    },
    // TODO: be able to specify layout of the content e.g. List, list with filters, list with categories
    {
      name: 'filterCategory',
      type: 'reference',
      title: 'Category',
      fieldset: 'filters',
      to: [{ type: 'category' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      hasPaging: 'hasPaging',
      resultsPerPage: 'resultsPerPage',
    },
    prepare: value => ({
      title: value.title,
      subtitle: `Show Paging: ${value.hasPaging}, Results Per Page: ${value.resultsPerPage}`,
      media: MdViewList,
    }),
  },
}

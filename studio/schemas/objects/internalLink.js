export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'content' }, { type: 'author' }],
    },
  ],
}

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'Added to the end of every page',
    },
    {
      name: 'mainLinks',
      type: 'array',
      title: 'Main Links',
      of: [{ type: 'reference', to: [{ type: 'content' }] }],
    },
  ],
}

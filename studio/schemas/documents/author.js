export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'bioPage',
      type: 'reference',
      title: 'Biography Page',
      to: { type: 'content' },
    },
  ],
}
export default {
  name: 'socialLink',
  type: 'object',
  title: 'Social Link',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Link Text',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Social Name',
      description: 'Type, for example, Twitter, Facebook etc.',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'externalUrl',
      type: 'url',
      title: 'Url',
    },
  ],
}

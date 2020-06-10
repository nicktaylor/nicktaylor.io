export default {
  name: 'externalLink',
  type: 'object',
  title: 'External Link',
  fields: [
    {
      name: 'href',
      type: 'string',
      title: 'URL',
      validation: Rule => Rule.required().error("Url is a required field")
    },
    {
      name: 'blank',
      type: 'boolean',
      title: 'Open in new tab',
    },
  ],
}

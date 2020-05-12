export default {
  name: 'externalLink',
  type: 'object',
  title: 'External Link',
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'blank',
      type: 'boolean',
      title: 'Open in new tab',
    },
  ],
}

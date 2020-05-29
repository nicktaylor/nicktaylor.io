export default {
  name: 'codeBlock',
  type: 'object',
  title: 'Code Block',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      description: 'Enter language in lowercase as defined by PrismJS'
    },
    {
      name: 'code',
      type: 'code',
      title: 'Code'
    }
  ]
}
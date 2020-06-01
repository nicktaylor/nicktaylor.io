export default {
  name: 'codeBlock',
  type: 'object',
  title: 'Code Block',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption'
    },
    {
      name: 'code',
      type: 'code',
      title: 'Code'
    }
  ],
  preview: {
    select: {
      caption: 'caption',
      code: 'code'
    },
    prepare: ({caption, code}) => ({
      title: caption,
      subtitle: `Language: ${code.language}`
    })
  }
}
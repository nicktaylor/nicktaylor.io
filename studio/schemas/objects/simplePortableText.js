export default {
  name: 'simplePortableText',
  type: 'array',
  title: 'Short Rich Text',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'string' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
    },
  ],
}

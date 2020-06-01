export default {
  name: 'codePen',
  type: 'object',
  title: 'CodePen',
  fields: [
    {
      name: 'user',
      type: 'string',
      title: 'Username'
    },
    {
      name: 'name',
      type: 'string',
      title: 'User\'s Name'
    },
    {
      name: 'penId',
      type: 'string',
      title: 'Pen ID'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Pen Title'
    },
    {
      name: 'height',
      type: 'number',
      title: 'Height in Pixels'
    },
    {
      name: 'themeId',
      type: 'number',
      title: 'Theme ID'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'name'
    }
  }
}
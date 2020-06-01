export default {
  name: 'quote',
  type: 'object',
  title: 'quote',
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Quote Text',
      validation: Rule => Rule.required().error("Quote text is required")
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of person who said this, if applicable'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date of Quote'
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'name'
    }
  }
}
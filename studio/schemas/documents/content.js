import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'content',
  type: 'document',
  title: 'Content',
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,

      fieldsets: [
        { name: 'setup', title: 'Setup' },
        { name: 'main', title: 'Main' },
        { name: 'meta', title: 'Meta' },
      ],

      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          fieldset: 'setup',
          description:
            "Descriptive title, not too long, we don't want massive links",
          validation: Rule => Rule.required().min(2),
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          fieldset: 'setup',
          options: {
            source: 'content.title',
            maxLength: 96,
          },
        },
        {
          name: 'mainImage',
          type: 'seoImage',
          title: 'Main Image',
          fieldset: 'setup',
          description:
            "Main image for the content, to be used within any 'preview' links",
        },
        {
          name: 'excerpt',
          type: 'simplePortableText',
          title: 'Excerpt',
          fieldset: 'main',
          descriptive:
            'Excerpt text, for descriptions and social media extract',
        },
        {
          name: 'contentBlocks',
          type: 'array',
          fieldset: 'main',
          of: [{ type: 'fullPortableTextObject' }],
        },
        {
          name: 'mainCategory',
          type: 'reference',
          to: { type: 'category' },
          fieldset: 'main',
          description: 'Main category, e.g. Blog for structural purposes.',
        },
        {
          name: 'categories',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'category' } }],
          description:
            'Other applicable categories for the content to go under',
          fieldset: 'meta',
          options: {
            layout: 'tags',
          },
        },
        {
          name: 'linkTitle',
          type: 'string',
          title: 'Link Title',
          fieldset: 'meta',
          description:
            'Short text to be used for links e.g. in header/navigation.',
        },
        {
          name: 'author',
          type: 'reference',
          to: { type: 'author' },
          fieldset: 'meta',
          description: 'Author of the content',
        },
        {
          name: 'publishedAt',
          type: 'datetime',
          title: 'Published at',
          fieldset: 'meta',
          description: 'The date and time of publication of the content',
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'content.mainImage.asset.url',
      imageUrl: 'content.mainImage.asset.url',
      title: 'content.title',
    },
  },
  orderings: [
    {
      name: 'publishDateAsc',
      title: 'Publish date - Old -> New',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishDateDesc',
      title: 'Publish date - New -> Old',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
}

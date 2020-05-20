export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fieldsets: [{ name: 'profile', title: 'Profile Information' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'Added to the end of every page',
    },
    {
      name: 'mainLinks',
      type: 'array',
      title: 'Main Links',
      of: [
        { type: 'reference', to: [{ type: 'content' }, { type: 'category' }] },
      ],
    },
    {
      name: 'image',
      type: 'image',
      fieldset: 'profile',
      title: 'Profile Image',
    },
    {
      name: 'name',
      type: 'string',
      fieldset: 'profile',
      title: 'Name',
    },
    {
      name: 'subText',
      type: 'string',
      fieldset: 'profile',
      title: 'Sub-text',
    },
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [{ type: 'socialLink' }],
    },
    {
      name: 'homepage',
      type: 'reference',
      title: 'Homepage',
      to: { type: 'content' },
      validation: Rule => Rule.required().error('Homepage must be chosen'),
    },
  ],
}

export default {
  name: "seoImage",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text for accessibility",
      validation: Rule =>
        Rule.error("Alternative text must be populated").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
}

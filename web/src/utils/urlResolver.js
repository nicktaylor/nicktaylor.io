export default function(node, settings) {
  if (settings && node.id == settings.homepage.id) {
    return '/'
  } else if (
    node.mainCategory &&
    node.mainCategory.homepage &&
    node.mainCategory.homepage.id == node.id
  ) {
    return `/${node.mainCategory.slug.current}`
  } else if (node.mainCategory) {
    return `/${node.mainCategory.slug.current}/${node.slug.current}`
  }
  return `/${node.slug.current}`
}

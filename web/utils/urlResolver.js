module.exports = function(node, settings) {
  if (settings && node.id == settings.homepage.id) {
    return '/'
  } else if (
    node.content.mainCategory &&
    node.content.mainCategory.homepage &&
    node.content.mainCategory.homepage.id == node.id
  ) {
    return `/${node.content.mainCategory.slug.current}/`
  } else if (node.content.mainCategory) {
    return `/${node.content.mainCategory.slug.current}/${
      node.content.slug.current
    }/`
  }
  return `/${node.content.slug.current}/`
}

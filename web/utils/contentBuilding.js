const {getExcerptFromContent} = require("../utils/portableText")
const dayjs = require('dayjs')

function generatePagesForContentList(node, list, listPages, path, createFunc) {
  const resultsPerPage = list.resultsPerPage ? parseInt(list.resultsPerPage) : 10
  const numberOfPages = Math.ceil(listPages.length / resultsPerPage)

  for (let i = 0; i < numberOfPages; i++) {
    const nextPage = i + 1
    const start = i * resultsPerPage
    const end = (i * resultsPerPage) + (nextPage === numberOfPages ? listPages.length - start : resultsPerPage)

    createFunc(node, `${path}${i === 0 ? '' : `/${(i + 1)}`}`, {
      listData: listPages.slice(start, end).map((i) => ({
        title: i.content.title,
        datetime: i.content.publishedAt,
        niceDatetime: i.content.nicePublishedAt,
        url: i._url,
        text: i.content.plainTextExcerpt,
        image: i.content.mainImage,
      })),
      listOptions: {
        title: list.title,
        resultsPerPage: list.resultsPerPage,
        hasPaging: list.hasPaging,
        numberOfResults: listPages.length,
        currentPage: i + 1,
        numberOfPages,
        baseUrl: path,
      },
    })
  }
}

module.exports = {
  generatePagesForContentList
}

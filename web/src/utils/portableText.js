export const toPlainText = (blocks = []) => {
  return blocks
    .map(block => {
      if (!block || block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

export const cutAtEndOfLine = (text, numChars, ellipsis) => {
  let sentences = text.split(/(\.\n\n)|([.?!] )/g)

  if (sentences.length === 1 && sentences[0] === '') {
    return ''
  }

  let newText = ''
  for (let i = 0; i < sentences.length; i++) {
    newText += sentences[i] ? `${sentences[i]}` : ''
    if (newText.length > numChars) {
      const lastChar = newText.trim().substr(-1)
      if (lastChar === '!' || lastChar === '?' || lastChar === '.') break
    }
  }

  return newText
}

export const getExcerptFromContent = (content, numChars) =>
  content._rawExcerpt && content._rawExcerpt.length > 0
    ? toPlainText(content._rawExcerpt)
    : cutAtEndOfLine(
        toPlainText(
          content.contentBlocks.reduce(
            (c, b) => c.concat(b._rawContent),
            []
          )
        ),
        numChars
      )

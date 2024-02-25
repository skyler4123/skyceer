export const getAttributes = (element) => {
  let result = {}
  Array.from(element.attributes).forEach(((nodeMap) => {
    result = { ...result, [nodeMap.nodeName]: nodeMap.nodeValue }
  }))
  return result
}

export const cloneAttributes = (element, refElement) => {
  const refAttributes = getAttributes(refElement)
  Object.keys(refAttributes).forEach((attributeKey) => {
    element.setAttribute(attributeKey, refAttributes[attributeKey])
  })
}

export const createNodeFromHTML = (html) => {
  return document.createRange().createContextualFragment(html)
}
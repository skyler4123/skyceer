const DomHelpers = {
  getAttributes(element) {
    let result = {}
    Array.from(element.attributes).forEach(((nodeMap) => {
      result = { ...result, [nodeMap.nodeName]: nodeMap.nodeValue }
    }))
    return result
  },
  
  cloneAttributes(element, refElement) {
    const refAttributes = this.getAttributes(refElement)
    Object.keys(refAttributes).forEach((attributeKey) => {
      element.setAttribute(attributeKey, refAttributes[attributeKey])
    })
  },
  
  createNodeFromHTML(html) {
    return document.createRange().createContextualFragment(html)
  },

  getClientXYFrom({event}) {
    const { clientX, clientY } = event
    return [clientX, clientY]
  },

  getLayerXYFrom({event}) {
    const { layerX, layerY } = event
    return [layerX, layerY]
  },

  getOffsetXYFrom({event}) {
    const { offsetX, offsetY } = event
    return [offsetX, offsetY]
  },

  getPageXYFrom({event}) {
    const { pageX, pageY } = event
    return [pageX, pageY]
  },
  getScreenXYFrom({event}) {
    const { screenX, screenY } = event
    return [screenX, screenY]
  },
  setStyle({element, style}) {
    element.style = style
  },

  get csrfToken() {
    return document.querySelector('meta[name="csrf-token"]').content
  },
}

export default DomHelpers;
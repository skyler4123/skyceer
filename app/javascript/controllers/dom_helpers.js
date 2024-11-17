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
    return element
  },
  
  createNodeFromHTML(html) {
    return document.createRange().createContextualFragment(html)
  },

  mergeHTMLIntoElement(element, html) {
    let newNode = this.createNodeFromHTML(html)
    this.cloneAttributes(element, newNode.firstElementChild)
    element.innerHTML = newNode.firstElementChild.innerHTML
    return element
  },

  appendChildFromHTML({element, html}) {
    return element.appendChild(this.createNodeFromHTML(html))
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

  csrfToken() {
    return document.querySelector('meta[name="csrf-token"]').content
  },

  fitHeight() {
    this.mergeClass(this.element, 'h-fit')
  },

  noneShadow() {
    this.mergeClass(this.element, 'shadow-none')
  },

  hide() {
    this.mergeClass(this.element, 'hidden')
  },

  updateText(element, newText) {
    element.innerText = newText
  },

  rawId(element) {
    this.getId(element)
    return element.id.split(":")[1]
  },

  rawIdentifier(element) {
    this.getId(element)
    return element.id.split(":")[0]
  },

  getId(element) {
    if (element.id) {
      return element.id
    } else {
      element.id = `${this.getControllerIdentifier(element)}:${this.newUUID()}`
      return element.id
    }
  },

  mergeAttributesHTML(element, attributesHTML) {
    const attributes = attributesHTML.split(" ").map((attribute) => attribute.split("="))
    attributes.forEach((attribute) => {
      element.setAttribute(attribute[0], attribute[1].substring(1, attribute[1].length - 1))
    })
    return element
  },
  
  transferToValue(value) {
    let newValue = JSON.stringify(value).replace(/"/g, '&quot;')
    return newValue
  }
}

export default DomHelpers;
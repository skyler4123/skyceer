const DispatchHelpers = {

  toggleDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('toggle'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  openDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('open'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  closeDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('close'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  switchDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('switch'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  tabDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('tab'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  copyLinkDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('copyLink'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  copyTextDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('copyText'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  scrollBackDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('scrollBack'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  scrollNextDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('scrollNext'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  scrollNextAutoDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('scrollNextAuto'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  rotateDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('rotate'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  changeRatioDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('changeRatio'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  tabDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('tab'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  tabNextDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('tabNext'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  tabBackDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('tabBack'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  tabFirstDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('tabFirst'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  tabLastDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('tabLast'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  toggleRememberMeDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('toggleRememberMe'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  increaseDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('increase'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  decreaseDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('decrease'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  ratingDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('rating'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  seeMoreDispatch(event) {
    event['payload'] = { ...this.getEventWithAction('seeMore'), controller: this }
    this.dispatch('dispatch', { detail: { event: event } })
  },

  dispatchGlobal({payload}) {
    this.dispatch(this.rawId(this.element), { detail: payload })
  },

  getAttributes(element) {
    let result = {}
    Array.from(element.attributes).forEach(((nodeMap) => {
      result = { ...result, [nodeMap.nodeName]: nodeMap.nodeValue }
    }))
    return result
  },
  
  dispatchToGlobal(event) {
    const dispatcher = this.findElementFromObjectArrayByObject(this.dispatchersParams, {listener: event.type})
    this.dispatch(dispatcher.id, { detail: dispatcher })
    console.log(`dispatcher: ${JSON.stringify(dispatcher)} `)
  },
  initializeReceiver() {
    if (!this.hasReceiversParams) { return }
    setTimeout(() => {
      this.receiversParams.forEach((receiver) => {
        const dispatcherElement = document.querySelector(`.dispatcher-id-${receiver.id}`)
        const dispatcherIdentifier = this.getIdentifierFromElement(dispatcherElement)
        this.addAction(this.element, `${dispatcherIdentifier}:${receiver.id}@window->${this.identifier}#receiveFromGlobal`)
      })
    }, 3000)
  },
  receiveFromGlobal(event) {
    const eventAction = event.detail.action
    this[eventAction]()
  },
  createEventBrige({fromElement, toElement, toAction}) {
    this.addAction(toElement, `${this.getId(fromElement)}@window->${this.rawIdentifier(toElement)}#${toAction}`)
  }
}

export default DispatchHelpers;
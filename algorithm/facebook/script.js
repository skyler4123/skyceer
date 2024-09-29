// Load more comments
this.viewMoreInterval = setInterval(() => {
  let clientHeight = document.body.clientHeight
  let scrollHeight = document.body.scrollHeight
  let isMaxScrollHeight = (clientHeight === scrollHeight)
  if (isMaxScrollHeight) {
    clearInterval(this.viewMoreInterval)
  } else {
    window.scrollTo(0, document.body.scrollHeight)
  }
}, 2000)


// Load more comments with Xem thêm bình luận
let scrollContainerClass = "x78zum5 xdt5ytf x6ikm8r x1odjw0f x1iyjqo2 x1pi30zi x1swvt13"
let viewMoreCommentsClass = "x1i10hfl xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xi81zsa x1q0g3np x1iyjqo2 xs83m0k xsyo7zv"
let viewMoreCommentsTextEN = "View more comments"
let viewMoreCommentsTextVN = "Xem thêm bình luận"

this.viewMoreInterval = setInterval(() => {
  let scrollContainerElement = document.querySelectorAll(`[class="${scrollContainerClass}"]`)[0]
  let viewMoreCommentsElements = document.querySelectorAll(`[class="${viewMoreCommentsClass}"]`)
  let lastViewMoreCommentsElement = viewMoreCommentsElements[viewMoreCommentsElements.length - 1]
  if (lastViewMoreCommentsElement && (lastViewMoreCommentsElement.textContent === viewMoreCommentsTextEN || lastViewMoreCommentsElement.textContent === viewMoreCommentsTextVN)) {
    scrollContainerElement.scrollTo(0, scrollContainerElement.scrollHeight)
    lastViewMoreCommentsElement.click()
  } else {
    scrollContainerElement.scrollTo(0, scrollContainerElement.scrollHeight)
    clearInterval(this.viewMoreInterval)
  }
}, 2000)





// Show full comments
let seeMoreClass = "x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1sur9pj xkrqix3 xzsf02u x1s688f"
document.querySelectorAll(`[class="${seeMoreClass}"]`).forEach(target => {
  if (target.textContent === "See more" || target.textContent === "Xem thêm") { target.click() }
})



// Search number of comments
let numberFrom = 0
let numberTo = 99
let position = 1

let commentGroupClass = "html-div xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x18d9i69 x1swvt13 x1pi30zi x1n2onr6"
let commentClass = "x1lliihq xjkvuk6 x1iorvi4"
let arrayRange = (start, stop, step = 1) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) === -1;
  });
};
let numberSample = arrayRange(numberFrom, numberTo)
let commentGroupElement = document.querySelector(`[class="${commentGroupClass}"]`)
let commentElements = commentGroupElement.querySelectorAll(`[class="${commentClass}"]`)
let commentContents = Array.from(commentElements).map(comment => comment.textContent)
let commentNumbers = commentContents.map(comment => comment.match(/\d+/g))
let commentedNumbers = commentNumbers.map(comment => {
	if (comment && comment[position - 1]) {
	return Number(comment[position - 1])
}
})
let diff = numberSample.diff(commentedNumbers)
console.log(`Commented Numbers at position ${position}:`, commentedNumbers)
console.log("Available Number:", diff)

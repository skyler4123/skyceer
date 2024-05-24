let viewMoreCommentsClass = "x78zum5 x1w0mnb xeuugli"
let viewMoreCommentsTextEN = "View more comments"
let viewMoreCommentsTextVN = "Xem thêm bình luận"

this.viewMoreInterval = setInterval(() => {
  let viewMoreCommentsElements = document.querySelectorAll(`[class="${viewMoreCommentsClass}"]`)
  let lastViewMoreCommentsElement = viewMoreCommentsElements[viewMoreCommentsElements.length - 1]
  if (lastViewMoreCommentsElement.textContent === viewMoreCommentsTextEN || lastViewMoreCommentsElement.textContent === viewMoreCommentsTextVN) {
    window.scrollTo(0, document.body.scrollHeight)
    lastViewMoreCommentsElement.click()
  } else {
    window.scrollTo(0, document.body.scrollHeight)
    clearInterval(this.viewMoreInterval)
  }
}, 3000)




let seeMoreClass = "x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1sur9pj xkrqix3 xzsf02u x1s688f"
document.querySelectorAll(`[class="${seeMoreClass}"]`).forEach(target => {
  if (target.textContent === "See more" || target.textContent === "Xem thêm") { target.click() }
})




let numberFrom = 0
let numberTo = 999
let position = 1

let commentGroupClass = "x1gslohp"
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









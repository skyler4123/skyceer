// Load more comments - auto scroll down
this.viewMoreInterval = setInterval(() => {
  let scrollViewClass = "html-div xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x78zum5 xdt5ytf x1iyjqo2 x7ywyr2"
  let scrollElement = document.querySelector(`[class="${scrollViewClass}"]`)
  if (scrollElement) {
    scrollElement.scrollIntoView(0, 9999999)
  } else {
    window.scrollTo(0, 9999999)
  }
}, 2000)

// Stop auto scroll down
clearInterval(this.viewMoreInterval)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Load more comments with Xem thêm bình luận
function findElementByTextXPath(text) {
  const xpath = `//*[contains(text(), '${text}')]`;
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  return result.singleNodeValue; // Return the first matching element
}
let scrollElementClass = "x78zum5 xdt5ytf x1iyjqo2 x1n2onr6"
let scrollElement = document.querySelectorAll(`[class="${scrollElementClass}"]`)[2]
let viewMoreCommentsTextEN = "View more comments"
let viewMoreCommentsTextVN = "Xem thêm bình luận"
let viewMoreCommentsElement = findElementByTextXPath(viewMoreCommentsTextEN) || findElementByTextXPath(viewMoreCommentsTextVN)
this.viewMoreInterval = setInterval(() => {
  if (viewMoreCommentsElement) {
    viewMoreCommentsElement.click()
    scrollElement.scrollIntoView(0, 999999)
  }
}
, 2000)
// Stop auto scroll down
clearInterval(this.viewMoreInterval)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Show full comments
let seeMoreClass = "x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xkrqix3 x1sur9pj xzsf02u x1s688f"
document.querySelectorAll(`[class="${seeMoreClass}"]`).forEach(target => {
  if (target.textContent === "See more" || target.textContent === "Xem thêm") { target.click() }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Search number of comments for POST
let numberFrom = 0
let numberTo = 99
let position = 1

let commentGroupClass = "html-div xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x18d9i69 x1ye3gou xn6708d x1n2onr6"
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Search number of comments for VIDEO POST
let numberFrom = 0
let numberTo = 99
let position = 1

let commentGroupClass = "x78zum5 xdt5ytf x6ikm8r x1odjw0f x1iyjqo2 x1pi30zi x1swvt13"
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





// Load more comments - auto scroll down
// Demo: https://www.facebook.com/watsonsvietnam/posts/741934148190230?rdid=mwhbQKL4iyCrhzIn
scrollViewClass = "html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1g0dm76 xpdmqnj x1n2onr6"
scrollElement = document.querySelector(`[class="${scrollViewClass}"]`)
this.viewMoreInterval = setInterval(() => {
  if (scrollElement) {
    scrollElement.scrollIntoView(0, 9999999)
  } else {
    window.scrollTo(0, 9999999)
  }
}, 2000)







// Stop auto scroll down
clearInterval(this.viewMoreInterval)











// Load more comments with Xem thêm bình luận
// Demo: https://www.facebook.com/watch/?v=2133168130484657
findElementByTextXPath = (text) => {
  const xpath = `//*[contains(text(), '${text}')]`;
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  return result.singleNodeValue; // Return the first matching element
}
// scrollElementClass = "x1jx94hy x78zum5 xdt5ytf x2lah0s xw2csxc x1odjw0f xmd6oqt x13o0s5z"
// scrollElement = document.querySelectorAll(`[class="${scrollElementClass}"]`)[0]
viewMoreCommentsTextEN = "View more comments"
viewMoreCommentsTextVN = "Xem thêm bình luận"
viewMoreCommentsElement = findElementByTextXPath(viewMoreCommentsTextEN) || findElementByTextXPath(viewMoreCommentsTextVN)
this.viewMoreInterval = setInterval(() => {
  if (viewMoreCommentsElement) {
    viewMoreCommentsElement.click()
    // scrollElement.scrollIntoView(0, 999999)
  }
}
, 2000)









// Stop auto scroll down
clearInterval(this.viewMoreInterval)








// Show full comments
// Demo: https://www.facebook.com/Yennguyencosmetic/posts/731808126041086?rdid=hur03i2qPqG3NT9e
seeMoreClass = "x1i10hfl xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xkrqix3 x1sur9pj xzsf02u x1s688f"
document.querySelectorAll(`[class="${seeMoreClass}"]`).forEach(target => {
  if (target.textContent === "See more" || target.textContent === "Xem thêm") { target.click() }
})








// Search number of comments for POST
// position start with 1
// Demo: https://www.facebook.com/Yennguyencosmetic/posts/731808126041086?rdid=hur03i2qPqG3NT9e
numberFrom = 0
numberTo = 999
position = 1
commentClass = "x1lliihq xjkvuk6 x1iorvi4"
arrayRange = (start, stop, step = 1) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) === -1;
  });
};
countOccurrences = (arr) => {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1; // Increment count or initialize to 1
    return acc;
  }, {});
};
numberSample = arrayRange(numberFrom, numberTo)
commentElements = document.querySelectorAll(`[class="${commentClass}"]`)
commentContents = Array.from(commentElements).map(comment => comment.textContent)
commentNumbers = commentContents.map(comment => comment.match(/\d+/g))
commentedNumbers = commentNumbers.map(comment => {
	if (comment && comment[position - 1]) {
	return Number(comment[position - 1])
}
})
diff = numberSample.diff(commentedNumbers)
console.log(`Commented Numbers at position ${position}:`, commentedNumbers)
console.log("Commented Numbers with count times:", countOccurrences(commentedNumbers))
console.log("Available Number:", diff)











// Search number of comments for VIDEO POST
numberFrom = 0
numberTo = 999
position = 1
commentClass = "xdj266r x14z9mp xat24cr x1lziwak x1vvkbs"
arrayRange = (start, stop, step = 1) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) === -1;
  });
};
countOccurrences = (arr) => {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1; // Increment count or initialize to 1
    return acc;
  }, {});
};
numberSample = arrayRange(numberFrom, numberTo)
commentElements = document.querySelectorAll(`[class="${commentClass}"]`)
commentContents = Array.from(commentElements).map(comment => comment.textContent)
commentNumbers = commentContents.map(comment => comment.match(/\d+/g))
commentedNumbers = commentNumbers.map(comment => {
	if (comment && comment[position - 1]) {
	return Number(comment[position - 1])
}
})
diff = numberSample.diff(commentedNumbers)
console.log(`Commented Numbers at position ${position}:`, commentedNumbers)
console.log("Commented Numbers with count times:", countOccurrences(commentedNumbers))
console.log("Available Number:", diff)





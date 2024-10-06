import { ArticlePostsApi } from "../../../../javascript/controllers/api/article/article_posts_api";
import { button } from "../../../../javascript/controllers/components";
import Views_Article_LayoutController from "../layout_controller";

export default class extends Views_Article_LayoutController {
  static targets = [...super.targets, 'form']
  static values = {
    articlePost: { type: Object, default: {} }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: "default"})
  }

  initMain() {
    this.initArticlePostValue()
    this.initMainHTML()
  }

  initArticlePostValue() {
    ArticlePostsApi.show({id: this.getIdFromUrl()}).then((response) => {
      let responseData = response.data
      this.articlePostValue = responseData
    }).catch((error) => {
      console.log(error)
    })
  }

  initMainHTML() {
    this.mainTarget.innerHTML = this.defaultHTML()
  }
  
  defaultHTML() {
    return `
      <div
        data-controller="views--article--article-posts--form"
        data-views--article--article-posts--form-params-value="${this.transferToValue({id: this.articlePostValue.id, title: this.articlePostValue.title, content: this.articlePostValue.content})}"
        data-${this.identifier}-target="form"
      >
      </div>
    `
  }

  getIdFromUrl(url = null) {
    url = url || window.location.href
    let urlObject = new URL(window.location.href)
    let pathnameArray = urlObject.pathname.split('/')
      if (pathnameArray.includes('edit')) {
        let editIndex = pathnameArray.indexOf('edit')
        return pathnameArray[editIndex - 1]
      }
  }

  transferToValue(value) {
    let newValue = JSON.stringify(value).replace(/"/g, '&quot;')
    return newValue
  }

  variantClass() {
    return {
      default: {
        element: "w-full h-full"
      }
    }
  }
}

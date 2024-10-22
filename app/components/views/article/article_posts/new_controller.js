import { ArticlePostsApi } from "../../../../javascript/controllers/api/article/article_posts_api";
import { Button } from "../../../../javascript/controllers/components";
import Views_Article_LayoutController from "../layout_controller";

export default class extends Views_Article_LayoutController {
  static targets = [...super.targets, 'editor', 'submit']

  initParams() {
    this.setParams({name: 'variant', defaultValue: "default"})
  }

  initMain() {
    this.initMainHTML()
  }

  initMainHTML() {
    this.mainTarget.innerHTML = this.defaultHTML()
  }
  
  defaultHTML() {
    return `
      <div data-controller="views--article--article-posts--form"></div>
    `
  }

  variantClass() {
    return {
      default: {
        element: "w-full h-full"
      }
    }
  }
}

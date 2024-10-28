import { ArticlePostsApi } from "../../../../javascript/controllers/api/article/article_posts_api";
import { Button } from "../../../../javascript/controllers/components";
import Views_Article_LayoutController from "../layout_controller";

export default class extends Views_Article_LayoutController {
  static targets = [...super.targets, 'editor', 'submit']

  initParams() {
    this.setParams({name: 'variant', defaultValue: "default"})
  }

  initMain() {
  }

  variantClass() {
    return {
      default: {
        element: "w-full h-full"
      }
    }
  }
}

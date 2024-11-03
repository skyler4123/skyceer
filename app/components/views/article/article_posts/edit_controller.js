import { ArticlePostsApi } from "../../../../javascript/controllers/api/article/article_posts_api";
import { Button } from "../../../../javascript/controllers/components";
import Views_Article_LayoutController from "../layout_controller";

export default class extends Views_Article_LayoutController {
  static targets = [...super.targets, 'editForm', 'titleInput', 'contentInput', 'editor']
  static values = {
    id: { type: String, default: "" }
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: "default"})
  }

  initMain() {
    // console.log(this)
  }

  initAction() {
    setTimeout(() => {
      this.editFormController().submitValueCallback = async (value, previousValue) => {
        const title = this.titleInputTarget.value
        const content = await this.editorController().render()
        const newValue = { article_post: {title: title, content: content} }
        ArticlePostsApi.update({id: this.idValue, params: newValue}).then(response => {
          console.log(response)
          const responseData = response.data
          this.redirectTo(responseData.url)
        }).catch(error => {
          console.log(error)
        })
      }
    }, 1000)
  }

  editFormIdentifier() {
    return "form"
  }

  editFormController() {
    return this.application.getControllerForElementAndIdentifier(this.editFormTarget, this.editFormIdentifier())
  }

  editorIdentifier() {
    return "libs--editor--editorjs"
  }

  editorController() {
    return this.application.getControllerForElementAndIdentifier(this.editorTarget, this.editorIdentifier())
  }

  variantClass() {
    return {
      default: {
        element: "w-full h-full"
      }
    }
  }
}

import { ArticlePostsApi } from "../../../../javascript/controllers/api/article/article_posts_api";
import { button } from "../../../../javascript/controllers/components";
import Views_Article_LayoutController from "../layout_controller";

export default class extends Views_Article_LayoutController {
  static targets = [...super.targets, 'editor', 'submit']

  initParams() {
    this.setParams({name: 'variant', defaultValue: "default"})
  }

  initMain() {
    this.initHTML()
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  initAction() {
    setTimeout(() => {
      this.addAction(this.submitTarget, `click->${this.identifier}#submit`)
    }, 0)
  }
  
  defaultHTML() {
    return `
      <div data-controller="libs--editor--editorjs" data-${this.identifier}-target="editor"></div>
      <button data-controller="button" data-button-params></button>
      ${button({label: 'Submit', data: {[`${this.identifier}-target`]: "submit"}})}
    `
  }

  editorController() {
    return this.application.getControllerForElementAndIdentifier(this.editorTarget, 'libs--editor--editorjs')
  }

  async submit(event) {
    const outputData = await this.editorController().render()
    ArticlePostsApi.create({params: {article_post: {content: outputData}}}).then(response => {
      const { data } = response
      console.log(data)
     }).catch((error) => {
      console.log(error)
    })
  }

  variantClass() {
    return {
      default: {
        element: "w-full h-full"
      }
    }
  }





//   <div class="my-5">
//   <label for="article_post_title">Title</label>
//   <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="article_post[title]" id="article_post_title">
// </div>

// <div class="my-5 border-2 border-gray-950">
//   <label for="article_post_content">Content</label>
//   <input type="hidden" name="article_post[content]" data-${this.identifier}-target="contentInput"/>
//   <div data-libs--editorjs-target="editor" data-${this.identifier}-target="editorjs"></div>
// </div>

// <div class="inline">
//   <input type="submit" name="commit" value="Create an Article" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer" data-disable-with="Create an Article">
// </div>




  // initMain() {
  //   this.mainTarget.className = 'flex flex-col justify-center items-center w-full h-full'
  //   const editorjsDataTarget = `${this.identifier}-target`
  //   let editorjsOptions = {
  //     klass: 'w-full h-full',
  //     data: {}
  //   }
  //   editorjsOptions.data[`${this.identifier}-target`] = 'editorjs'
  //   this.mainTarget.innerHTML =
  //     `
  //       ${editorjs({...editorjsOptions}, () => {
  //         return `
  //           <div class="my-5">
  //             <label for="article_post_title">Title</label>
  //             <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="article_post[title]" id="article_post_title">
  //           </div>

  //           <div class="my-5 border-2 border-gray-950">
  //             <label for="article_post_content">Content</label>
  //             <input type="hidden" name="article_post[content]" data-${this.identifier}-target="contentInput"/>
  //             <div data-libs--editorjs-target="editor" data-${this.identifier}-target="editorjs"></div>
  //           </div>

  //           <div class="inline">
  //             <input type="submit" name="commit" value="Create an Article" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer" data-disable-with="Create an Article">
  //           </div>
            
  //         `
  //       })}
  //     `
  // }
  
  // initAction() {
  //   this.addAction(this.element, `submit->${this.identifier}#submit`)
  // }

  // async formData() {
  //   const editorjsData = await this.editorjsController().render()
  //   this.contentInputTarget.value = JSON.stringify(editorjsData)
  //   const formData = new FormData(this.editorjsTarget)
  //   return formData
  // }

  // async submit(event) {
  //   event.preventDefault()
  //   const submitParams = await this.formData()
  //   ArticlePostsApi.create({params: submitParams}).then(response => {
  //     const { data } = response
  //     if (this.isSuccess(response)) { this.redirect(`/article_posts/${data.id}`) }
  //   })
  // }

  // editorjsController() {
  //   return this.application.getControllerForElementAndIdentifier(this.editorjsTarget, 'libs--editorjs')
  // }
}

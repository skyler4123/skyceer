import { ArticlePostsApi } from "../../../../javascript/controllers/api/article/article_posts_api";
import FormController from "../../../form_controller";

export default class extends FormController {
  static targets = [...super.targets, 'editor', 'submit']
  
  initParams() {
    this.setParams({name: 'title', defaultValue: "Title"})
    this.setParams({name: 'content', defaultValue: this.defaultEditorSavedData()})
  }

  init() {
    this.initHTML()
    super.init()
  }
  
  initComplete() {
    setTimeout(() => {
      this.input()
      this.syncEditorToForm()
    }, 500)
  }

  initHTML() {
    this.element.innerHTML = this.defaultHTML()
  }

  initAction() {
    super.initAction()
    this.addAction(this.submitTarget, `click->${this.identifier}#submit`)
  }

  submit(event) {
    event.preventDefault()
    this.syncEditorToForm()
    ArticlePostsApi.create({params: this.formValue}).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  async syncEditorToForm(event = null) {
    let editorData = await this.editorController().render()
    this.formValue = {...this.formValue, content: editorData}
  }

  editorController() {
    return this.application.getControllerForElementAndIdentifier(this.editorTarget, 'libs--editor--editorjs')
  }

  defaultHTML() {
    return `
      <div class="my-5">
        <label for="article_post_title">Title</label>
        <input class="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full" type="text" name="title" id="article_post_title" value="${this.titleParams}">
      </div>

      <div class="my-5 border-2 border-gray-950">
        <label for="article_post_content">Content</label>
        <div data-controller="libs--editor--editorjs" data-libs--editor--editorjs-params-value="${JSON.stringify({savedData: this.contentParams}).replace(/"/g, '&quot;')}" data-views--article--article-posts--form-target="editor"></div>
      </div>

      <div class="inline">
        <button data-views--article--article-posts--form-target="submit" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer">Create an Article</button>
      </div>
    `
  }

  defaultEditorSavedData() {
    return {
      "time": 1550476186479,
      "blocks": [
         {
            "id": "oUq2g_tl8y",
            "type": "header",
            "data": {
               "text": "Editor.js",
               "level": 2
            }
         },
         {
            "id": "zbGZFPM-iI",
            "type": "paragraph",
            "data": {
               "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
            }
         },
         {
            "id": "qYIGsjS5rt",
            "type": "header",
            "data": {
               "text": "Key features",
               "level": 3
            }
         },
         {
            "id": "XV87kJS_H1",
            "type": "list",
            "data": {
               "style": "unordered",
               "items": [
                  "It is a block-styled editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a simple API"
               ]
            }
         },
         {
            "id": "AOulAjL8XM",
            "type": "header",
            "data": {
               "text": "What does it mean «block-styled editor»",
               "level": 3
            }
         },
         {
            "id": "cyZjplMOZ0",
            "type": "paragraph",
            "data": {
               "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
            }
         }
      ],
      "version": "2.8.1"
   }
  }

}

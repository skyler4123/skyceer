import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import RawTool from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import ApplicationController from '../../javascript/controllers/application_controller';

export default class Editorjs extends ApplicationController {
  static targets = ["editor"]
  static values = {
    ...super.values,
  }
  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  variantClass() {
    return {
      default: {
        element: 'w-11/12 h-[350px] border-2 border-gray-200 rounded-md p-4'
      }
    }
  }
  connect() {
    this.editorJS = new EditorJS({
      holder: this.editorTarget,
      autofocus: true,
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4],
            defaultLevel: 3
          }
        },
        linkTool: LinkTool,
        raw: RawTool,
        // image: SimpleImage,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: this.imageEditorjsByFileParams, // Your backend file uploader endpoint
              byUrl: this.imageEditorjsByUrlParams, // Your endpoint that provides uploading by Url
            },
            additionalRequestHeaders: {
              'X-CSRF-Token': this.csrfToken()
            },
            additionalRequestData: {
              record_id: this.recordIdParams,
              record_class: this.recordClassParams,
            }
          }
        },
        checklist: { class: Checklist, inlineToolbar: true },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true
            }
          }
        },
        quote: Quote,
        table: Table,
      }
    });
    // if (!this.recordIdValue) { 
    //   this.recordIdValue = crypto.randomUUID()
    //   this.formParent().prepend(this.inputId())
    // }
  }


  // formParent() {
  //   return this.element.closest("form")
  // }
  // inputId() {
  //   let inputId = document.createElement("input");
  //   inputId.setAttribute("name", `${this.recordTypeValue}[id]`)
  //   inputId.setAttribute("type", "hidden")
  //   inputId.setAttribute("value", this.recordIdValue)
  //   return inputId
  // }
  async render() {
    // console.log("Hello, Stimulus!", this.editorJS);
    // this.editorJS.save().then(outputData => {
    //   console.log(outputData)
    //   return outputData
    // }).catch(error => {
    //   console.log(error)
    // })
    
    const outputData = await this.editorJS.save()
    return outputData
  }
}

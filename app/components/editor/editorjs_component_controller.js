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
import { v4 as uuidv4 } from 'uuid';
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["editor"]
  static values = {
    objectId: String,
    objectType: String,
    imageEndpointByFile: String,
    imageEndpointByUrl: String,
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.editor()
    if (!this.objectIdValue) { 
      this.objectIdValue = uuidv4()
      this.formParent().prepend(this.inputId())
    }
    // console.log(this.formParent())
  }
  csrfToken() {
    return document.querySelector('meta[name="csrf-token"]').content
  }
  formParent() {
    return this.element.closest("form")
  }
  inputId() {
    let inputId = document.createElement("input");
    inputId.setAttribute("name", `${this.objectTypeValue}[id]`)
    inputId.setAttribute("type", "hidden")
    inputId.setAttribute("value", this.objectIdValue)
    return inputId
  }
  editor() {
    const editor = new EditorJS({
      holder: this.editorTarget.id,
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
              byFile: this.imageEndpointByFileValue, // Your backend file uploader endpoint
              byUrl: this.imageEndpointByUrlValue, // Your endpoint that provides uploading by Url
            },
            additionalRequestHeaders: {
              'X-CSRF-Token': this.csrfToken()
            },
            additionalRequestData: {
              object_id: this.objectIdValue,
              object_type: this.objectTypeValue,
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
        embed: Embed,
        quote: Quote,
      }
    });
    return editor;
  }
  save() {
    console.log("Hello, Stimulus!");
    // this.editor().save().then(saveData => {
    //   console.log(saveData)
    // })
  }
}

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import RawTool from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';





import List from '@editorjs/list';

import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["editor"]
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.editor()
  }
  editor () {
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
    this.editor().save().then(saveData => {
      console.log(saveData)
    })
  }
}

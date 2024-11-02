// https://github.com/editor-js/awesome-editorjs?tab=readme-ov-file

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
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import AttachesTool from '@editorjs/attaches';
import CodeTool from '@editorjs/code';
import Warning from '@editorjs/warning';
import NestedList from '@editorjs/nested-list';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
import editorjsCodeflask from '@calumk/editorjs-codeflask';
import ToggleBlock from 'editorjs-toggle-block';

import ApplicationController from "../../../javascript/controllers/application_controller";
import { csrfToken } from '../../../javascript/controllers/api/api_helpers';


export default class EditorjsController extends ApplicationController {
  static targets = ["editor"]
  static values = {
    ...super.values,
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'savedData', defaultValue: this.demoSavedData()})
    this.setParams({name: 'endpointUploadImageByFile', defaultValue: '/images/editorjs_upload_by_file'})
    this.setParams({name: 'endpointUploadImageByUrl', defaultValue: '/images/editorjs_upload_by_url'})
  }

  initComplete() {
    console.log(this)
    if (!this.hasEditorTarget) {
      this.element.insertAdjacentHTML('afterbegin', `<div data-${this.identifier}-target="editor"></div>`)
    }
    this.editorJS = new EditorJS({
      holder: this.editorTarget,
      autofocus: true,
      data: this.savedDataParams,
      tools: {
        header: {
          class: Header,
          shortcut: 'CMD+SHIFT+H',
          tunes: ['alignmentTuneTool'],
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4],
            defaultLevel: 3
          }
        },
        // image: SimpleImage,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: this.endpointUploadImageByFileParams, // Your backend file uploader endpoint
              byUrl: this.endpointUploadImageByUrlParams, // Your endpoint that provides uploading by Url
            },
            additionalRequestHeaders: {
              'X-CSRF-Token': csrfToken()
            },
            additionalRequestData: {
              record_id: this.recordIdParams,
              record_class: this.recordClassParams,
            }
          }
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        // nestedList: {
        //   class: NestedList,
        //   inlineToolbar: true,
        //   config: {
        //     defaultStyle: 'unordered'
        //   },
        // },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true
            }
          }
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        // attaches: {
        //   class: AttachesTool,
        //   config: {
        //     endpoint: 'http://localhost:8008/uploadFile'
        //   }
        // },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        // raw: {
        //   class: RawTool,
        //   // placeholder: "Your HTML code",
        // },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        alignmentTuneTool: {
          class:AlignmentTuneTool,
          config:{
            default: "left",
            blocks: {
              header: 'left',
              list: 'left'
            }
          },
        },
        toggle: {
          class: ToggleBlock,
          inlineToolbar: true,
        },
        code: CodeTool,
        // codeFlask : editorjsCodeflask,
        quote: Quote,
        table: Table,
        delimiter: Delimiter,
        linkTool: LinkTool,
      }
    });
  }

  async render() {    
    const outputData = await this.editorJS.save()
    return outputData
  }

  variantClass() {
    return {
      default: {
        element: 'w-full h-fit border-2 border-gray-200 rounded-md p-4',
        editorTarget: 'w-full'
      }
    }
  }

  demoSavedData() {
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

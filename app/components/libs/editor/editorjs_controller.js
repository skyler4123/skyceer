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

import ApiHelpers from '../../../javascript/controllers/api/api_helpers';
import ApplicationController from "../../../javascript/controllers/application_controller";


export default class EditorjsController extends ApplicationController {
  static targets = ["editor"]
  static values = {
    ...super.values,
  }

  initParams() {
    console.log(this)
    this.setParams({name: 'variant', defaultValue: 'default'})
    this.setParams({name: 'endpointUploadImageByFile', defaultValue: '/images/editorjs_upload_by_file'})
    this.setParams({name: 'endpointUploadImageByUrl', defaultValue: '/images/editorjs_upload_by_url'})
  }

  initComplete() {
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
              byFile: this.endpointUploadImageByFileParams, // Your backend file uploader endpoint
              byUrl: this.endpointUploadImageByUrlParams, // Your endpoint that provides uploading by Url
            },
            additionalRequestHeaders: {
              'X-CSRF-Token': ApiHelpers.csrfToken()
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
}

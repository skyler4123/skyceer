import grapesjs from 'grapesjs';
import 'grapesjs-tailwind';
import ApplicationController from "../../../javascript/controllers/application_controller";

export default class extends ApplicationController {
  static targets = ["editor"]
  static values = {
    ...super.values,
  }

  initParams() {
    this.setParams({name: 'variant', defaultValue: 'default'})
  }

  initComplete() {
    const escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');
    this.editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: this.element,
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '300px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: { defaults: [] },
      plugins: ['grapesjs-tailwind'],
    });
    
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

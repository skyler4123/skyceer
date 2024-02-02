import * as THREE from 'three';
import { Controller } from "@hotwired/stimulus"
import { Button } from '../../components/components';

export default class extends Controller {
  initialize() {
    console.log("Hello, Stimulus!", this.element);
    this.element.innerHTML = Button({klass: 'w-64 h-40 bg-green-500'}, () => {
      return `<img class="w-64 h-40 object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">`
    })
  }
  
}

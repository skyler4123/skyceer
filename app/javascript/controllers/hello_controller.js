
import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static targets = ["element"]
  static values = {
    head: { type: String, default: `<script src="https://unpkg.com/@popperjs/core@2"></script><script src="https://unpkg.com/tippy.js@6"></script>` }
  }

  demo(event) {
    console.log(event)
  }
}

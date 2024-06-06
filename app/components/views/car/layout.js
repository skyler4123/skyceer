import { footer } from "./footer"
import { header } from "./header"

export const layout = (children) => {
  return `
    <header class="w-full h-full">
      ${header()}
    </header>
    ${children}
    <footer class='w-10/12 h-full'>
      ${footer()}
    </footer>
  `
}
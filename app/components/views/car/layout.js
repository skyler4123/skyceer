import { carFooter } from "./footer"
import { carHeader } from "./header"

export const carLayout = (children) => {
  return `
    <header class="w-full h-full">
      ${carHeader()}
    </header>
    ${children}
    <footer class='w-10/12 h-full'>
      ${carFooter()}
    </footer>
  `
}
import { Constants } from "../../../javascript/controllers/constants"

export const search = ({identifier}) => {
  return `
    <form data-${identifier}-target="search">
      <div class="my-5">
        <label>
          Name
          <input name="name"/>
        </label>
        <label>
          Brand
          <input name="brand"/>
        </label>
        <label>
          Price
          <input name="price"/>
        </label>
        <input type="submit" value="Search"/>
      </div>
    </form>
  `
}
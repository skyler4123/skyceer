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
        <label>
          Post Purpose
          <select name="post_purpose">
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
            <option value="sell_or_rent">Sell or Rent</option>
          </select>
        </label>
        <input type="submit" value="Search"/>
      </div>
    </form>
  `
}
export const form = (identifier) => {
  return `
    <form data-${identifier}-target="form" class="contents" action="/vehicle_cars" accept-charset="UTF-8" method="post"><input type="hidden" autocomplete="off">

      <div class="my-5">
        <label for="vehicle_car_name">Name</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="text" name="vehicle_car[name]" id="vehicle_car_name">
      </div>

      <div class="my-5">
        <label for="vehicle_vehicle_brand">Vehicle brand</label>
        <select name="vehicle_car[brand]" data-${identifier}-target="brandInput" class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full"></select>
      </div>

      <div class="my-5">
        <label for="vehicle_car_model">Model</label>
        <select name="vehicle_car[car_model]" data-${identifier}-target="modelInput" class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full"></select>
      </div>

      <div class="my-5">
        <label for="vehicle_car_version">Version</label>
        <select name="vehicle_car[car_version]" data-${identifier}-target="versionInput" class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full"></select>
      </div>

      <div class="my-5">
        <label for="vehicle_car_year">Year</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="number" min="1900" max="2099" step="1" name="vehicle_car[year]" value="2024" id="vehicle_car_year">
      </div>

      <div class="my-5">
        <label for="vehicle_car_price">Price</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="number" min="0" step="1" name="vehicle_car[price]" id="vehicle_car_price">
      </div>

      <div class="my-5">
        <label for="vehicle_car_post_purpose">Vehicle store</label>
        <select name="vehicle_car[post_purpose]" class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full">
          <option value="sell">For Sell</option>
          <option value="rent">For Rent</option>
          <option value="sell_or_rent">For Sell or Rent</option>
        </select>
      </div>

      <div class="my-5">
        <label for="vehicle_car_vehicle_store_id">Vehicle store</label>
        <select name="vehicle_car[vehicle_store_id]" data-${identifier}-target="storeInput" class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full"></select>
      </div>

      <div class="my-5">
        <label for="vehicle_car_coordinates">Coordinates</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" data-${identifier}-target="coordinateInput" type="text" value="0.0 0.0" name="vehicle_car[coordinates]" id="vehicle_car_coordinates">
      </div>

      <div class="my-5">
        <label for="vehicle_car_released_at">Released at</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="date" name="vehicle_car[released_at]" id="vehicle_car_released_at">
      </div>

      <div class="my-5">
        <label for="vehicle_car_verified">Verified</label>
        <input name="vehicle_car[verified]" type="hidden" value="0" autocomplete="off"><input class="block mt-2 h-5 w-5" type="checkbox" value="1" name="vehicle_car[verified]" id="vehicle_car_verified">
      </div>

      <div class="my-5">
        <label for="vehicle_car_expired">Expired</label>
        <input name="vehicle_car[expired]" type="hidden" value="0" autocomplete="off"><input class="block mt-2 h-5 w-5" type="checkbox" value="1" name="vehicle_car[expired]" id="vehicle_car_expired">
      </div>

      <div class="inline">
        <input type="submit" name="commit" value="Create Vehicle car" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer" data-disable-with="Create Vehicle car">
      </div>
    </form>
  `
}
export const form = (identifier) => {
  return `
    <form data-${identifier}-target="form" class="contents" action="/car_cars" accept-charset="UTF-8" method="post"><input type="hidden" autocomplete="off">

      <div class="my-5">
        <label for="car_car_name">Name</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="text" name="car_car[name]" id="car_car_name">
      </div>

      <div class="my-5">
        <label for="car_car_model">Model</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="text" name="car_car[model]" id="car_car_model">
      </div>

      <div class="my-5">
        <label for="car_car_car_brand_id">Car brand</label>
        <select name="car_car[car_brand_id]" data-${identifier}-target="brandInput"></select>
      </div>

      <div class="my-5">
        <label for="car_car_car_store_id">Car store</label>
        <select name="car_car[car_store_id]" data-${identifier}-target="storeInput"></select>
      </div>

      <div class="my-5">
        <label for="car_car_price">Price</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="text" name="car_car[price]" id="car_car_price">
      </div>

      <div class="my-5">
        <label for="car_car_version">Version</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="text" name="car_car[version]" id="car_car_version">
      </div>

      <div class="my-5">
        <label for="car_car_coordinates">Coordinates</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" data-${identifier}-target="coordinateInput" type="text" value="0.0 0.0" name="car_car[coordinates]" id="car_car_coordinates">
      </div>

      <div class="my-5">
        <label for="car_car_released_at">Released at</label>
        <input class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" type="date" name="car_car[released_at]" id="car_car_released_at">
      </div>

      <div class="my-5">
        <label for="car_car_verified">Verified</label>
        <input name="car_car[verified]" type="hidden" value="0" autocomplete="off"><input class="block mt-2 h-5 w-5" type="checkbox" value="1" name="car_car[verified]" id="car_car_verified">
      </div>

      <div class="my-5">
        <label for="car_car_expired">Expired</label>
        <input name="car_car[expired]" type="hidden" value="0" autocomplete="off"><input class="block mt-2 h-5 w-5" type="checkbox" value="1" name="car_car[expired]" id="car_car_expired">
      </div>

      <div class="inline">
        <input type="submit" name="commit" value="Create Car car" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer" data-disable-with="Create Car car">
      </div>
    </form>
  `
}
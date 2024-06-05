import { icon, link } from "../../../javascript/controllers/components"

export const car = (car) => {
  console.log(car)
  return `
    <div id="car_car_${car.id} }">
      <p class="my-5">
        <strong class="block font-medium mb-1">Name:</strong>
        ${ car.name }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Model:</strong>
        ${ car.model }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Car brand:</strong>
        ${ car.car_brand_id }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Car user:</strong>
        ${ car.car_user_id }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Price:</strong>
        ${ car.price }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Version:</strong>
        ${ car.version }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Coordinates:</strong>
        ${ car.coordinates }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Released at:</strong>
        ${ car.released_at }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Verified:</strong>
        ${ car.verified }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Expired:</strong>
        ${ car.expired }
      </p>

    </div>
    ${link({label: "Edit this car_car", url: `/car_cars/${car.id}/edit`, klass: "mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"})}
    ${link({label: "Destroy this car_car", url: `/car_cars/${car.id}`, method: 'delete', klass: "mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"})}
    ${link({label: "Back to car_cars", url: '/car_cars', klass: 'ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium'})}
  `
}
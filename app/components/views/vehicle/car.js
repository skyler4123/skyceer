import { Icon, Link } from "../../../javascript/controllers/components"

export const car = (car) => {
  return `
    <div id="vehicle_car_${car.id} }">
      <p class="my-5">
        <strong class="block font-medium mb-1">Name:</strong>
        ${ car.name }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Model:</strong>
        ${ car.model }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Vehicle brand:</strong>
        ${ car.brand }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Vehicle user:</strong>
        ${ car.vehicle_user_id }
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
    ${Link({label: "Edit this vehicle_car", url: `/vehicle_cars/${car.id}/edit`, klass: "mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"})}
    ${Link({label: "Destroy this vehicle_car", url: `/vehicle_cars/${car.id}`, method: 'delete', klass: "mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"})}
    ${Link({label: "Back to vehicle_cars", url: '/vehicle_cars', klass: 'ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium'})}
  `
}
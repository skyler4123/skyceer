import { link } from "../../../javascript/controllers/components"

export const user = (user) => {
  return `
    <div id="user_${user.id}" class="w-full h-full">
      <p class="my-5">
        <strong class="block font-medium mb-1">Email:</strong>
        ${ user.email }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Name:</strong>
        ${ user.name }
      </p>

      <p class="my-5">
        <strong class="block font-medium mb-1">Verified:</strong>
        ${ user.verified }
      </p>

      ${link({label: 'Show this user', url: `/users/${user.id}`, klass: "rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"})}
      ${link({label: 'Edit this user', url: `/users/${user.id}/edit`, klass: 'rounded-lg py-3 ml-2 px-5 bg-gray-100 inline-block font-medium'})}
      ${user.session_id && link({label: 'Chat with this user!', url: `/chat_conversations?guess_session_id=${user.session_id}`, variant: 'default', data: {'turbo-stream': true}})}
    </div>

  `
}

import { createForm, createInputTag } from "controllers/data_helpers";
import LogoController from "controllers/logo_controller";
import ApplicationController from "controllers/application_controller";

export default class Registrations_NewController extends ApplicationController {

  init()  {
    this.initHTML();
  }

  initHTML() {
    this.element.innerHTML = `
      <div class="w-full h-screen bg-[url('/images/alexander-grey-eMP4sYPJ9x0-unsplash.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div class="rounded-xl bg-gray-800/50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div class="text-white">
            <div class="mb-8 flex flex-col items-center">
              <div class="w-14 h-14" data-controller="${LogoController.identifier}"></div>
              <h1 class="mb-2 text-2xl">Skyceer</h1>
              <span class="text-gray-300">Enter Login Details</span>
            </div>
            ${createForm({
              action: "/sign_up",
              method: "post",
              className: "flex flex-col gap-4",
              html: `
                <div class="mb-4 text-lg">
                  ${createInputTag({
                    className: "rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md",
                    name: "name",
                    type: "text",
                    placeholder: "Your Name",
                    required: true,
                  })}
                </div>
                <div class="mb-4 text-lg">
                  ${createInputTag({
                    className: "rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md",
                    name: "email",
                    type: "email",
                    placeholder: "email@example.com",
                    required: true,
                  })}
                </div>
                <div class="mb-4 text-lg">
                  ${createInputTag({
                    className: "rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md",
                    name: "password",
                    type: "password",
                    placeholder: "*********",
                    required: true,
                  })}
                </div>
                <div class="mb-4 text-lg">
                  ${createInputTag({
                    className: "rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md",
                    name: "confirm_password",
                    type: "password",
                    placeholder: "*********",
                    required: true,
                  })}
                </div>
                <div class="mt-4 flex justify-center text-lg text-black">
                  <button type="submit" class="rounded-3xl bg-gray-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-600">Sign Up</button>
                </div>
                <div class="mt-4 flex justify-center text-lg text-black">
                  <a href="/sign_in" class="text-gray-300 hover:underline">Already have an account? Sign in</a>
                </div>
              `
            })}
          </div>
        </div>
      </div>
    `
  }
}

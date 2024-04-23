# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "@hotwired--stimulus.js" # @3.2.2
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/components", under: "controllers", to: "components"

# pin "dayjs", to: "https://ga.jspm.io/npm:dayjs@1.11.10/dayjs.min.js"
# pin "flatpickr", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/esm/index.js"
# pin "flatpickr/dist/l10n/ru.js", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/l10n/ru.js"
# pin "flatpickr/dist/l10n/ja.js", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/l10n/ja.js"
# pin "trix", to: "https://ga.jspm.io/npm:trix@2.0.6/dist/trix.esm.min.js"
# pin "sortablejs", to: "https://ga.jspm.io/npm:sortablejs@1.15.0/modular/sortable.esm.js"
# pin "@editorjs/editorjs", to: "https://ga.jspm.io/npm:@editorjs/editorjs@2.28.1/dist/editorjs.mjs"
# pin "@editorjs/list", to: "https://ga.jspm.io/npm:@editorjs/list@1.8.0/dist/bundle.js"
# pin "@editorjs/header", to: "https://ga.jspm.io/npm:@editorjs/header@2.7.0/dist/bundle.js"
# pin "@editorjs/link", to: "https://ga.jspm.io/npm:@editorjs/link@2.5.0/dist/bundle.js"
# pin "@editorjs/raw", to: "https://ga.jspm.io/npm:@editorjs/raw@2.4.0/dist/bundle.js"
# pin "@editorjs/simple-image", to: "https://ga.jspm.io/npm:@editorjs/simple-image@1.5.1/dist/bundle.js"
# pin "@editorjs/image", to: "https://ga.jspm.io/npm:@editorjs/image@2.8.1/dist/bundle.js"
# pin "@editorjs/checklist", to: "https://ga.jspm.io/npm:@editorjs/checklist@1.5.0/dist/bundle.js"
# pin "@editorjs/embed", to: "https://ga.jspm.io/npm:@editorjs/embed@2.5.3/dist/bundle.js"
# pin "@editorjs/quote", to: "https://ga.jspm.io/npm:@editorjs/quote@2.5.0/dist/bundle.js"
# pin "@editorjs/table", to: "https://cdn.jsdelivr.net/npm/@editorjs/table@2.3.0/dist/table.mjs"
# pin "morphdom", to: "https://ga.jspm.io/npm:morphdom@2.7.1/dist/morphdom-esm.js"
# pin "cleave.js", to: "https://ga.jspm.io/npm:cleave.js@1.6.0/dist/cleave.js"
# pin "stimulus-use", to: "https://ga.jspm.io/npm:stimulus-use@0.52.2/dist/index.js"
# pin "apexcharts", to: "https://ga.jspm.io/npm:apexcharts@3.45.1/dist/apexcharts.common.js"
# pin "@toast-ui/calendar", to: "https://ga.jspm.io/npm:@toast-ui/calendar@2.1.3/dist/toastui-calendar.mjs"
# pin "tui-date-picker", to: "https://ga.jspm.io/npm:tui-date-picker@4.3.3/dist/tui-date-picker.js"
# pin "tui-time-picker", to: "https://ga.jspm.io/npm:tui-time-picker@2.1.6/dist/tui-time-picker.js"
# pin "tailwind-merge" # @2.2.0
# pin "highlight.js", to: "https://ga.jspm.io/npm:highlight.js@11.8.0/es/index.js", preload: true
# pin "emoji-mart" # @5.5.2
pin "axios", to: "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js", preload: true
# pin "@googlemaps/js-api-loader", to: "@googlemaps--js-api-loader.js" # @1.16.6
# pin 'uuid', to: "https://jspm.dev/uuid"

pin "dayjs" # @1.11.10
pin "flatpickr" # @4.6.13
pin "flatpickr/dist/l10n/ru.js", to: "flatpickr--dist--l10n--ru.js.js" # @4.6.13
pin "flatpickr/dist/l10n/ja.js", to: "flatpickr--dist--l10n--ja.js.js" # @4.6.13
pin "trix" # @2.1.0
pin "sortablejs" # @1.15.2
pin "@editorjs/editorjs", to: "@editorjs--editorjs.js" # @2.29.0
pin "@editorjs/list", to: "@editorjs--list.js" # @1.9.0
pin "@editorjs/header", to: "@editorjs--header.js" # @2.8.1
pin "@editorjs/link", to: "@editorjs--link.js" # @2.6.2
pin "@editorjs/raw", to: "@editorjs--raw.js" # @2.5.0
pin "@editorjs/simple-image", to: "@editorjs--simple-image.js" # @1.6.0
pin "@editorjs/image", to: "@editorjs--image.js" # @2.9.0
pin "@editorjs/checklist", to: "@editorjs--checklist.js" # @1.6.0
pin "@editorjs/embed", to: "@editorjs--embed.js" # @2.7.1
pin "@editorjs/quote", to: "@editorjs--quote.js" # @2.6.0
pin "@editorjs/table", to: "@editorjs--table.js" # @2.3.0
pin "morphdom" # @2.7.2
pin "cleave.js" # @1.6.0
pin "stimulus-use" # @0.52.2
pin "apexcharts" # @3.48.0
pin "@toast-ui/calendar", to: "@toast-ui--calendar.js" # @2.1.3
pin "tui-date-picker" # @4.3.3
pin "tui-time-picker" # @2.1.6
pin "tailwind-merge" # @2.3.0
pin "uuid" # @9.0.1
pin "openlayers" # @4.6.5
pin "emoji-mart" # @5.5.2
pin "colormap" # @2.3.2
pin "lerp" # @1.0.3

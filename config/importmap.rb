# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "@hotwired--stimulus.js" # @3.2.2
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/components", under: "controllers", to: "components"

pin "axios", to: "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js", preload: true
pin "dayjs" # @1.11.12
pin "flatpickr" # @4.6.13
pin "flatpickr/dist/l10n/ru.js", to: "flatpickr--dist--l10n--ru.js.js" # @4.6.13
pin "flatpickr/dist/l10n/ja.js", to: "flatpickr--dist--l10n--ja.js.js" # @4.6.13
pin "trix" # @2.1.4
pin "sortablejs" # @1.15.2
pin "@editorjs/editorjs", to: "@editorjs--editorjs.js" # @2.30.2
pin "@editorjs/list", to: "@editorjs--list.js" # @1.10.0
pin "@editorjs/header", to: "@editorjs--header.js" # @2.8.7
pin "@editorjs/link", to: "@editorjs--link.js" # @2.6.2
pin "@editorjs/raw", to: "@editorjs--raw.js" # @2.5.0
pin "@editorjs/simple-image", to: "@editorjs--simple-image.js" # @1.6.0
pin "@editorjs/image", to: "@editorjs--image.js" # @2.9.3
pin "@editorjs/checklist", to: "@editorjs--checklist.js" # @1.6.0
pin "@editorjs/embed", to: "@editorjs--embed.js" # @2.7.4
pin "@editorjs/quote", to: "@editorjs--quote.js" # @2.6.0
pin "@editorjs/table", to: "@editorjs--table.js" # @2.3.0
pin "morphdom" # @2.7.4
pin "cleave.js" # @1.6.0
pin "stimulus-use" # @0.52.2
pin "apexcharts" # @3.51.0
pin "@toast-ui/calendar", to: "@toast-ui--calendar.js" # @2.1.3
pin "tui-date-picker" # @4.3.3
pin "tui-time-picker" # @2.1.6
pin "tailwind-merge" # @2.4.0
pin "uuid" # @10.0.0
pin "openlayers" # @4.6.5
pin "emoji-mart" # @5.6.0
pin "colormap" # @2.3.2
pin "lerp" # @1.0.3
pin "highlight.js", to: "https://ga.jspm.io/npm:highlight.js@11.4.0/es/index.js"
pin "editorjs-html" # @3.4.3
pin "tinymce", to: "https://cdn.tiny.cloud/1/no-api-key/tinymce/7/tinymce.min.js"
pin "swiper"#, to: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" # @11.1.12
pin "sweetalert2" # @11.14.1

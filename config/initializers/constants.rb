def TrueOrFalse(value_need_to_check)
  ActiveModel::Type::Boolean.new.cast(value_need_to_check)
end

WEBSOCKET_HOST = ENV.fetch('KAMAL_WEBSOCKET_HOST') { "0.0.0.0" }
WEBSOCKET_PORT = ENV.fetch('KAMAL_WEBSOCKET_PORT') { "8080" }
WEBSOCKET_URL = WEBSOCKET_HOST + ':' + WEBSOCKET_PORT

SIDEKIQ_UI_USER = ENV.fetch('SIDEKIQ_UI_USER') { "admin" }
SIDEKIQ_UI_PASSWORD = ENV.fetch('SIDEKIQ_UI_PASSWORD') { "password" }

JWT_ACCESS_EXPIRATION = ENV.fetch('JWT_ACCESS_EXPIRATION') { "1" }
JWT_REFRESH_EXPIRATION = ENV.fetch('JWT_REFRESH_EXPIRATION') { "10" }
SAMPLE_ERB_CODE = <<~TEXT
<div class="w-full flex flex-row">
<div class="w-1/4 min-h-screen">
  <%= text(label: "Components", text_class: 'mb-1 rounded-md px-2 py-1 text-sm font-semibold') %>
  <div class="px-2 py-1 text-sm">
    <%= button(label: "Basic", event: { id: new_id, action: :tab, value: 0, listener: :click, initialize: true}) %>
  </div>
</div>
</div>
TEXT
ENABLE_HEADLESS_MODE_BROWSER = TrueOrFalse(ENV.fetch('ENABLE_HEADLESS_MODE_BROWSER') { 'true' })



class DemoController < ApplicationController
  def index
    @sample_erb_code = <<~TEXT
      <div class="w-full flex flex-row">
        <div class="w-1/4 min-h-screen">
          <%= text(label: "Components", text_class: 'mb-1 rounded-md px-2 py-1 text-sm font-semibold') %>
          <div class="px-2 py-1 text-sm">
            <%= button(label: "Basic", event: { id: new_id, action: :tab, value: 0, listener: :click, initialize: true}) %>
          </div>
        </div>
      </div>
    TEXT
  end

  def new
    @sample_erb_code = <<~TEXT
      <div class="w-full flex flex-row">
        <div class="w-1/4 min-h-screen">
          <%= text(label: "Components", text_class: 'mb-1 rounded-md px-2 py-1 text-sm font-semibold') %>
          <div class="px-2 py-1 text-sm">
            <%= button(label: "Basic", event: { id: new_id, action: :tab, value: 0, listener: :click, initialize: true}) %>
          </div>
        </div>
      </div>
    TEXT
  end
end

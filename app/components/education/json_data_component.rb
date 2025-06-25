# frozen_string_literal: true

class Education::JsonDataComponent < ViewComponent::Base
  erb_template <<-ERB
    <script>
      window.JsonData = {
        data: <%= @json_data&.html_safe || {} %>,
        pagination: <%= @pagination&.to_json&.html_safe || {} %>,
        flash: <%= @flash.to_hash.to_json.html_safe %>
      };
    </script>
  ERB

  # data must be json formatted
  def initialize(json_data: nil, pagination: nil, flash: nil)
    @json_data = json_data
    @pagination = pagination
    @flash = flash
  end
end

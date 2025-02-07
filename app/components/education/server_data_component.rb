# frozen_string_literal: true

class Education::ServerDataComponent < ViewComponent::Base
  erb_template <<-ERB
      <script>
        window.ServerData = {
          data: <%= @data.to_json.html_safe %>,
          pagination: <%= @pagination.to_json.html_safe %>,
          flash: <%= @flash.to_hash.to_json.html_safe %>
        }
      </script>
  ERB

  def initialize(data: nil, pagination: nil, flash: nil)
    @data = data
    @pagination = pagination
    @flash = flash
  end
end

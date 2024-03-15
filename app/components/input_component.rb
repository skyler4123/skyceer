# frozen_string_literal: true

class InputComponent < ApplicationComponent
  erb_template <<-ERB
    <input class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-options-value="<%= @options %>">
  ERB
end

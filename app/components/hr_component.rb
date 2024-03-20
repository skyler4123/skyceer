# frozen_string_literal: true

class HrComponent < ApplicationComponent
  erb_template <<-ERB
    <hr class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
  ERB
end

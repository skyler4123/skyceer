# frozen_string_literal: true

class ModalComponent < ApplicationComponent

  erb_template <<-ERB
    <div class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="background"></div>
      <div data-<%= @controller_name %>-target="content">
        <%= content %>
      </div>
    </div>
  ERB

end

# frozen_string_literal: true

class AccordionComponent < ApplicationComponent

  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-options-value="<%= @options %>">
      <div data-<%= @controller_name %>-target="overflow">
      <%= content %>
    </div>
    </<%= @tag %>>
  ERB
  
end

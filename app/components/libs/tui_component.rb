# frozen_string_literal: true

class Libs::TuiComponent < ApplicationComponent

  erb_template <<-ERB
    <<%= @tag %> class="hidden w-full" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>" style="height: 800px">
      <%= content %>
    </<%= @tag %>>
  ERB
  
end

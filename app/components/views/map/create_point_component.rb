# frozen_string_literal: true

class Views::Map::CreatePointComponent < ApplicationComponent
  erb_template <<-ERB
    <<%= @tag %> class="w-full h-[500px]" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div class="w-full h-full" data-<%= @controller_name %>-target="map"></div>
    </<%= @tag %>>
  ERB

end

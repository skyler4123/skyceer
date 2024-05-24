# frozen_string_literal: true

class Views::Car::MapCarIndexComponent < ApplicationComponent
  # erb_template <<-ERB
  #   <<%= @tag %> class="w-full h-[500px]" data-controller="<%= @controllers %>" <%= @data %> data-<%= @controller_name %>-params-value="<%= @params %>">
  #     <div class="w-full h-full" data-<%= @controller_name %>-target="map"></div>
  #   </<%= @tag %>>
  # ERB

end

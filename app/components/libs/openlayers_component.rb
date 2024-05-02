# frozen_string_literal: true

class Libs::OpenlayersComponent < ApplicationComponent

  erb_template <<-ERB
    <<%= @tag %> class="w-full h-[500px]" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="map"></div>
      <a data-<%= @controller_name %>-target="download" download="features.json">Download</a>
      <button data-<%= @controller_name %>-target="clear">Clear</button>
      <input type='range' min="0" max="500" data-action="input-><%= @controllers %>#input" data-<%= @controller_name %>-target="input" />
    </<%= @tag %>>
  ERB

end

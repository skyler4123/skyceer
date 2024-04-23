# frozen_string_literal: true

class Libs::OpenlayersComponent < ApplicationComponent

  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <div data-<%= @controller_name %>-target="map"></div>
      <a data-<%= @controller_name %>-target="download" download="features.json">Download</a>
      <button data-<%= @controller_name %>-target="clear">Clear</button>
    </<%= @tag %>>
  ERB

end

# frozen_string_literal: true

class ImgComponent < ApplicationComponent

  erb_template <<-ERB
    <img class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
  ERB
  
end

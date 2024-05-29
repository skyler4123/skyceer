# frozen_string_literal: true

class Views::Chat::BoxComponent < ApplicationComponent

  include Turbo::StreamsHelper

  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <%= turbo_stream_from(@turbo_stream_from) %>
      <div data-<%= @controller_name %>-target="content"></div>
      <%= content %>
    </<%= @tag %>>
  ERB

  def initialize(controller: nil, tag: :div, data: nil, **params)
    raise ArgumentError if !params[:conversation_id] || !params[:chat_user_id]
    @turbo_stream_from = params[:conversation_id]
    @chat_user_id = params[:chat_user_id]
    super
  end

end

# frozen_string_literal: true

class Views::Chat::BoxComponent < ApplicationComponent

  include Turbo::StreamsHelper

  erb_template <<-ERB
    <<%= @tag %> class="hidden" data-controller="<%= @controllers %>" data-<%= @controller_name %>-params-value="<%= @params %>">
      <%= turbo_stream_from(@turbo_stream_from) %>
      <%= content %>
    </<%= @tag %>>
  ERB

  def initialize(controller: nil, tag: :div, data: nil, **params)
    raise ArgumentError if !params[:conversation_id] || !params[:host_session_id]
    @turbo_stream_from = params[:conversation_id]
    @host_session_id = params[:host_session_id]
    super
  end

end

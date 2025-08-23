module ApplicationController::RequestConcern
  extend ActiveSupport::Concern

  included do
    def referer_params
      return if !request.referer || request.referer == request.url
      original_referer_url = URI.decode_uri_component(request.referer)
      referer_url = URI.parse(original_referer_url)
      URI.decode_www_form(referer_url.query).to_h. with_indifferent_access
    end
  end
end

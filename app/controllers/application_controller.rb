class ApplicationController < ActionController::Base
  # include Rails.application.routes.url_helpers
  include ApplicationController::PunditConcern
  include ApplicationController::FlashConcern
  include Pagy::Backend
  append_view_path(Dir.glob(Rails.root.join('app/packages/*/views')))

  before_action :set_current_request_details
  before_action :authenticate

  private
    def current_user
      Current.session
    end

    def authenticate
      if session_record = Session.find_by_id(cookies.signed[:session_token])
        Current.session = session_record
      else
        redirect_to Rails.application.routes.url_helpers.sign_in_path(redirect_to: request.url)
      end
    end

    def set_current_request_details
      Current.user_agent = request.user_agent
      Current.ip_address = request.ip
    end

    def set_cookie(session:, user:)
      cookies.signed.permanent[:session_token] = { value: session.id, httponly: true }
      cookies[:id] = user.id
      cookies[:email] = user.email
      cookies[:name] = user.name
    end

    def create_session_for_all_package(user:)
      Session.create!(
        name: user.name,
        email: user.email,
        user_id: user.id,
        role: user.role,
        education_role: user.education_role
      )
    end

    def pagy_custom(collection, vars = {})
      pagy = Pagy.new(count: collection.count(*vars[:count_args]), page: params[:page], **vars)
      [pagy, collection.offset(pagy.offset).limit(pagy.items)]
    end

    def referer_params
      return if !request.referer || request.referer == request.url
      original_referer_url = URI.decode_uri_component(request.referer)
      referer_url = URI.parse(original_referer_url)
      URI::decode_www_form(referer_url.query).to_h. with_indifferent_access
    end
end

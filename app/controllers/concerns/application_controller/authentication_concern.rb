module ApplicationController::Authentication
  extend ActiveSupport::Concern
  
  included do
    before_action :authenticate

    private

    def authenticate
      if session_record = Session.find_by_id(cookies.signed[:session_token])
        Current.session = session_record
      else
        redirect_to Rails.application.routes.url_helpers.sign_in_path(redirect_to: request.url)
      end
    end

  end
end

class ApplicationController < ActionController::Base
  layout 'education'
  append_view_path(Dir.glob(Rails.root.join('app/packages/*/views')))

  # include ApplicationController::AuthenticationConcern
  # include ApplicationController::CurrentConcern
  include ApplicationController::FlashConcern
  include ApplicationController::CookieConcern
  # include ApplicationController::RequestConcern
  # include ApplicationController::AuthorizationConcern
  include ApplicationController::PaginationConcern

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  before_action :set_current_request_details
  before_action :authenticate

  private
    def current_user
      Current.user
    end
    
    def authenticate
      if session_record = Session.find_by_id(cookies.signed[:session_token])
        Current.session = session_record
      else
        redirect_to sign_in_path
      end
    end

    def set_current_request_details
      Current.user_agent = request.user_agent
      Current.ip_address = request.ip
    end
end

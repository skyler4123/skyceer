class ApplicationController < ActionController::Base
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

  before_action :set_current_session
  before_action :set_current_request_details
  before_action :authenticate
  before_action :check_sign_out_and_clear_cookie
  before_action :set_package_name

  helper_method :current_user, :is_signed_in

  private
    def current_user
      Current.user
    end
    
    def set_current_session
      if session_record = Session.find_by_id(cookies.signed[:session_token])
        Current.session = session_record
      end
    end

    def authenticate
      # if session_record = Session.find_by_id(cookies.signed[:session_token])
      #   Current.session = session_record
      # else
      #   redirect_to sign_in_path
      # end
      unless Current.session
        clear_cookie_for_sign_out
        redirect_to sign_in_path
      end
    end

    def set_current_request_details
      Current.user_agent = request.user_agent
      Current.ip_address = request.ip
    end

    def is_signed_in
      !!current_user
    end

    def render_not_found
      render file: "#{Rails.root}/public/404.html", status: :not_found, layout: false
    end

    def set_package_name
      @package_name = :application
    end
end

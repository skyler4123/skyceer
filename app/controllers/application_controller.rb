class ApplicationController < ActionController::Base
  append_view_path(Dir.glob(Rails.root.join('app/packages/*/views')))

  # include Rails.application.routes.url_helpers
  include Pagy::Backend
  include ApplicationController::PunditConcern
  include ApplicationController::FlashConcern
  include ApplicationController::CookieConcern
  include ApplicationController::CurrentConcern
  include ApplicationController::RequestConcern


  before_action :set_current_request_details
  before_action :authenticate

  private
    def authenticate
      if session_record = Session.find_by_id(cookies.signed[:session_token])
        Current.session = session_record
      else
        redirect_to Rails.application.routes.url_helpers.sign_in_path(redirect_to: request.url)
      end
    end

    def pagy_custom(collection, vars = {})
      pagy = Pagy.new(count: collection.count(*vars[:count_args]), page: params[:page], **vars)
      [pagy, collection.offset(pagy.offset).limit(pagy.items)]
    end
end

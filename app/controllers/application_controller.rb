class ApplicationController < ActionController::Base
  append_view_path(Dir.glob(Rails.root.join('app/packages/*/views')))

  before_action :set_current_request_details
  before_action :authenticate

  private
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

    def set_cookie(session:, user:)
      cookies.signed.permanent[:session_token] = { value: session.id, httponly: true }
      cookies[:email] = user.email
      cookies[:name] = user.name
    end

    def create_session_for_all_package(user:)
      Session.create!(
        user_id: user.id,
        car_user_id: user.car_user.id,
        chat_user_id: ChatUser.find_by(user_id: user.id).id,
        english_user_id: EnglishUser.find_by(user_id: user.id).id,
      )
    end

    def pagy_custom(collection, vars = {})
      pagy = Pagy.new(count: collection.count(*vars[:count_args]), page: params[:page], **vars)
      [pagy, collection.offset(pagy.offset).limit(pagy.items)]
    end
end

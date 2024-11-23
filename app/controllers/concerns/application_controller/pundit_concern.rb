module ApplicationController::PunditConcern
  extend ActiveSupport::Concern
  
  included do
    include Pundit::Authorization

    rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

    private

    def user_not_authorized(exception)
      policy_name = exception.policy.class.to_s.underscore
   
      # flash[:error] = t "You are not authorized to perform this action.", scope: "pundit", default: :default
      flash[:error] = UNAUTHORIZE_MESSAGE
      redirect_back_or_to(root_path)
    end
  end
end

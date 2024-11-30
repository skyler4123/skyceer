module ApplicationController::CookieConcern
  extend ActiveSupport::Concern
  
  included do
    def set_cookie(session:, user:)
      cookies.signed.permanent[:session_token] = { value: session.id, httponly: true }
      cookies.permanent[:id] = user.id
      cookies.permanent[:email] = user.email
      cookies.permanent[:name] = user.name
      cookies.permanent[:role] = user.role
      cookies.permanent[:education_role] = user.education_role
      cookies.permanent[:avatar_path] = user.avatar_path
    end
  end
end

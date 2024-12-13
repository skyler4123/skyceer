module ApplicationController::CookieConcern
  extend ActiveSupport::Concern
  
  included do
    def set_cookie(session:, user:)
      cookies.signed.permanent[:session_token] = { value: session.id, httponly: true }
      cookies.permanent[:id] = user.id
      cookies.permanent[:email] = user.email
      cookies.permanent[:name] = user.name
      cookies.permanent[:role] = user.role
      cookies.permanent[:navigation_name] = user.navigation_record.class.name.underscore.pluralize
      cookies.permanent[:navigation_id] = user.navigation_record.id
      cookies.permanent[:avatar_path] = user.avatar_path
    end

    def delete_cookie
      cookies.delete(:session_token)
      cookies.delete(:id)
      cookies.delete(:email)
      cookies.delete(:name)
      cookies.delete(:role)
      cookies.delete(:navigation_name)
      cookies.delete(:navigation_id)
      cookies.delete(:avatar_path)
    end
  end
end

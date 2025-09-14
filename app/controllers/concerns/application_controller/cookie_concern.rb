module ApplicationController::CookieConcern
  extend ActiveSupport::Concern

  included do
    def set_cookie_for_sign_in(session:, user:)
      cookies.signed.permanent[:session_token] = { value: session.id, httponly: true }
      cookies.permanent[:id] = user.id
      cookies.permanent[:email] = user.email
      cookies.permanent[:name] = user.name
      cookies.permanent[:role] = user.role
      cookies.permanent[:education_role] = user.education_role
      cookies.permanent[:avatar] = user.avatar || user.avatar_path
      cookies.permanent[:navigation_url] = ""
      cookies.permanent[:last_sign_in_at] = Time.current
      cookies.permanent[:is_signed_in] = true
    end

    def clear_cookie_for_sign_out
      cookies.clear
    end

    def check_sign_out_and_clear_cookie
      return if is_signed_in

      clear_cookie_for_sign_out
    end
  end
end

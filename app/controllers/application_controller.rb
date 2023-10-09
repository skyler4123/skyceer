class ApplicationController < ActionController::Base
  append_view_path(Dir.glob(Rails.root.join('app/packages/*/views')))

  before_action :authenticate_user!

  def current_user
    begin
      return false unless session[:access_token]
      @current_user ||= User.find(JsonWebToken.decode(token: session[:access_token])[:id])
      return false unless @current_user.refresh_token
    rescue JWT::DecodeError, JWT::ExpiredSignature
      begin
        return false unless session[:refresh_token]
        @current_user ||= User.find(JsonWebToken.decode(token: session[:refresh_token], algorithm: "HS512")[:id])
        access_token = JsonWebToken.encode(user: @current_user, expire: 3.minutes)
        session[:access_token] = access_token
        @current_user
      rescue JWT::DecodeError, JWT::ExpiredSignature
        false
      end
    end
  end

  def user_signed_in?
    !!current_user
  end

  def authenticate_user!
    redirect_to signin_path unless user_signed_in?
  end
  
end

class Api::ApplicationController < ApplicationController
  include Pagy::Backend

  before_action :authenticate_user!

  # def current_user
  #   begin
  #     return false unless session[:access_token]
  #     @current_user ||= User.find(JsonWebToken.decode(token: session[:access_token])[:id])
  #     return false unless @current_user.refresh_token
  #     @current_user
  #   rescue JWT::DecodeError, JWT::ExpiredSignature, ActiveRecord::RecordNotFound
  #     begin
  #       return false unless session[:refresh_token]
  #       @current_user ||= User.find(JsonWebToken.decode(token: session[:refresh_token], algorithm: "HS512")[:id])
  #       access_token = JsonWebToken.encode(user: @current_user, expire: Constants::JWT_ACCESS_EXPIRATION.to_i.minutes)
  #       session[:access_token] = access_token
  #       @current_user
  #     rescue JWT::DecodeError, JWT::ExpiredSignature, ActiveRecord::RecordNotFound
  #       false
  #     end
  #   end
  # end

  # def user_signed_in?
  #   !!current_user
  # end

  def authenticate_user!
    true
    # redirect_to signin_path unless user_signed_in?
  end

  # def current_blog_user
  #   @current_blog_user ||= BlogUser.find_by(user_id: current_user.id)
  # end
end

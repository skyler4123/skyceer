class ApplicationController < ActionController::Base
  append_view_path(Dir.glob(Rails.root.join('app/packages/*/views')))

  def current_user
    @current_user ||= User.find(JsonWebToken.decode(REDIS.get(session[:token].last(10)))[0]['id'])
  rescue JWT::DecodeError, NoMethodError, Mongoid::Errors::DocumentNotFound 
    false
  end

  def user_signed_in?
    !!current_user
  end

  def authenticate_user!
    redirect_to signin_path unless user_signed_in?
  end
  
end

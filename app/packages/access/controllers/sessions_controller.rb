class SessionsController < ApplicationController

  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
  end

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      access_token = JsonWebToken.encode(user: @user, expire: Constants::JWT_ACCESS_EXPIRATION.to_i.minutes)
      refresh_token = JsonWebToken.encode(user: @user, expire: Constants::JWT_REFRESH_EXPIRATION.to_i.minutes, algorithm: "HS512")
      @user.update(refresh_token: refresh_token)
      session[:access_token] = access_token
      session[:refresh_token] = refresh_token
      flash[:notice] = 'Signin OK!'
      redirect_to posts_path
    else
      redirect_to signin_path
    end
  end

  def destroy
    current_user.update(refresh_token: nil)
    session[:access_token] = nil
    session[:refresh_token] = nil
    flash[:notice] = "Sign Out!!!"
    redirect_to signin_path
  end

  # def omniauth
  #   @user = User.find_or_create_by(email: auth[:info][:email]) do |user|
  #     user.provider = auth[:provider]
  #     user.uid = auth[:uid]
  #     user.email = auth[:info][:email]
  #     user.password = 'password'
  #     user.password_confirmation = user.password
  #   end
  #   if @user.valid?
  #     session[:token] = JsonWebToken.encode(@user)
  #     flash[:notice] = "Đăng nhập thành công!!!"
  #     # SigninMailer.new_signin(@user).deliver_now
  #     redirect_to request.referer
  #   else
  #     flash[:notice] = 'Credential error'
  #     redirect_to signin_path
  #   end
  # end

end

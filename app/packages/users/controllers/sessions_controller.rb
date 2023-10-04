class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      authenticate(user: @user)
      flash[:notice] = 'Signin OK!'
      redirect_to user_path
    else
      redirect_to signin_path
    end
  end

  def destroy
    REDIS.del(session[:token].last(10))
    session[:token] = nil
    flash[:notice] = "Sign Out!!!"
    redirect_to signin_path
  end

  def omniauth
    @user = User.find_or_create_by(email: auth[:info][:email]) do |user|
      user.provider = auth[:provider]
      user.uid = auth[:uid]
      user.email = auth[:info][:email]
      user.password = 'password'
      user.password_confirmation = user.password
    end
    if @user.valid?
      session[:token] = JsonWebToken.encode(@user)
      flash[:notice] = "Đăng nhập thành công!!!"
      # SigninMailer.new_signin(@user).deliver_now
      redirect_to request.referer
    else
      flash[:notice] = 'Credential error'
      redirect_to signin_path
    end
  end

  private
  def authenticate(user:)
    token = JsonWebToken.encode(user)
    session[:token] = token
    REDIS.set(token.last(10), token, ex: JsonWebToken::EXP.to_i.minutes)
  end
end

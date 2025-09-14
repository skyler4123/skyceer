class SessionsController < ApplicationController
  skip_before_action :authenticate, only: %i[ new create ]

  before_action :set_session, only: :destroy

  def index
    @sessions = Current.user.sessions.order(created_at: :desc)
  end

  def new
    render html: "", layout: true
  end

  def create
    user = User.authenticate_by(email: params[:email], password: params[:password])
    user ||= User.authenticate_by(username: params[:username], password: params[:password])
    if user
      @session = user.sessions.create!
      # cookies.signed.permanent[:session_token] = { value: @session.id, httponly: true }
      set_cookie_for_sign_in(session: @session, user: user)
      redirect_to root_path, notice: SIGN_IN_SUCCESS_MESSAGE
    else
      redirect_to sign_in_path(email: params[:email]), alert: "That email or password is incorrect"
    end
  end

  def destroy
    @session.destroy; redirect_to(sessions_path, notice: "That session has been logged out")
  end

  def sign_out
    Current.session.destroy
    cookies.clear
    redirect_to(sessions_path, notice: "That session has been logged out")
  end

  private

    def set_session
      @session = Current.user.sessions.find(params[:id])
    end

    def redirect_url_after_sign_in
      # return url_for(@user) unless referer_params
      # return url_for(@user) unless referer_params[:redirect_to]
      return root_path unless referer_params
      return root_path unless referer_params[:redirect_to]
      referer_params[:redirect_to]
    end
end

class RegistrationsController < ApplicationController
  skip_before_action :authenticate

  def new
    # @user = User.new
    render html: "", layout: true
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session_record = @user.sessions.create!
      # cookies.signed.permanent[:session_token] = { value: session_record.id, httponly: true }
      set_cookie_for_sign_in(session: session_record, user: @user)
      send_email_verification
      redirect_to root_path, notice: SIGN_UP_SUCCESS_MESSAGE
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.permit(:email, :password, :password_confirmation, :name)
    end

    def send_email_verification
      UserMailer.with(user: @user).email_verification.deliver_later
    end
end

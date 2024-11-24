class RegistrationsController < ApplicationController
  skip_before_action :authenticate

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # session_record = @user.sessions.create!
      @session = create_session_for_all_package(user: @user)
      # cookies.signed.permanent[:session_token] = { value: session_record.id, httponly: true }
      set_cookie(session: @session, user: @user)

      send_email_verification
      redirect_to user_path(@user), notice: SIGN_UP_SUCCESS_MESSAGE
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.permit(:email, :password, :password_confirmation)
    end

    def send_email_verification
      UserMailer.with(user: @user).email_verification.deliver_later
    end
end

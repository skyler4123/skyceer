class PaymentUsersController < ApplicationController
  before_action :set_payment_user, only: %i[ show edit update destroy ]

  # GET /payment_users or /payment_users.json
  def index
    @payment_users = PaymentUser.all
  end

  # GET /payment_users/1 or /payment_users/1.json
  def show
  end

  # GET /payment_users/new
  def new
    @payment_user = PaymentUser.new
  end

  # GET /payment_users/1/edit
  def edit
  end

  # POST /payment_users or /payment_users.json
  def create
    @payment_user = PaymentUser.new(payment_user_params)

    respond_to do |format|
      if @payment_user.save
        format.html { redirect_to @payment_user, notice: "Payment user was successfully created." }
        format.json { render :show, status: :created, location: @payment_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_users/1 or /payment_users/1.json
  def update
    respond_to do |format|
      if @payment_user.update(payment_user_params)
        format.html { redirect_to @payment_user, notice: "Payment user was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_users/1 or /payment_users/1.json
  def destroy
    @payment_user.destroy!

    respond_to do |format|
      format.html { redirect_to payment_users_path, status: :see_other, notice: "Payment user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_user
      @payment_user = PaymentUser.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_user_params
      params.expect(payment_user: [ :payment_userable_id, :payment_userable_type ])
    end
end

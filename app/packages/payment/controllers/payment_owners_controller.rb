class PaymentOwnersController < ApplicationController
  before_action :set_payment_owner, only: %i[ show edit update destroy ]

  # GET /payment_owners or /payment_owners.json
  def index
    @payment_owners = PaymentOwner.all
  end

  # GET /payment_owners/1 or /payment_owners/1.json
  def show
  end

  # GET /payment_owners/new
  def new
    @payment_owner = PaymentOwner.new
  end

  # GET /payment_owners/1/edit
  def edit
  end

  # POST /payment_owners or /payment_owners.json
  def create
    @payment_owner = PaymentOwner.new(payment_owner_params)

    respond_to do |format|
      if @payment_owner.save
        format.html { redirect_to @payment_owner, notice: "Payment user was successfully created." }
        format.json { render :show, status: :created, location: @payment_owner }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_owner.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_owners/1 or /payment_owners/1.json
  def update
    respond_to do |format|
      if @payment_owner.update(payment_owner_params)
        format.html { redirect_to @payment_owner, notice: "Payment user was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_owner }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_owner.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_owners/1 or /payment_owners/1.json
  def destroy
    @payment_owner.destroy!

    respond_to do |format|
      format.html { redirect_to payment_owners_path, status: :see_other, notice: "Payment user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_owner
      @payment_owner = PaymentOwner.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_owner_params
      params.expect(payment_owner: [ :payment_ownerable_id, :payment_ownerable_type ])
    end
end

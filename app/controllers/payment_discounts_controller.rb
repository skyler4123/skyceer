class PaymentDiscountsController < ApplicationController
  before_action :set_payment_discount, only: %i[ show edit update destroy ]

  # GET /payment_discounts or /payment_discounts.json
  def index
    @payment_discounts = PaymentDiscount.all
  end

  # GET /payment_discounts/1 or /payment_discounts/1.json
  def show
  end

  # GET /payment_discounts/new
  def new
    @payment_discount = PaymentDiscount.new
  end

  # GET /payment_discounts/1/edit
  def edit
  end

  # POST /payment_discounts or /payment_discounts.json
  def create
    @payment_discount = PaymentDiscount.new(payment_discount_params)

    respond_to do |format|
      if @payment_discount.save
        format.html { redirect_to @payment_discount, notice: "Payment discount was successfully created." }
        format.json { render :show, status: :created, location: @payment_discount }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_discount.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_discounts/1 or /payment_discounts/1.json
  def update
    respond_to do |format|
      if @payment_discount.update(payment_discount_params)
        format.html { redirect_to @payment_discount, notice: "Payment discount was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_discount }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_discount.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_discounts/1 or /payment_discounts/1.json
  def destroy
    @payment_discount.destroy!

    respond_to do |format|
      format.html { redirect_to payment_discounts_path, status: :see_other, notice: "Payment discount was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_discount
      @payment_discount = PaymentDiscount.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_discount_params
      params.expect(payment_discount: [ :payment_user_id, :name, :description, :code, :expire, :amount, :status, :kind ])
    end
end

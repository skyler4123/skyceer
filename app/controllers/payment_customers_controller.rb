class PaymentCustomersController < ApplicationController
  before_action :set_payment_customer, only: %i[ show edit update destroy ]

  # GET /payment_customers or /payment_customers.json
  def index
    @payment_customers = PaymentCustomer.all
  end

  # GET /payment_customers/1 or /payment_customers/1.json
  def show
  end

  # GET /payment_customers/new
  def new
    @payment_customer = PaymentCustomer.new
  end

  # GET /payment_customers/1/edit
  def edit
  end

  # POST /payment_customers or /payment_customers.json
  def create
    @payment_customer = PaymentCustomer.new(payment_customer_params)

    respond_to do |format|
      if @payment_customer.save
        format.html { redirect_to @payment_customer, notice: "Payment customer was successfully created." }
        format.json { render :show, status: :created, location: @payment_customer }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_customers/1 or /payment_customers/1.json
  def update
    respond_to do |format|
      if @payment_customer.update(payment_customer_params)
        format.html { redirect_to @payment_customer, notice: "Payment customer was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_customer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_customers/1 or /payment_customers/1.json
  def destroy
    @payment_customer.destroy!

    respond_to do |format|
      format.html { redirect_to payment_customers_path, status: :see_other, notice: "Payment customer was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_customer
      @payment_customer = PaymentCustomer.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_customer_params
      params.expect(payment_customer: [ :user_id ])
    end
end

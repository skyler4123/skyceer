class PaymentOrdersController < ApplicationController
  before_action :set_payment_order, only: %i[ show edit update destroy ]

  # GET /payment_orders or /payment_orders.json
  def index
    @payment_orders = PaymentOrder.all
  end

  # GET /payment_orders/1 or /payment_orders/1.json
  def show
  end

  # GET /payment_orders/new
  def new
    @payment_order = PaymentOrder.new
  end

  # GET /payment_orders/1/edit
  def edit
  end

  # POST /payment_orders or /payment_orders.json
  def create
    @payment_order = PaymentOrder.new(payment_order_params)

    respond_to do |format|
      if @payment_order.save
        format.html { redirect_to @payment_order, notice: "Payment order was successfully created." }
        format.json { render :show, status: :created, location: @payment_order }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_orders/1 or /payment_orders/1.json
  def update
    respond_to do |format|
      if @payment_order.update(payment_order_params)
        format.html { redirect_to @payment_order, notice: "Payment order was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_order }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_orders/1 or /payment_orders/1.json
  def destroy
    @payment_order.destroy!

    respond_to do |format|
      format.html { redirect_to payment_orders_path, status: :see_other, notice: "Payment order was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_order
      @payment_order = PaymentOrder.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_order_params
      params.expect(payment_order: [ :seller_id, :seller_type, :buyer_id, :buyer_type, :payment_method_id, :payment_discount_id, :status, :total, :paid, :due, :expire ])
    end
end

class EducationSchool::PaymentOrdersController < EducationSchool::EducationsController

  # GET /payment_orders or /payment_orders.json
  def index
    @payment_users = PaymentUser.where(payment_userable: @education_schools)
    @payment_orders = PaymentOrder.includes(payment_customer: :payment_customerable).where(payment_user: @payment_users)
    @pagination, @payment_orders = pagy(@payment_orders)
    
    @json_data = {
      payment_orders: @payment_orders.as_json(include: {payment_customer: {include: :payment_customerable}, payment_user: {include: :payment_userable}})
    }.to_json
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
      params.expect(payment_order: [ :payment_user_id, :payment_customer_id, :payment_method_id, :payment_discount_id, :status, :amount, :paid, :due, :expire ])
    end
end

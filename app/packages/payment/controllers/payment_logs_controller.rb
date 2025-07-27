class PaymentLogsController < ApplicationController
  before_action :set_payment_log, only: %i[ show edit update destroy ]

  # GET /payment_logs or /payment_logs.json
  def index
    @payment_logs = PaymentLog.all
  end

  # GET /payment_logs/1 or /payment_logs/1.json
  def show
  end

  # GET /payment_logs/new
  def new
    @payment_log = PaymentLog.new
  end

  # GET /payment_logs/1/edit
  def edit
  end

  # POST /payment_logs or /payment_logs.json
  def create
    @payment_log = PaymentLog.new(payment_log_params)

    respond_to do |format|
      if @payment_log.save
        format.html { redirect_to @payment_log, notice: "Payment log was successfully created." }
        format.json { render :show, status: :created, location: @payment_log }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_logs/1 or /payment_logs/1.json
  def update
    respond_to do |format|
      if @payment_log.update(payment_log_params)
        format.html { redirect_to @payment_log, notice: "Payment log was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_log }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_logs/1 or /payment_logs/1.json
  def destroy
    @payment_log.destroy!

    respond_to do |format|
      format.html { redirect_to payment_logs_path, status: :see_other, notice: "Payment log was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_log
      @payment_log = PaymentLog.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_log_params
      params.expect(payment_log: [ :payment_owner_id, :payment_customer_id, :payment_order_id, :payment_method_id, :payment_discount_id, :payment_invoice_id, :action, :amount, :note ])
    end
end

class PaymentInvoicesController < ApplicationController
  before_action :set_payment_invoice, only: %i[ show edit update destroy ]

  # GET /payment_invoices or /payment_invoices.json
  def index
    @payment_invoices = PaymentInvoice.all
  end

  # GET /payment_invoices/1 or /payment_invoices/1.json
  def show
  end

  # GET /payment_invoices/new
  def new
    @payment_invoice = PaymentInvoice.new
  end

  # GET /payment_invoices/1/edit
  def edit
  end

  # POST /payment_invoices or /payment_invoices.json
  def create
    @payment_invoice = PaymentInvoice.new(payment_invoice_params)

    respond_to do |format|
      if @payment_invoice.save
        format.html { redirect_to @payment_invoice, notice: "Payment invoice was successfully created." }
        format.json { render :show, status: :created, location: @payment_invoice }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_invoices/1 or /payment_invoices/1.json
  def update
    respond_to do |format|
      if @payment_invoice.update(payment_invoice_params)
        format.html { redirect_to @payment_invoice, notice: "Payment invoice was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_invoice }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_invoices/1 or /payment_invoices/1.json
  def destroy
    @payment_invoice.destroy!

    respond_to do |format|
      format.html { redirect_to payment_invoices_path, status: :see_other, notice: "Payment invoice was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_invoice
      @payment_invoice = PaymentInvoice.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_invoice_params
      params.expect(payment_invoice: [ :payment_order_id, :transaction_id, :status, :amount, :tax_code ])
    end
end

class PaymentItemsController < ApplicationController
  before_action :set_payment_item, only: %i[ show edit update destroy ]

  # GET /payment_items or /payment_items.json
  def index
    @payment_items = PaymentItem.all
  end

  # GET /payment_items/1 or /payment_items/1.json
  def show
  end

  # GET /payment_items/new
  def new
    @payment_item = PaymentItem.new
  end

  # GET /payment_items/1/edit
  def edit
  end

  # POST /payment_items or /payment_items.json
  def create
    @payment_item = PaymentItem.new(payment_item_params)

    respond_to do |format|
      if @payment_item.save
        format.html { redirect_to @payment_item, notice: "Payment item was successfully created." }
        format.json { render :show, status: :created, location: @payment_item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_items/1 or /payment_items/1.json
  def update
    respond_to do |format|
      if @payment_item.update(payment_item_params)
        format.html { redirect_to @payment_item, notice: "Payment item was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_items/1 or /payment_items/1.json
  def destroy
    @payment_item.destroy!

    respond_to do |format|
      format.html { redirect_to payment_items_path, status: :see_other, notice: "Payment item was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_item
      @payment_item = PaymentItem.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_item_params
      params.expect(payment_item: [ :payment_itemable_id, :payment_itemable_type, :price ])
    end
end

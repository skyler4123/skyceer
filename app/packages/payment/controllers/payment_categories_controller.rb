class PaymentCategoriesController < ApplicationController
  before_action :set_payment_category, only: %i[ show edit update destroy ]

  # GET /payment_categories or /payment_categories.json
  def index
    @payment_categories = PaymentCategory.all
  end

  # GET /payment_categories/1 or /payment_categories/1.json
  def show
  end

  # GET /payment_categories/new
  def new
    @payment_category = PaymentCategory.new
  end

  # GET /payment_categories/1/edit
  def edit
  end

  # POST /payment_categories or /payment_categories.json
  def create
    @payment_category = PaymentCategory.new(payment_category_params)

    respond_to do |format|
      if @payment_category.save
        format.html { redirect_to @payment_category, notice: "Payment category was successfully created." }
        format.json { render :show, status: :created, location: @payment_category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_categories/1 or /payment_categories/1.json
  def update
    respond_to do |format|
      if @payment_category.update(payment_category_params)
        format.html { redirect_to @payment_category, notice: "Payment category was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_categories/1 or /payment_categories/1.json
  def destroy
    @payment_category.destroy!

    respond_to do |format|
      format.html { redirect_to payment_categories_path, status: :see_other, notice: "Payment category was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_category
      @payment_category = PaymentCategory.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_category_params
      params.expect(payment_category: [ :name, :payment_owner_id, :parent_category_id, :discarded_at ])
    end
end

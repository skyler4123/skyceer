class AgricultureMerchantsController < AgricultureController
  before_action :set_agriculture_merchant, only: %i[ show edit update destroy ]

  # GET /agriculture_merchants or /agriculture_merchants.json
  def index
    @agriculture_merchants = AgricultureMerchant.all
  end

  # GET /agriculture_merchants/1 or /agriculture_merchants/1.json
  def show
  end

  # GET /agriculture_merchants/new
  def new
    @agriculture_merchant = AgricultureMerchant.new
  end

  # GET /agriculture_merchants/1/edit
  def edit
  end

  # POST /agriculture_merchants or /agriculture_merchants.json
  def create
    @agriculture_merchant = AgricultureMerchant.new(agriculture_merchant_params)

    respond_to do |format|
      if @agriculture_merchant.save
        format.html { redirect_to agriculture_merchant_url(@agriculture_merchant), notice: "Agriculture merchant was successfully created." }
        format.json { render :show, status: :created, location: @agriculture_merchant }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @agriculture_merchant.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /agriculture_merchants/1 or /agriculture_merchants/1.json
  def update
    respond_to do |format|
      if @agriculture_merchant.update(agriculture_merchant_params)
        format.html { redirect_to agriculture_merchant_url(@agriculture_merchant), notice: "Agriculture merchant was successfully updated." }
        format.json { render :show, status: :ok, location: @agriculture_merchant }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @agriculture_merchant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /agriculture_merchants/1 or /agriculture_merchants/1.json
  def destroy
    @agriculture_merchant.destroy!

    respond_to do |format|
      format.html { redirect_to agriculture_merchants_url, notice: "Agriculture merchant was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_agriculture_merchant
      @agriculture_merchant = AgricultureMerchant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def agriculture_merchant_params
      params.require(:agriculture_merchant).permit(:agriculture_user_id)
    end
end

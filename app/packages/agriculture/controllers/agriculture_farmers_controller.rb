class AgricultureFarmersController < AgricultureController
  before_action :set_agriculture_farmer, only: %i[ show edit update destroy ]

  # GET /agriculture_farmers or /agriculture_farmers.json
  def index
    @agriculture_farmers = AgricultureFarmer.all
  end

  # GET /agriculture_farmers/1 or /agriculture_farmers/1.json
  def show
  end

  # GET /agriculture_farmers/new
  def new
    @agriculture_farmer = AgricultureFarmer.new
  end

  # GET /agriculture_farmers/1/edit
  def edit
  end

  # POST /agriculture_farmers or /agriculture_farmers.json
  def create
    @agriculture_farmer = AgricultureFarmer.new(agriculture_farmer_params)

    respond_to do |format|
      if @agriculture_farmer.save
        format.html { redirect_to agriculture_farmer_url(@agriculture_farmer), notice: "Agriculture farmer was successfully created." }
        format.json { render :show, status: :created, location: @agriculture_farmer }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @agriculture_farmer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /agriculture_farmers/1 or /agriculture_farmers/1.json
  def update
    respond_to do |format|
      if @agriculture_farmer.update(agriculture_farmer_params)
        format.html { redirect_to agriculture_farmer_url(@agriculture_farmer), notice: "Agriculture farmer was successfully updated." }
        format.json { render :show, status: :ok, location: @agriculture_farmer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @agriculture_farmer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /agriculture_farmers/1 or /agriculture_farmers/1.json
  def destroy
    @agriculture_farmer.destroy!

    respond_to do |format|
      format.html { redirect_to agriculture_farmers_url, notice: "Agriculture farmer was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_agriculture_farmer
      @agriculture_farmer = AgricultureFarmer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def agriculture_farmer_params
      params.require(:agriculture_farmer).permit(:agriculture_user_id)
    end
end

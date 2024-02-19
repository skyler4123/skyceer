class AgricultureFarmsController < AgricultureController
  before_action :set_agriculture_farm, only: %i[ show edit update destroy ]

  # GET /agriculture_farms or /agriculture_farms.json
  def index
    @agriculture_farms = AgricultureFarm.all
  end

  # GET /agriculture_farms/1 or /agriculture_farms/1.json
  def show
  end

  # GET /agriculture_farms/new
  def new
    @agriculture_farm = AgricultureFarm.new
  end

  # GET /agriculture_farms/1/edit
  def edit
  end

  # POST /agriculture_farms or /agriculture_farms.json
  def create
    @agriculture_farm = AgricultureFarm.new(agriculture_farm_params)

    respond_to do |format|
      if @agriculture_farm.save
        format.html { redirect_to agriculture_farm_url(@agriculture_farm), notice: "Agriculture farm was successfully created." }
        format.json { render :show, status: :created, location: @agriculture_farm }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @agriculture_farm.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /agriculture_farms/1 or /agriculture_farms/1.json
  def update
    respond_to do |format|
      if @agriculture_farm.update(agriculture_farm_params)
        format.html { redirect_to agriculture_farm_url(@agriculture_farm), notice: "Agriculture farm was successfully updated." }
        format.json { render :show, status: :ok, location: @agriculture_farm }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @agriculture_farm.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /agriculture_farms/1 or /agriculture_farms/1.json
  def destroy
    @agriculture_farm.destroy!

    respond_to do |format|
      format.html { redirect_to agriculture_farms_url, notice: "Agriculture farm was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_agriculture_farm
      @agriculture_farm = AgricultureFarm.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def agriculture_farm_params
      params.require(:agriculture_farm).permit(:agriculture_farmer_id)
    end
end

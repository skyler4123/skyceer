class EstateHousesController < EstateController
  skip_before_action :authenticate, only: [:index]
  before_action :set_estate_house, only: %i[ show edit update destroy ]

  # GET /estate_houses or /estate_houses.json
  def index
    @estate_houses = EstateHouse.all.includes(:address)
    @estate_houses = @estate_houses.where('price_cents <= ?', params[:price_cents]) if params[:price_cents]
  end

  # GET /estate_houses/1 or /estate_houses/1.json
  def show
  end

  # GET /estate_houses/new
  def new
    @estate_house = EstateHouse.new
  end

  # GET /estate_houses/1/edit
  def edit
  end

  # POST /estate_houses or /estate_houses.json
  def create
    @estate_house = EstateHouse.new(estate_house_params)
    if params[:estate_house][:address]
      @address = Address.create(address_params[:address])
      @estate_house.address = @address
    end
    @estate_house.estate_user_id = Current.estate_user_id
    debugger
    respond_to do |format|
      if @estate_house.save
        format.html { redirect_to @estate_house, notice: "Estate House was successfully created." }
        format.json { render :show, status: :created, location: @estate_house }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @estate_house.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /estate_houses/1 or /estate_houses/1.json
  def update
    respond_to do |format|
      if @estate_house.update(estate_house_params)
        format.html { redirect_to @estate_house, notice: "Estate House was successfully updated." }
        format.json { render :show, status: :ok, location: @estate_house }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @estate_house.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /estate_houses/1 or /estate_houses/1.json
  def destroy
    @estate_house.destroy!

    respond_to do |format|
      format.html { redirect_to estate_houses_path, status: :see_other, notice: "Estate House was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_estate_house
      @estate_house = EstateHouse.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def estate_house_params
      # params.require(:estate_house).permit(:name, :price_cents, :longitude, :latitude, images: [], address: [:unit_number, :street_number, :address_line_1, :address_line_2, :city, :country_code, :postal_code])
      params.require(:estate_house).permit(:name, :price_cents, :longitude, :latitude, images: [])
    end

    def address_params
      params.require(:estate_house).permit(address: [:unit_number, :street_number, :address_line_1, :address_line_2, :city, :country_code, :postal_code])
    end
end

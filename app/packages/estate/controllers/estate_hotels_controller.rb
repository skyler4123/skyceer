class EstateHotelsController < EstateController
  before_action :set_estate_hotel, only: %i[ show edit update destroy ]

  # GET /estate_hotels or /estate_hotels.json
  def index
    @estate_hotels = EstateHotel.all
  end

  # GET /estate_hotels/1 or /estate_hotels/1.json
  def show
  end

  # GET /estate_hotels/new
  def new
    @estate_hotel = EstateHotel.new
  end

  # GET /estate_hotels/1/edit
  def edit
  end

  # POST /estate_hotels or /estate_hotels.json
  def create
    @estate_hotel = EstateHotel.new(estate_hotel_params)
    @estate_hotel.user_id = Current.user_id

    respond_to do |format|
      if @estate_hotel.save
        format.html { redirect_to estate_hotel_url(@estate_hotel), notice: "Estate hotel was successfully created." }
        format.json { render :show, status: :created, location: @estate_hotel }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @estate_hotel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /estate_hotels/1 or /estate_hotels/1.json
  def update
    respond_to do |format|
      if @estate_hotel.update(estate_hotel_params)
        format.html { redirect_to estate_hotel_url(@estate_hotel), notice: "Estate hotel was successfully updated." }
        format.json { render :show, status: :ok, location: @estate_hotel }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @estate_hotel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /estate_hotels/1 or /estate_hotels/1.json
  def destroy
    @estate_hotel.destroy!

    respond_to do |format|
      format.html { redirect_to estate_hotels_url, notice: "Estate hotel was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_estate_hotel
      @estate_hotel = EstateHotel.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def estate_hotel_params
      params.require(:estate_hotel).permit(:name, :price_cents, images: [])
    end
end

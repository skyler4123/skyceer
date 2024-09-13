class RsHotelsController < RsController
  before_action :set_rs_hotel, only: %i[ show edit update destroy ]

  # GET /rs_hotels or /rs_hotels.json
  def index
    @rs_hotels = RsHotel.all
  end

  # GET /rs_hotels/1 or /rs_hotels/1.json
  def show
  end

  # GET /rs_hotels/new
  def new
    @rs_hotel = RsHotel.new
  end

  # GET /rs_hotels/1/edit
  def edit
  end

  # POST /rs_hotels or /rs_hotels.json
  def create
    @rs_hotel = RsHotel.new(rs_hotel_params)
    @rs_hotel.rs_user_id = Current.rs_user_id

    respond_to do |format|
      if @rs_hotel.save
        format.html { redirect_to rs_hotel_url(@rs_hotel), notice: "Rs hotel was successfully created." }
        format.json { render :show, status: :created, location: @rs_hotel }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @rs_hotel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rs_hotels/1 or /rs_hotels/1.json
  def update
    respond_to do |format|
      if @rs_hotel.update(rs_hotel_params)
        format.html { redirect_to rs_hotel_url(@rs_hotel), notice: "Rs hotel was successfully updated." }
        format.json { render :show, status: :ok, location: @rs_hotel }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @rs_hotel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rs_hotels/1 or /rs_hotels/1.json
  def destroy
    @rs_hotel.destroy!

    respond_to do |format|
      format.html { redirect_to rs_hotels_url, notice: "Rs hotel was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rs_hotel
      @rs_hotel = RsHotel.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rs_hotel_params
      params.require(:rs_hotel).permit(:name, :address, :price_cents, :longitude, :latitude)
    end
end

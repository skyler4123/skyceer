class VehicleCarsController < VehicleController
  skip_before_action :authenticate, only: [:index]
  before_action :set_vehicle_car, only: %i[ show edit update destroy ]

  # GET /vehicle_cars or /vehicle_cars.json
  def index
    respond_to do |format|
      format.html
      format.json do
        @vehicle_cars = VehicleCar.all
        @vehicle_cars = @vehicle_cars.where('price <= ?', params[:price]) if params[:price].present?
        @vehicle_cars = @vehicle_cars.where(brand: params[:brand].downcase) if params[:brand].present?
        @vehicle_cars = @vehicle_cars.where(model: params[:model].downcase) if params[:model].present?
        @vehicle_cars = @vehicle_cars.where(post_purpose: params[:post_purpose].downcase) if params[:post_purpose].present? && params[:post_purpose] != 'sell_or_rent'
      end
    end
  end

  # GET /vehicle_cars/1 or /vehicle_cars/1.json
  def show
    session = Session.find_by(vehicle_user_id: @vehicle_car.vehicle_user_id)
    @user_name = session.name
    @chat_user_id = session.chat_user_id
  end

  # GET /vehicle_cars/new
  def new
    @vehicle_car = VehicleCar.new
  end

  # GET /vehicle_cars/1/edit
  def edit
  end

  # POST /vehicle_cars or /vehicle_cars.json
  def create
    @vehicle_car = VehicleCar.new(vehicle_car_params)
    @vehicle_car.vehicle_user = Current.vehicle_user
    @vehicle_car.coordinates = normalize_coordinates(params[:vehicle_car][:coordinates])
    respond_to do |format|
      if @vehicle_car.save
        format.html { redirect_to vehicle_car_url(@vehicle_car), notice: "Vehicle car was successfully created." }
        format.json { render :show, status: :created, location: @vehicle_car }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @vehicle_car.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vehicle_cars/1 or /vehicle_cars/1.json
  def update
    respond_to do |format|
      if @vehicle_car.update(vehicle_car_params)
        format.html { redirect_to vehicle_car_url(@vehicle_car), notice: "Vehicle car was successfully updated." }
        format.json { render :show, status: :ok, location: @vehicle_car }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @vehicle_car.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vehicle_cars/1 or /vehicle_cars/1.json
  def destroy
    @vehicle_car.destroy!

    respond_to do |format|
      format.html { redirect_to vehicle_cars_url, notice: "Vehicle car was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vehicle_car
      @vehicle_car = VehicleCar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vehicle_car_params
      params.require(:vehicle_car).permit(:name, :model, :brand, :vehicle_store_id, :vehicle_user_id, :price, :version, :post_purpose, :released_at, :verified, :expired, coordinates: [])
    end

    def normalize_coordinates(coordinates)
      coordinates.split(',').map(&:to_f)
    end
end

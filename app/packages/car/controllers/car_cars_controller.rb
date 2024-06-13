class CarCarsController < CarController
  skip_before_action :authenticate, only: [:index]
  before_action :set_car_car, only: %i[ show edit update destroy ]

  # GET /car_cars or /car_cars.json
  def index
    respond_to do |format|
      format.html
      format.json do
        @car_cars = CarCar.all
        @car_cars = @car_cars.where('price <= ?', params[:price]) if params[:price].present?
        @car_cars = @car_cars.where(brand: params[:brand].downcase) if params[:brand].present?
        @car_cars = @car_cars.where(model: params[:model].downcase) if params[:model].present?
      end
    end
  end

  # GET /car_cars/1 or /car_cars/1.json
  def show
  end

  # GET /car_cars/new
  def new
    @car_car = CarCar.new
  end

  # GET /car_cars/1/edit
  def edit
  end

  # POST /car_cars or /car_cars.json
  def create
    @car_car = CarCar.new(car_car_params)
    @car_car.car_user = Current.car_user
    @car_car.coordinates = normalize_coordinates(params[:car_car][:coordinates])
    respond_to do |format|
      if @car_car.save
        format.html { redirect_to car_car_url(@car_car), notice: "Car car was successfully created." }
        format.json { render :show, status: :created, location: @car_car }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @car_car.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /car_cars/1 or /car_cars/1.json
  def update
    respond_to do |format|
      if @car_car.update(car_car_params)
        format.html { redirect_to car_car_url(@car_car), notice: "Car car was successfully updated." }
        format.json { render :show, status: :ok, location: @car_car }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @car_car.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /car_cars/1 or /car_cars/1.json
  def destroy
    @car_car.destroy!

    respond_to do |format|
      format.html { redirect_to car_cars_url, notice: "Car car was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car_car
      @car_car = CarCar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def car_car_params
      params.require(:car_car).permit(:name, :model, :brand, :car_store_id, :car_user_id, :price, :version, :released_at, :verified, :expired, coordinates: [])
    end

    def normalize_coordinates(coordinates)
      coordinates.split(',').map(&:to_f)
    end
end

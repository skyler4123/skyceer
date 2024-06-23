class VehicleStoresController < VehicleController
  before_action :set_vehicle_store, only: %i[ show edit update destroy ]

  # GET /vehicle_stores or /vehicle_stores.json
  def index
    @vehicle_stores = Current.vehicle_user.vehicle_stores
  end

  # GET /vehicle_stores/1 or /vehicle_stores/1.json
  def show
  end

  # GET /vehicle_stores/new
  def new
    @vehicle_store = VehicleStore.new
  end

  # GET /vehicle_stores/1/edit
  def edit
  end

  # POST /vehicle_stores or /vehicle_stores.json
  def create
    @vehicle_store = VehicleStore.new(vehicle_store_params)

    respond_to do |format|
      if @vehicle_store.save
        format.html { redirect_to vehicle_store_url(@vehicle_store), notice: "Vehicle store was successfully created." }
        format.json { render :show, status: :created, location: @vehicle_store }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @vehicle_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vehicle_stores/1 or /vehicle_stores/1.json
  def update
    respond_to do |format|
      if @vehicle_store.update(vehicle_store_params)
        format.html { redirect_to vehicle_store_url(@vehicle_store), notice: "Vehicle store was successfully updated." }
        format.json { render :show, status: :ok, location: @vehicle_store }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @vehicle_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vehicle_stores/1 or /vehicle_stores/1.json
  def destroy
    @vehicle_store.destroy!

    respond_to do |format|
      format.html { redirect_to vehicle_stores_url, notice: "Vehicle store was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vehicle_store
      @vehicle_store = VehicleStore.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vehicle_store_params
      params.require(:vehicle_store).permit(:name, :vehicle_user_id, :coordinates)
    end
end

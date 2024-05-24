class CarStoresController < ApplicationController
  before_action :set_car_store, only: %i[ show edit update destroy ]

  # GET /car_stores or /car_stores.json
  def index
    @car_stores = Current.car_user.car_stores
  end

  # GET /car_stores/1 or /car_stores/1.json
  def show
  end

  # GET /car_stores/new
  def new
    @car_store = CarStore.new
  end

  # GET /car_stores/1/edit
  def edit
  end

  # POST /car_stores or /car_stores.json
  def create
    @car_store = CarStore.new(car_store_params)

    respond_to do |format|
      if @car_store.save
        format.html { redirect_to car_store_url(@car_store), notice: "Car store was successfully created." }
        format.json { render :show, status: :created, location: @car_store }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @car_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /car_stores/1 or /car_stores/1.json
  def update
    respond_to do |format|
      if @car_store.update(car_store_params)
        format.html { redirect_to car_store_url(@car_store), notice: "Car store was successfully updated." }
        format.json { render :show, status: :ok, location: @car_store }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @car_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /car_stores/1 or /car_stores/1.json
  def destroy
    @car_store.destroy!

    respond_to do |format|
      format.html { redirect_to car_stores_url, notice: "Car store was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car_store
      @car_store = CarStore.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def car_store_params
      params.require(:car_store).permit(:name, :car_user_id, :coordinates)
    end
end

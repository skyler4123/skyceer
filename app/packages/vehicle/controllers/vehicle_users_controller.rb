class VehicleUsersController < VehicleController
  before_action :set_vehicle_user, only: %i[ show edit update destroy ]

  # GET /vehicle_users or /vehicle_users.json
  def index
    @vehicle_users = VehicleUser.all
  end

  # GET /vehicle_users/1 or /vehicle_users/1.json
  def show
  end

  # GET /vehicle_users/new
  def new
    @vehicle_user = VehicleUser.new
  end

  # GET /vehicle_users/1/edit
  def edit
  end

  # POST /vehicle_users or /vehicle_users.json
  def create
    @vehicle_user = VehicleUser.new(vehicle_user_params)

    respond_to do |format|
      if @vehicle_user.save
        format.html { redirect_to vehicle_user_url(@vehicle_user), notice: "Vehicle user was successfully created." }
        format.json { render :show, status: :created, location: @vehicle_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @vehicle_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /vehicle_users/1 or /vehicle_users/1.json
  def update
    respond_to do |format|
      if @vehicle_user.update(vehicle_user_params)
        format.html { redirect_to vehicle_user_url(@vehicle_user), notice: "Vehicle user was successfully updated." }
        format.json { render :show, status: :ok, location: @vehicle_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @vehicle_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /vehicle_users/1 or /vehicle_users/1.json
  def destroy
    @vehicle_user.destroy!

    respond_to do |format|
      format.html { redirect_to vehicle_users_url, notice: "Vehicle user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vehicle_user
      @vehicle_user = VehicleUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vehicle_user_params
      params.expect(vehicle_user: [:user_id])
    end
end

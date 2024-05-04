class CarUsersController < ApplicationController
  before_action :set_car_user, only: %i[ show edit update destroy ]

  # GET /car_users or /car_users.json
  def index
    @car_users = CarUser.all
  end

  # GET /car_users/1 or /car_users/1.json
  def show
  end

  # GET /car_users/new
  def new
    @car_user = CarUser.new
  end

  # GET /car_users/1/edit
  def edit
  end

  # POST /car_users or /car_users.json
  def create
    @car_user = CarUser.new(car_user_params)

    respond_to do |format|
      if @car_user.save
        format.html { redirect_to car_user_url(@car_user), notice: "Car user was successfully created." }
        format.json { render :show, status: :created, location: @car_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @car_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /car_users/1 or /car_users/1.json
  def update
    respond_to do |format|
      if @car_user.update(car_user_params)
        format.html { redirect_to car_user_url(@car_user), notice: "Car user was successfully updated." }
        format.json { render :show, status: :ok, location: @car_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @car_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /car_users/1 or /car_users/1.json
  def destroy
    @car_user.destroy!

    respond_to do |format|
      format.html { redirect_to car_users_url, notice: "Car user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car_user
      @car_user = CarUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def car_user_params
      params.require(:car_user).permit(:user_id)
    end
end

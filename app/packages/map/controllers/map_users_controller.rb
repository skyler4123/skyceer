class MapUsersController < ApplicationController
  before_action :set_map_user, only: %i[ show edit update destroy ]

  # GET /map_users or /map_users.json
  def index
    @map_users = MapUser.all
  end

  # GET /map_users/1 or /map_users/1.json
  def show
  end

  # GET /map_users/new
  def new
    @map_user = MapUser.new
  end

  # GET /map_users/1/edit
  def edit
  end

  # POST /map_users or /map_users.json
  def create
    @map_user = MapUser.new(map_user_params)

    respond_to do |format|
      if @map_user.save
        format.html { redirect_to map_user_url(@map_user), notice: "Map user was successfully created." }
        format.json { render :show, status: :created, location: @map_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @map_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /map_users/1 or /map_users/1.json
  def update
    respond_to do |format|
      if @map_user.update(map_user_params)
        format.html { redirect_to map_user_url(@map_user), notice: "Map user was successfully updated." }
        format.json { render :show, status: :ok, location: @map_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @map_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /map_users/1 or /map_users/1.json
  def destroy
    @map_user.destroy!

    respond_to do |format|
      format.html { redirect_to map_users_url, notice: "Map user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_map_user
      @map_user = MapUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def map_user_params
      params.require(:map_user).permit(:user_id, :name)
    end
end

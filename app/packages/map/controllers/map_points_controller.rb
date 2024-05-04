class MapPointsController < ApplicationController
  # protect_from_forgery with: :null_session
  before_action :set_map_point, only: %i[ show edit update destroy ]

  # GET /map_points or /map_points.json
  def index
    @map_points = MapPoint.all
  end

  # GET /map_points/1 or /map_points/1.json
  def show
  end

  # GET /map_points/new
  def new
    @map_point = MapPoint.new
  end

  # GET /map_points/1/edit
  def edit
  end

  # POST /map_points or /map_points.json
  def create
    # debugger
    @map_point = MapPoint.new(map_point_params)
    # render json: @map_point, status: :ok
    respond_to do |format|
      if @map_point.save
        format.html {
          redirect_to map_point_url(@map_point), notice: "Map point was successfully created."
        }
        format.json {
          render :show, status: :created, location: @map_point
        }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @map_point.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /map_points/1 or /map_points/1.json
  def update
    respond_to do |format|
      if @map_point.update(map_point_params)
        format.html { redirect_to map_point_url(@map_point), notice: "Map point was successfully updated." }
        format.json { render :show, status: :ok, location: @map_point }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @map_point.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /map_points/1 or /map_points/1.json
  def destroy
    @map_point.destroy!

    respond_to do |format|
      format.html { redirect_to map_points_url, notice: "Map point was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_map_point
      @map_point = MapPoint.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def map_point_params
      params.require(:map_point).permit(:mapable_id, :mapable_type, :map_user_id, :verified, :expired, coordinates: [])
    end
end

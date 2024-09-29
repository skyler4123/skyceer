class EstateHomesController < EstateController
  before_action :set_estate_home, only: %i[ show edit update destroy ]

  # GET /estate_homes or /estate_homes.json
  def index
    @estate_homes = EstateHome.all
    @estate_homes = @estate_homes.where('price_cents <= ?', params[:price_cents]) if params[:price_cents]
  end

  # GET /estate_homes/1 or /estate_homes/1.json
  def show
  end

  # GET /estate_homes/new
  def new
    @estate_home = EstateHome.new
  end

  # GET /estate_homes/1/edit
  def edit
  end

  # POST /estate_homes or /estate_homes.json
  def create
    @estate_home = EstateHome.new(estate_home_params)
    @estate_home.estate_user_id = Current.estate_user_id

    respond_to do |format|
      if @estate_home.save
        format.html { redirect_to @estate_home, notice: "Estate home was successfully created." }
        format.json { render :show, status: :created, location: @estate_home }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @estate_home.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /estate_homes/1 or /estate_homes/1.json
  def update
    respond_to do |format|
      if @estate_home.update(estate_home_params)
        format.html { redirect_to @estate_home, notice: "Estate home was successfully updated." }
        format.json { render :show, status: :ok, location: @estate_home }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @estate_home.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /estate_homes/1 or /estate_homes/1.json
  def destroy
    @estate_home.destroy!

    respond_to do |format|
      format.html { redirect_to estate_homes_path, status: :see_other, notice: "Estate home was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_estate_home
      @estate_home = EstateHome.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def estate_home_params
      params.require(:estate_home).permit(:name, :address, :price_cents, :longitude, :latitude)
    end
end

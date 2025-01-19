class EstateCondosController < EstateController
  # before_action :set_user
  before_action :set_estate_condo, only: %i[ show edit update destroy ]

  # GET /estate_condos or /estate_condos.json
  def index
    @estate_condos = EstateCondo.all
    @estate_condos = @estate_condos.where('price_cents <= ?', params[:price_cents]) if params[:price_cents]
  end

  # GET /estate_condos/1 or /estate_condos/1.json
  def show
  end

  # GET /estate_condos/new
  def new
    @estate_condo = EstateCondo.new
  end

  # GET /estate_condos/1/edit
  def edit
  end

  # POST /estate_condos or /estate_condos.json
  def create
    @estate_condo = EstateCondo.new(estate_condo_params)
    @estate_condo.user_id = Current.user_id

    respond_to do |format|
      if @estate_condo.save
        format.html { redirect_to estate_condo_url(@estate_condo), notice: "Estate condo was successfully created." }
        format.json { render :show, status: :created, location: @estate_condo }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @estate_condo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /estate_condos/1 or /estate_condos/1.json
  def update
    respond_to do |format|
      if @estate_condo.update(estate_condo_params)
        format.html { redirect_to estate_condo_url(@estate_condo), notice: "Estate condo was successfully updated." }
        format.json { render :show, status: :ok, location: @estate_condo }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @estate_condo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /estate_condos/1 or /estate_condos/1.json
  def destroy
    @estate_condo.destroy!

    respond_to do |format|
      format.html { redirect_to estate_condos_url, notice: "Estate condo was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_estate_condo
      @estate_condo = EstateCondo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def estate_condo_params
      # params.expect(estate_condo: [:user_id, :name, :address, :price_cents, :longitude, :latitude)
      # params.permit(:name, :address, :price_cents, :longitude, :latitude)
      params.expect(estate_condo: [:name, :price_cents, images: []])
    end
end

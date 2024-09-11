class RsCondosController < RsController
  # before_action :set_rs_user
  before_action :set_rs_condo, only: %i[ show edit update destroy ]

  # GET /rs_condos or /rs_condos.json
  def index
    @rs_condos = RsCondo.all
  end

  # GET /rs_condos/1 or /rs_condos/1.json
  def show
  end

  # GET /rs_condos/new
  def new
    @rs_condo = RsCondo.new
  end

  # GET /rs_condos/1/edit
  def edit
  end

  # POST /rs_condos or /rs_condos.json
  def create
    @rs_condo = RsCondo.new(rs_condo_params)
    @rs_condo.rs_user_id = Current.rs_user_id

    respond_to do |format|
      if @rs_condo.save
        format.html { redirect_to rs_condo_url(@rs_condo), notice: "Rs condo was successfully created." }
        format.json { render :show, status: :created, location: @rs_condo }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @rs_condo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rs_condos/1 or /rs_condos/1.json
  def update
    respond_to do |format|
      if @rs_condo.update(rs_condo_params)
        format.html { redirect_to rs_condo_url(@rs_condo), notice: "Rs condo was successfully updated." }
        format.json { render :show, status: :ok, location: @rs_condo }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @rs_condo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rs_condos/1 or /rs_condos/1.json
  def destroy
    @rs_condo.destroy!

    respond_to do |format|
      format.html { redirect_to rs_condos_url, notice: "Rs condo was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_rs_user
    #   @rs_user = Current.rs_user
    # end

    def set_rs_condo
      @rs_condo = RsCondo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rs_condo_params
      params.require(:rs_condo).permit(:rs_user_id, :name, :address, :price_cents, :longitude, :latitude)
    end
end

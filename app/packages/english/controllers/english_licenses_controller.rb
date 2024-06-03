class EnglishLicensesController < EnglishController
  before_action :set_english_license, only: %i[ show edit update destroy ]

  # GET /english_licenses or /english_licenses.json
  def index
    @english_licenses = EnglishLicense.all
  end

  # GET /english_licenses/1 or /english_licenses/1.json
  def show
  end

  # GET /english_licenses/new
  def new
    @english_license = EnglishLicense.new
  end

  # GET /english_licenses/1/edit
  def edit
  end

  # POST /english_licenses or /english_licenses.json
  def create
    @english_license = EnglishLicense.new(english_license_params)

    respond_to do |format|
      if @english_license.save
        format.html { redirect_to english_license_url(@english_license), notice: "English license was successfully created." }
        format.json { render :show, status: :created, location: @english_license }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @english_license.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /english_licenses/1 or /english_licenses/1.json
  def update
    respond_to do |format|
      if @english_license.update(english_license_params)
        format.html { redirect_to english_license_url(@english_license), notice: "English license was successfully updated." }
        format.json { render :show, status: :ok, location: @english_license }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @english_license.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /english_licenses/1 or /english_licenses/1.json
  def destroy
    @english_license.destroy!

    respond_to do |format|
      format.html { redirect_to english_licenses_url, notice: "English license was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_english_license
      @english_license = EnglishLicense.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def english_license_params
      params.require(:english_license).permit(:name, :url)
    end
end

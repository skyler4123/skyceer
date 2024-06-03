class EnglishPhoneticsController < EnglishController
  before_action :set_english_phonetic, only: %i[ show edit update destroy ]

  # GET /english_phonetics or /english_phonetics.json
  def index
    @english_phonetics = EnglishPhonetic.all
  end

  # GET /english_phonetics/1 or /english_phonetics/1.json
  def show
  end

  # GET /english_phonetics/new
  def new
    @english_phonetic = EnglishPhonetic.new
  end

  # GET /english_phonetics/1/edit
  def edit
  end

  # POST /english_phonetics or /english_phonetics.json
  def create
    @english_phonetic = EnglishPhonetic.new(english_phonetic_params)

    respond_to do |format|
      if @english_phonetic.save
        format.html { redirect_to english_phonetic_url(@english_phonetic), notice: "English phonetic was successfully created." }
        format.json { render :show, status: :created, location: @english_phonetic }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @english_phonetic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /english_phonetics/1 or /english_phonetics/1.json
  def update
    respond_to do |format|
      if @english_phonetic.update(english_phonetic_params)
        format.html { redirect_to english_phonetic_url(@english_phonetic), notice: "English phonetic was successfully updated." }
        format.json { render :show, status: :ok, location: @english_phonetic }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @english_phonetic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /english_phonetics/1 or /english_phonetics/1.json
  def destroy
    @english_phonetic.destroy!

    respond_to do |format|
      format.html { redirect_to english_phonetics_url, notice: "English phonetic was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_english_phonetic
      @english_phonetic = EnglishPhonetic.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def english_phonetic_params
      params.require(:english_phonetic).permit(:text, :audio, :source_url)
    end
end

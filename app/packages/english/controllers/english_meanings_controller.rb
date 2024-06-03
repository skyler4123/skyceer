class EnglishMeaningsController < EnglishController
  before_action :set_english_meaning, only: %i[ show edit update destroy ]

  # GET /english_meanings or /english_meanings.json
  def index
    @english_meanings = EnglishMeaning.all
  end

  # GET /english_meanings/1 or /english_meanings/1.json
  def show
  end

  # GET /english_meanings/new
  def new
    @english_meaning = EnglishMeaning.new
  end

  # GET /english_meanings/1/edit
  def edit
  end

  # POST /english_meanings or /english_meanings.json
  def create
    @english_meaning = EnglishMeaning.new(english_meaning_params)

    respond_to do |format|
      if @english_meaning.save
        format.html { redirect_to english_meaning_url(@english_meaning), notice: "English meaning was successfully created." }
        format.json { render :show, status: :created, location: @english_meaning }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @english_meaning.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /english_meanings/1 or /english_meanings/1.json
  def update
    respond_to do |format|
      if @english_meaning.update(english_meaning_params)
        format.html { redirect_to english_meaning_url(@english_meaning), notice: "English meaning was successfully updated." }
        format.json { render :show, status: :ok, location: @english_meaning }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @english_meaning.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /english_meanings/1 or /english_meanings/1.json
  def destroy
    @english_meaning.destroy!

    respond_to do |format|
      format.html { redirect_to english_meanings_url, notice: "English meaning was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_english_meaning
      @english_meaning = EnglishMeaning.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def english_meaning_params
      params.require(:english_meaning).permit(:part_of_speech, :synonyms, :antonyms)
    end
end

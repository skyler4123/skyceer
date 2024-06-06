class EnglishWordsController < EnglishController
  before_action :set_english_word, only: %i[ show edit update destroy ]

  # GET /english_words or /english_words.json
  def index
    @english_words = EnglishWord.all
  end

  # GET /english_words/1 or /english_words/1.json
  def show
  end

  # GET /english_words/new
  def new
    @english_word = EnglishWord.new
  end

  # GET /english_words/1/edit
  def edit
  end

  # POST /english_words or /english_words.json
  def create
    @english_word = EnglishWord.new(english_word_params)

    respond_to do |format|
      if @english_word.save
        format.html { redirect_to english_word_url(@english_word), notice: "English word was successfully created." }
        format.json { render :show, status: :created, location: @english_word }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @english_word.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /english_words/1 or /english_words/1.json
  def update
    respond_to do |format|
      if @english_word.update(english_word_params)
        format.html { redirect_to english_word_url(@english_word), notice: "English word was successfully updated." }
        format.json { render :show, status: :ok, location: @english_word }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @english_word.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /english_words/1 or /english_words/1.json
  def destroy
    @english_word.destroy!

    respond_to do |format|
      format.html { redirect_to english_words_url, notice: "English word was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_english_word
      @english_word = EnglishWord.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def english_word_params
      params.require(:english_word).permit(:word, :phonetic)
    end
end

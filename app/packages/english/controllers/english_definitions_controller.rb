class EnglishDefinitionsController < EnglishController
  before_action :set_english_definition, only: %i[ show edit update destroy ]

  # GET /english_definitions or /english_definitions.json
  def index
    @english_definitions = EnglishDefinition.all
  end

  # GET /english_definitions/1 or /english_definitions/1.json
  def show
  end

  # GET /english_definitions/new
  def new
    @english_definition = EnglishDefinition.new
  end

  # GET /english_definitions/1/edit
  def edit
  end

  # POST /english_definitions or /english_definitions.json
  def create
    @english_definition = EnglishDefinition.new(english_definition_params)

    respond_to do |format|
      if @english_definition.save
        format.html { redirect_to english_definition_url(@english_definition), notice: "English definition was successfully created." }
        format.json { render :show, status: :created, location: @english_definition }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @english_definition.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /english_definitions/1 or /english_definitions/1.json
  def update
    respond_to do |format|
      if @english_definition.update(english_definition_params)
        format.html { redirect_to english_definition_url(@english_definition), notice: "English definition was successfully updated." }
        format.json { render :show, status: :ok, location: @english_definition }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @english_definition.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /english_definitions/1 or /english_definitions/1.json
  def destroy
    @english_definition.destroy!

    respond_to do |format|
      format.html { redirect_to english_definitions_url, notice: "English definition was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_english_definition
      @english_definition = EnglishDefinition.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def english_definition_params
      params.require(:english_definition).permit(:definition, :synonyms, :antonyms, :example)
    end
end

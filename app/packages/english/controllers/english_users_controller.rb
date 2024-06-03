class EnglishUsersController < EnglishController
  before_action :set_english_user, only: %i[ show edit update destroy ]

  # GET /english_users or /english_users.json
  def index
    @english_users = EnglishUser.all
    @pagy, @english_users = pagy_custom(@english_users, items: 3)
  end

  # GET /english_users/1 or /english_users/1.json
  def show
  end

  # GET /english_users/new
  def new
    @english_user = EnglishUser.new
  end

  # GET /english_users/1/edit
  def edit
  end

  # POST /english_users or /english_users.json
  def create
    @english_user = EnglishUser.new(english_user_params)

    respond_to do |format|
      if @english_user.save
        format.html { redirect_to english_user_url(@english_user), notice: "English user was successfully created." }
        format.json { render :show, status: :created, location: @english_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @english_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /english_users/1 or /english_users/1.json
  def update
    respond_to do |format|
      if @english_user.update(english_user_params)
        format.html { redirect_to english_user_url(@english_user), notice: "English user was successfully updated." }
        format.json { render :show, status: :ok, location: @english_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @english_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /english_users/1 or /english_users/1.json
  def destroy
    @english_user.destroy!

    respond_to do |format|
      format.html { redirect_to english_users_url, notice: "English user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_english_user
      @english_user = EnglishUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def english_user_params
      params.require(:english_user).permit(:user_id)
    end
end

class AgricultureUsersController < AgricultureController
  before_action :set_agriculture_user, only: %i[ show edit update destroy ]

  # GET /agriculture_users or /agriculture_users.json
  def index
    @agriculture_users = AgricultureUser.all
  end

  # GET /agriculture_users/1 or /agriculture_users/1.json
  def show
  end

  # GET /agriculture_users/new
  def new
    @agriculture_user = AgricultureUser.new
  end

  # GET /agriculture_users/1/edit
  def edit
  end

  # POST /agriculture_users or /agriculture_users.json
  def create
    @agriculture_user = AgricultureUser.new(agriculture_user_params)

    respond_to do |format|
      if @agriculture_user.save
        format.html { redirect_to agriculture_user_url(@agriculture_user), notice: "Agriculture user was successfully created." }
        format.json { render :show, status: :created, location: @agriculture_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @agriculture_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /agriculture_users/1 or /agriculture_users/1.json
  def update
    respond_to do |format|
      if @agriculture_user.update(agriculture_user_params)
        format.html { redirect_to agriculture_user_url(@agriculture_user), notice: "Agriculture user was successfully updated." }
        format.json { render :show, status: :ok, location: @agriculture_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @agriculture_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /agriculture_users/1 or /agriculture_users/1.json
  def destroy
    @agriculture_user.destroy!

    respond_to do |format|
      format.html { redirect_to agriculture_users_url, notice: "Agriculture user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_agriculture_user
      @agriculture_user = AgricultureUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def agriculture_user_params
      params.require(:agriculture_user).permit(:user_id)
    end
end

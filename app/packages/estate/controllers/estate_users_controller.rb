class EstateUsersController < EstateController
  before_action :set_estate_user, only: %i[ show edit update destroy ]

  # GET /estate_users or /estate_users.json
  def index
    @estate_users = EstateUser.all
  end

  # GET /estate_users/1 or /estate_users/1.json
  def show
  end

  # GET /estate_users/new
  def new
    @estate_user = EstateUser.new
  end

  # GET /estate_users/1/edit
  def edit
  end

  # POST /estate_users or /estate_users.json
  def create
    @estate_user = EstateUser.new(estate_user_params)

    respond_to do |format|
      if @estate_user.save
        format.html { redirect_to estate_user_url(@estate_user), notice: "Estate user was successfully created." }
        format.json { render :show, status: :created, location: @estate_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @estate_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /estate_users/1 or /estate_users/1.json
  def update
    respond_to do |format|
      if @estate_user.update(estate_user_params)
        format.html { redirect_to estate_user_url(@estate_user), notice: "Estate user was successfully updated." }
        format.json { render :show, status: :ok, location: @estate_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @estate_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /estate_users/1 or /estate_users/1.json
  def destroy
    @estate_user.destroy!

    respond_to do |format|
      format.html { redirect_to estate_users_url, notice: "Estate user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_estate_user
      @estate_user = EstateUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def estate_user_params
      params.expect(estate_user: [:user_id])
    end
end

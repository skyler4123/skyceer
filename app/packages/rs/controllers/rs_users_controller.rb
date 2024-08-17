class RsUsersController < ApplicationController
  before_action :set_rs_user, only: %i[ show edit update destroy ]

  # GET /rs_users or /rs_users.json
  def index
    @rs_users = RsUser.all
  end

  # GET /rs_users/1 or /rs_users/1.json
  def show
  end

  # GET /rs_users/new
  def new
    @rs_user = RsUser.new
  end

  # GET /rs_users/1/edit
  def edit
  end

  # POST /rs_users or /rs_users.json
  def create
    @rs_user = RsUser.new(rs_user_params)

    respond_to do |format|
      if @rs_user.save
        format.html { redirect_to rs_user_url(@rs_user), notice: "Rs user was successfully created." }
        format.json { render :show, status: :created, location: @rs_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @rs_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rs_users/1 or /rs_users/1.json
  def update
    respond_to do |format|
      if @rs_user.update(rs_user_params)
        format.html { redirect_to rs_user_url(@rs_user), notice: "Rs user was successfully updated." }
        format.json { render :show, status: :ok, location: @rs_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @rs_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rs_users/1 or /rs_users/1.json
  def destroy
    @rs_user.destroy!

    respond_to do |format|
      format.html { redirect_to rs_users_url, notice: "Rs user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rs_user
      @rs_user = RsUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rs_user_params
      params.require(:rs_user).permit(:user_id)
    end
end

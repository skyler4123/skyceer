class EducationUsersController < ApplicationController
  before_action :set_education_user, only: %i[ show edit update destroy ]

  # GET /education_users or /education_users.json
  def index
    @education_users = EducationUser.all
  end

  # GET /education_users/1 or /education_users/1.json
  def show
  end

  # GET /education_users/new
  def new
    @education_user = EducationUser.new
  end

  # GET /education_users/1/edit
  def edit
  end

  # POST /education_users or /education_users.json
  def create
    @education_user = EducationUser.new(education_user_params)

    respond_to do |format|
      if @education_user.save
        format.html { redirect_to education_user_url(@education_user), notice: "Education user was successfully created." }
        format.json { render :show, status: :created, location: @education_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_users/1 or /education_users/1.json
  def update
    respond_to do |format|
      if @education_user.update(education_user_params)
        format.html { redirect_to education_user_url(@education_user), notice: "Education user was successfully updated." }
        format.json { render :show, status: :ok, location: @education_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_users/1 or /education_users/1.json
  def destroy
    @education_user.destroy!

    respond_to do |format|
      format.html { redirect_to education_users_url, notice: "Education user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_user
      @education_user = EducationUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_user_params
      params.require(:education_user).permit(:user_id)
    end
end

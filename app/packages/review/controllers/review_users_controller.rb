class ReviewUsersController < ApplicationController
  before_action :set_review_user, only: %i[ show edit update destroy ]

  # GET /review_users or /review_users.json
  def index
    @review_users = ReviewUser.all
  end

  # GET /review_users/1 or /review_users/1.json
  def show
  end

  # GET /review_users/new
  def new
    @review_user = ReviewUser.new
  end

  # GET /review_users/1/edit
  def edit
  end

  # POST /review_users or /review_users.json
  def create
    @review_user = ReviewUser.new(review_user_params)

    respond_to do |format|
      if @review_user.save
        format.html { redirect_to review_user_url(@review_user), notice: "Review user was successfully created." }
        format.json { render :show, status: :created, location: @review_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @review_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /review_users/1 or /review_users/1.json
  def update
    respond_to do |format|
      if @review_user.update(review_user_params)
        format.html { redirect_to review_user_url(@review_user), notice: "Review user was successfully updated." }
        format.json { render :show, status: :ok, location: @review_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @review_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /review_users/1 or /review_users/1.json
  def destroy
    @review_user.destroy!

    respond_to do |format|
      format.html { redirect_to review_users_url, notice: "Review user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review_user
      @review_user = ReviewUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_user_params
      params.require(:review_user).permit(:user_id)
    end
end

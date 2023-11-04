class BlogUsersController < ApplicationController
  before_action :set_blog_user, only: %i[ show edit update destroy ]

  # GET /blog_users or /blog_users.json
  def index
    @blog_users = BlogUser.all
  end

  # GET /blog_users/1 or /blog_users/1.json
  def show
  end

  # GET /blog_users/new
  def new
    @blog_user = BlogUser.new
  end

  # GET /blog_users/1/edit
  def edit
  end

  # POST /blog_users or /blog_users.json
  def create
    @blog_user = BlogUser.new(blog_user_params)

    respond_to do |format|
      if @blog_user.save
        format.html { redirect_to blog_user_url(@blog_user), notice: "BlogUser was successfully created." }
        format.json { render :show, status: :created, location: @blog_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @blog_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blog_users/1 or /blog_users/1.json
  def update
    respond_to do |format|
      if @blog_user.update(blog_user_params)
        format.html { redirect_to blog_user_url(@blog_user), notice: "BlogUser was successfully updated." }
        format.json { render :show, status: :ok, location: @blog_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @blog_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_users/1 or /blog_users/1.json
  def destroy
    @blog_user.destroy

    respond_to do |format|
      format.html { redirect_to blog_users_url, notice: "BlogUser was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_user
      @blog_user = BlogUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_user_params
      params.require(:blog_user).permit(:nickname, :user_id)
    end
end

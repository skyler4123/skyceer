class ArticleUsersController < ArticleController
  before_action :set_article_user, only: %i[ show edit update destroy ]

  # GET /article_users or /article_users.json
  def index
    @article_users = ArticleUser.all
  end

  # GET /article_users/1 or /article_users/1.json
  def show
  end

  # GET /article_users/new
  def new
    @article_user = ArticleUser.new
  end

  # GET /article_users/1/edit
  def edit
  end

  # POST /article_users or /article_users.json
  def create
    @article_user = ArticleUser.new(article_user_params)

    respond_to do |format|
      if @article_user.save
        format.html { redirect_to article_user_url(@article_user), notice: "Article user was successfully created." }
        format.json { render :show, status: :created, location: @article_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @article_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /article_users/1 or /article_users/1.json
  def update
    respond_to do |format|
      if @article_user.update(article_user_params)
        format.html { redirect_to article_user_url(@article_user), notice: "Article user was successfully updated." }
        format.json { render :show, status: :ok, location: @article_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @article_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /article_users/1 or /article_users/1.json
  def destroy
    @article_user.destroy!

    respond_to do |format|
      format.html { redirect_to article_users_url, notice: "Article user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article_user
      @article_user = ArticleUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_user_params
      params.expect(article_user: [:user_id])
    end
end

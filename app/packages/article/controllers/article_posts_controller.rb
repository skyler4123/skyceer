class ArticlePostsController < ArticleController
  before_action :set_article_post, only: %i[ show edit update destroy ]

  # GET /article_posts or /article_posts.json
  def index
    @article_posts = ArticlePost.all
  end

  # GET /article_posts/1 or /article_posts/1.json
  def show
  end

  # GET /article_posts/new
  def new
    @article_post = ArticlePost.new
    @article_post.save
    redirect_to edit_article_post_path(@article_post)
  end

  # GET /article_posts/1/edit
  def edit
  end

  # POST /article_posts or /article_posts.json
  def create
    @article_post = ArticlePost.new(article_post_params)
    @article_post.content = params[:article_post][:content].as_json
    @article_post.user_id = Current.user_id

    respond_to do |format|
      if @article_post.save
        format.html { redirect_to @article_post, notice: "Article post was successfully created." }
        format.json { render :show, status: :created, location: @article_post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @article_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /article_posts/1 or /article_posts/1.json
  def update
    # debugger
    article_post_update_params = {
      title: params[:article_post][:title],
      content: params[:article_post][:content].as_json,
    }
    respond_to do |format|
      if @article_post.update(article_post_update_params)
        format.html { redirect_to @article_post, notice: "Article post was successfully updated." }
        format.json { render :show, status: :ok, location: @article_post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @article_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /article_posts/1 or /article_posts/1.json
  def destroy
    @article_post.destroy!

    respond_to do |format|
      format.html { redirect_to article_posts_path, status: :see_other, notice: "Article post was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article_post
      @article_post = ArticlePost.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_post_params
      params.require(:article_post).permit(:title, :content)
    end
end

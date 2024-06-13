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
  end

  # GET /article_posts/1/edit
  def edit
  end

  # POST /article_posts or /article_posts.json
  def create
    @article_post = ArticlePost.new(article_post_params)
    @article_post.content = JSON.parse(params[:article_post][:content])
    @article_post.article_user_id = Current.article_user_id
    
    respond_to do |format|
      if @article_post.save
        format.html { redirect_to article_post_url(@article_post), notice: "Article post was successfully created." }
        format.json { render :show, status: :created, location: @article_post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @article_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /article_posts/1 or /article_posts/1.json
  def update
    respond_to do |format|
      if @article_post.update(article_post_params)
        format.html { redirect_to article_post_url(@article_post), notice: "Article post was successfully updated." }
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
      format.html { redirect_to article_posts_url, notice: "Article post was successfully destroyed." }
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
      params.require(:article_post).permit(:title, :content, :article_user_id)
    end
end

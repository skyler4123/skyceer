class ReviewArticlesController < ApplicationController
  before_action :set_review_article, only: %i[ show edit update destroy ]

  # GET /review_articles or /review_articles.json
  def index
    @review_articles = ReviewArticle.all
  end

  # GET /review_articles/1 or /review_articles/1.json
  def show
    @review_comments = @review_article.review_comments
  end

  # GET /review_articles/new
  def new
    @review_article = ReviewArticle.new
  end

  # GET /review_articles/1/edit
  def edit
  end

  # POST /review_articles or /review_articles.json
  def create
    @review_article = ReviewArticle.new(review_article_params)

    respond_to do |format|
      if @review_article.save
        format.html { redirect_to review_article_url(@review_article), notice: "Review article was successfully created." }
        format.json { render :show, status: :created, location: @review_article }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @review_article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /review_articles/1 or /review_articles/1.json
  def update
    respond_to do |format|
      if @review_article.update(review_article_params)
        format.html { redirect_to review_article_url(@review_article), notice: "Review article was successfully updated." }
        format.json { render :show, status: :ok, location: @review_article }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @review_article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /review_articles/1 or /review_articles/1.json
  def destroy
    @review_article.destroy!

    respond_to do |format|
      format.html { redirect_to review_articles_url, notice: "Review article was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review_article
      @review_article = ReviewArticle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_article_params
      params.require(:review_article).permit(:title, :content)
    end
end

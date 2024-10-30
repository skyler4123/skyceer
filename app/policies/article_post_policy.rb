class ArticlePostPolicy < ApplicationPolicy
  attr_reader :user, :article_post

  def initialize(user, article_post)
    @user = user
    @article_post = article_post
  end

  def index?
    true
  end

  def edit?
    user.user_id == article_post.user_id
  end

  # def update?
  #   user.admin? || !article_post.published?
  # end
end
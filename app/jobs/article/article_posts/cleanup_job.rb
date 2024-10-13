# Because article_post need id to upload image at new action, so we need to create n new post at everytime trigger new action 

class Article::ArticlePosts::CleanupJob < ApplicationJob
  # queue_as :default
  # self.queue_adapter = :solid_queue
  CLEANUP_TIME=60 # seconds

  def perform
    cleanup_time = CLEANUP_TIME.seconds.ago
    cleanup_article_posts = ArticlePost.where(:created_at.gt => cleanup_time, :updated_at.gt => cleanup_time, title: "", content: "")
    cleanup_article_posts.destroy_all
  end
end

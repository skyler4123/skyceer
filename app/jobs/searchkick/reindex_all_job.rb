class Searchkick::ReindexAllJob < ApplicationJob
  queue_as :searchkick_reindex_all

  def perform
    puts "Reindexing all models..."

    puts "Reindexing User model..."
    User.reindex
    puts "Reindexed User model."
  end
end
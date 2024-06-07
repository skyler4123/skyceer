class CreateReviewArticles < ActiveRecord::Migration[7.1]
  def change
    create_table :review_articles, id: :uuid do |t|
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end

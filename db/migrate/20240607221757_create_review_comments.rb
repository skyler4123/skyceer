class CreateReviewComments < ActiveRecord::Migration[7.1]
  def change
    create_table :review_comments, id: :uuid do |t|
      t.string :body

      t.timestamps
    end
  end
end

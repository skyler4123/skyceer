class CreateReviewUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :review_users, id: :uuid do |t|
      t.string :user_id

      t.timestamps
    end
  end
end

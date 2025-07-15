class CreateReportTickets < ActiveRecord::Migration[8.0]
  def change
    create_table :report_tickets, id: :uuid do |t|
      t.references :report_user, null: true, foreign_key: true, type: :uuid
      t.string :title
      t.string :content
      t.integer :status
      t.string :email
      t.string :phone
      t.string :nation
      t.datetime :discarded_at

      t.timestamps
    end
  end
end

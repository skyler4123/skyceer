class CreateReportTickets < ActiveRecord::Migration[7.2]
  def change
    create_table :report_tickets, id: :uuid do |t|
      t.string :title
      t.string :content
      t.integer :category
      t.integer :status
      t.string :reporter_email
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :report_tickets, :discarded_at
  end
end

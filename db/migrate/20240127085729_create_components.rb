class CreateComponents < ActiveRecord::Migration[7.1]
  def change
    create_table :components, id: :uuid do |t|

      t.timestamps
    end
  end
end

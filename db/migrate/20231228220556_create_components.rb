class CreateComponents < ActiveRecord::Migration[7.0]
  def change
    create_table :components, id: :uuid do |t|

      t.timestamps
    end
  end
end

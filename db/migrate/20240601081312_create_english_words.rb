class CreateEnglishWords < ActiveRecord::Migration[7.1]
  def change
    create_table :english_words, id: :uuid do |t|
      t.string :name
      t.string :ipa

      t.timestamps
    end
    add_index :english_words, :name
  end
end

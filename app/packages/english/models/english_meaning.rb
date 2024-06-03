class EnglishMeaning
  include Mongoid::Document
  include Mongoid::Timestamps

  field :part_of_speech, type: String
  field :synonyms, type: Array
  field :antonyms, type: Array

  embeds_many :english_definitions
  embedded_in :english_word
end

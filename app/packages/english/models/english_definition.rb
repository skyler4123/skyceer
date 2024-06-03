class EnglishDefinition
  include Mongoid::Document
  include Mongoid::Timestamps

  field :definition, type: String
  field :synonyms, type: Array
  field :antonyms, type: Array
  field :example, type: String

  embedded_in :english_meaning
end

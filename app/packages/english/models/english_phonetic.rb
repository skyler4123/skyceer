class EnglishPhonetic
  include Mongoid::Document
  include Mongoid::Timestamps

  field :text, type: String
  field :audio, type: String
  field :source_url, type: String

  has_one :english_license
  embedded_in :english_word
end

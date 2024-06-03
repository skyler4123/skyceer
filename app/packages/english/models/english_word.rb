class EnglishWord
  include Mongoid::Document
  include Mongoid::Timestamps

  field :word, type: String
  field :phonetic, type: String

  embeds_many :english_phonetics
  embeds_many :english_meanings
  embeds_many :english_sorce_urls
  has_one :english_license

  index({ word: 1 }, { unique: false })
end

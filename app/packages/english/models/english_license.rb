class EnglishLicense
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :url, type: String

end

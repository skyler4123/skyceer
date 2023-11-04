# typed: false

class Blog
  include Mongoid::Document
  include Mongoid::Timestamps
  field :content, type: String

  belongs_to :blog_user
end

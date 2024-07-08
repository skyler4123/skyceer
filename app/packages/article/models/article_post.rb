class ArticlePost
  include Mongoid::Document
  include Mongoid::Timestamps

  field :package, type: String
  field :title, type: String
  field :content, type: Hash
  
  belongs_to :article_user
  embeds_many :article_comments

  index({ chat_user_ids: '2d' }, { unique: true })
  index({ package: 1 }, { unique: false })

  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
  def as_indexed_json(options={})
    as_json(except: [:id, :_id])
  end
  # settings index: { number_of_shards: 1 } do
  #   mappings dynamic: 'false' do
  #     indexes :title, analyzer: 'english', index_options: 'offsets'
  #   end
  # end

end

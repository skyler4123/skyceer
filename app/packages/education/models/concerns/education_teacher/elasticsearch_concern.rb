module EducationTeacher::ElasticsearchConcern
#   extend ActiveSupport::Concern
  
#   included do
#     include Elasticsearch::Model
#     # include Elasticsearch::Model::Callbacks

#     # Setup the schema-like structure at Elasticsearch 
#     settings index: { number_of_shards: 1 } do
#       mappings dynamic: 'false' do
#         indexes :name, analyzer: 'english', index_options: 'offsets'#, type: 'keyword'
#         # indexes :email, analyzer: 'snowball'
#         # Do not index verified
#         # indexes :verified, index: false
#       end
#     end

#     # def raw_title
#     #   'raw title'
#     # end
  
#     # Define what fields need to import to Elasticsearch
#     def as_indexed_json(options={})
#       as_json(
#         only: [:name, :email],
#         # methods: [:raw_title]
#       )
#     end

#     after_create_commit    { Elasticsearch::IndexerJob.perform_later(:index,  self.id, self.class.name) }
#     after_destroy { Elasticsearch::IndexerJob.perform_later(:delete, self.id, self.class.name) }
#   end

#   # def self.search(query)
#   #   # ...
#   # end

end

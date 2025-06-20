module ApplicationRecord::SearchkickConcern
  extend ActiveSupport::Concern
  
  included do
    def self.searchkick_documents
      # Use the Searchkick client to fetch all documents
      response = Searchkick.client.search(
        index: searchkick_index_name,
        body: {
          query: {
            match_all: {} # Fetch all documents
          }
        }
      )

      # Access the documents
      response["hits"]["hits"]
    end
  end
end

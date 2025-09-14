module User::SearchkickConcern
  extend ActiveSupport::Concern

  included do
    searchkick  word_start: [ :name, :email ],
                searchable: [ :name, :email ],
                callbacks: :async,
                mappings: {
                 properties: {
                   email: {
                     type: "keyword" # Index email as a keyword for exact matches
                   },
                   name: {
                     type: "text", # Index name as text for full-text search
                     analyzer: "name_shingle" # Use the standard analyzer for name
                   },
                   first_name: {
                     type: "text", # Index first_name as text for full-text search
                     analyzer: "standard", # Use the standard analyzer for first_name
                      fields: {
                        keyword: {
                          type: "keyword", # Index first_name as a keyword for exact matches
                          ignore_above: 256 # Ignore names longer than 256 characters
                        }
                      }
                   },
                   last_name: {
                     type: "text", # Index last_name as text for full-text search
                     analyzer: "standard" # Use the standard analyzer for last_name
                   },
                   username: {
                     type: "keyword" # Index username as a keyword for exact matches
                   },
                   id: {
                     type: "keyword" # Index id as a keyword for exact matches
                   },
                   role: {
                     type: "keyword" # Index role as a keyword for exact matches
                   },
                   education_role: {
                     type: "keyword" # Index education_role as a keyword for exact matches
                   }
                 }
                },
                settings: {
                   number_of_shards: 1, # Adjust based on your needs
                   number_of_replicas: 0, # Adjust based on your needs
                   analysis: {
                     analyzer: {
                       standard: {
                         type: "standard",
                         stopwords: "_english_" # Use English stopwords for the standard analyzer
                       },
                       name_shingle: {
                         type: "custom",
                         tokenizer: "standard",
                         filter: [ "lowercase", "english_stop", "name_shingle_filter" ] # Use a shingle filter for name shingling
                       }
                     },
                     filter: {
                       english_stop: {
                         type: "stop",
                         stopwords: "_english_" # Use English stopwords for the filter
                       },
                       name_shingle_filter: {
                         type: "shingle",
                         min_shingle_size: 2, # Minimum size of the shingle
                         max_shingle_size: 3 # Maximum size of the shingle
                       }
                     },
                     tokenizer: {
                       standard: {
                         type: "standard" # Use the standard tokenizer for text analysis
                       }
                     }
                   }
                }

    # Customize the index name if needed
    def search_data
      {
        id: id,
        username: username,
        email: email,
        name: name,
        first_name: first_name,
        last_name: last_name,
        full_name: "#{first_name} #{last_name}", # Add cuxtome full_name for better searchability, this field dont exist in the model
        role: role,
        education_role: education_role,
        roles: [ role, education_role ].compact, # Include both role and education_role in the search data
        role_details: {
          role: role,
          education_role: education_role
        }
      }
    end
  end
end

module User::SearchkickConcern
  extend ActiveSupport::Concern
  
  included do
    searchkick word_start: [:name, :email], searchable: [:name, :email], callbacks: :async, mappings: {
      properties: {
        email: {
          type: "keyword" # Index email as a keyword for exact matches
        },
        name: {
          type: "text", # Index name as text for full-text search
          analyzer: "standard" # Use the standard analyzer for name
        },
        first_name: {
          type: "text", # Index first_name as text for full-text search
          analyzer: "standard" # Use the standard analyzer for first_name
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
        role: role,
        education_role: education_role,
      }
    end

  end
end

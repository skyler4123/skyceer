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

module User::SearchkickConcern
  extend ActiveSupport::Concern
  
  included do
    searchkick word_start: [:name, :email], searchable: [:name, :email], callbacks: :async, index_name: "users_#{Rails.env}"

    # 
    def search_data
      {
        id: id,
        name: name,
        email: email,
        first_name: "first_name",
        last_name: "last_name",
      }
    end

    # Uncomment the following method if you want to customize the search behavior
    # def self.search(query, options = {})
    #   super(query, options)
    # end

  end
end

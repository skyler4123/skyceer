class SessionApplicationRecord < ApplicationRecord
  self.abstract_class = true
  connects_to database: { writing: :session, reading: :session }
end

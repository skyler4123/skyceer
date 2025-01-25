module User::ApplicationConcern
  extend ActiveSupport::Concern
  
  included do
    enum :role, { normal: 0, admin: 1 }
  end
end

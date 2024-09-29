module User::PackageConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :calendar_user, dependent: :destroy
    has_one :education_user, dependent: :destroy
    has_one :agriculture_user, dependent: :destroy
    has_one :vehicle_user, dependent: :destroy
    has_one :estate_user, dependent: :destroy
    
    after_create :create_package_users

    def create_package_users
      VehicleUser.create(user_id: self.id)
      ChatUser.create(user_id: self.id)
      EnglishUser.create(user_id: self.id)
      ArticleUser.create(user_id: self.id)
      EstateUser.create(user_id: self.id)
    end
  end

end

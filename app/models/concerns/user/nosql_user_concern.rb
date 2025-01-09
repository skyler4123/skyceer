module User::NosqlUserConcern
  extend ActiveSupport::Concern

  included do
    after_create_commit :create_nosql_user
    after_update_commit :update_nosql_user
    after_destroy_commit :destroy_nosql_user

    private

    def create_nosql_user
      NosqlUser.create!(self.user_attributes)
    end

    def update_nosql_user
      nosql_user = NosqlUser.where(user_id: self.id).first
      return unless nosql_user
      
      nosql_user.update!(self.user_attributes)
    end

    def destroy_nosql_user
      nosql_user = NosqlUser.where(user_id: self.id).first
      return unless nosql_user
      
      nosql_user.destroy
    end

    # get all attributes from User model
    def user_attributes
      attributes_data = self.attributes
      attributes_data["user_id"] = attributes["id"]
      attributes_data = attributes_data.except("id", "password_digest", "created_at", "updated_at")
    end
  end

end
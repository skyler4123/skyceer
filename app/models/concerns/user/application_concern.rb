module User::ApplicationConcern
  extend ActiveSupport::Concern

  included do
    enum :role, { normal: 0, admin: 1 }

    # add default attribute for role = normal
    after_initialize if: :new_record? do
      self.role ||= :normal
    end
  end
end

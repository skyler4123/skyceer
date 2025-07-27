module User::CalendarConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :calendar_owner, as: :calendar_ownerable, dependent: :destroy
  end
end

module User::CalendarConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :calendar_events, as: :calendar_ownerable, dependent: :destroy
    has_many :calendar_categories, as: :calendar_ownerable, dependent: :destroy
  end
end

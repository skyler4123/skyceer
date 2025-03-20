module User::CalendarConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :calendar_categories, as: :calendar_userable, dependent: :destroy
  end
end

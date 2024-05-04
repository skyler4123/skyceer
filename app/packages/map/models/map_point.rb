class MapPoint < ApplicationRecord
  belongs_to :mapable, polymorphic: true, optional: true
  belongs_to :map_user, optional: true
end

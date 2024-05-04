class MapPoint < ApplicationRecord
  belongs_to :mapable, polymorphic: true
  belongs_to :map_user
end

# rails g scaffold Address alpha2:string:index alpha3:string:index continent:string:index nationality:string:index region:string:index longitude:decimal latitude:decimal level_total:integer level_1:string:index level_2:string:index level_3:string:index level_4:string:index level_5:string:index level_6:string:index level_7:string:index level_8:string:index level_9:string:index level_10:string:index --force

class Address < ApplicationRecord
  include Address::SeedConcern

  has_many :category_appointments, as: :appoint_to, dependent: :destroy
  has_many :categories, through: :category_appointments

  before_save :update_level_total

  def update_level_total
    levels = self.attributes.slice("level_1", "level_2", "level_3", "level_4", "level_5", "level_6", "level_7", "level_8", "level_9", "level_10")
    level_total = levels.values.select { |level| level.present? }.size
    self.level_total = level_total
  end
end

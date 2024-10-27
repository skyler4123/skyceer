# rails g scaffold Address alpha2:string:index alpha3:string:index continent:string:index nationality:string:index region:string:index longitude:decimal latitude:decimal level_total:integer level_1:string:index level_2:string:index level_3:string:index level_4:string:index level_5:string:index level_6:string:index level_7:string:index level_8:string:index level_9:string:index level_10:string:index --force

class Address < ApplicationRecord

  before_save :update_level_total

  def update_level_total
    levels = self.attributes.slice('level_1', 'level_2', 'level_3', 'level_4', 'level_5', 'level_6', 'level_7', 'level_8', 'level_9', 'level_10')
    level_total = levels.compact.size
    self.level_total = level_total
  end

  def self.create_random
    country = ISO3166::Country.all.sample
    Address.create!(
      alpha2: country.alpha2,
      alpha3: country.alpha3,
      continent: country.continent,
      nationality: country.nationality,
      region: country.region,
      longitude: rand(country.min_longitude..country.max_longitude),
      latitude: rand(country.min_latitude..country.max_latitude)
    )
  end
end

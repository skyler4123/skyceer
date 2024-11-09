module Address::SeedConcern
  extend ActiveSupport::Concern

  included do
    def self.create_random(alpha2: nil, name: nil)
      country = ISO3166::Country.find_country_by_alpha2(alpha2) if alpha2
      country = ISO3166::Country.find_country_by_iso_short_name(name) if name
      country = ISO3166::Country.all.sample
      subdivisions = country.subdivisions.values
      Address.create!(
        alpha2: country.alpha2,
        alpha3: country.alpha3,
        continent: country.continent,
        nationality: country.nationality,
        region: country.region,
        subdivision: subdivisions.sample&.name || "",
        longitude: rand(country.min_longitude..country.max_longitude),
        latitude: rand(country.min_latitude..country.max_latitude)
      )
    end

    def self.create_random_vietnam
      self.create_random(alpha2: 'VN')
    end
  end
end

class AutoGenerator::VehicleService
  def self.run
    User.all.each do |user|
      1.times do
        vehicle_store = VehicleStore.create!(
          name: "vehicle store name #{Faker::Movie.title}",
          user: user,
          coordinates: [rand(-10e6..10e6), rand(-10e6..10e6)],
        )
        2.times do
          VehicleCar.create!(
            name: "vehicle car name #{Faker::Movie.title}",
            model: "model #{Faker::Movie.title}",
            brand: ['tesla', 'toyota', 'honda'].sample,
            vehicle_store: vehicle_store,
            user: user,
            price: rand(1..1000),
            year: rand(1900..2024),
            post_purpose: [0, 1, 2].sample,
            version: "version #{Faker::Movie.title}",
            coordinates: vehicle_store.coordinates,
            released_at: rand(10.years).seconds.from_now,
            verified: true,
            expired: false,
          )
        end
      end
    end
  end
end
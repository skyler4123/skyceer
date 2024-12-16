class AutoGenerator::EstateService
  def self.run
    User.all.each_with_index do |user, index|
      estate_condo = EstateCondo.create!(
        user: user,
        name: "estate user name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      AutoGenerator::AttachmentService.attach(record: estate_condo, relation: :images, number: 2)

      estate_hotel = EstateHotel.create!(
        user: user,
        name: "estate hotel name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      AutoGenerator::AttachmentService.attach(record: estate_hotel, relation: :images, number: 2)

      estate_house = EstateHouse.create!(
        user: user,
        name: "estate house name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      AutoGenerator::AttachmentService.attach(record: estate_house, relation: :images, number: 2)
    end
  end
end
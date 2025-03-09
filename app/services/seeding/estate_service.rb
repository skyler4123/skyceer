class Seeding::EstateService
  def self.run
    User.all.each_with_index do |user, index|
      estate_condo = EstateCondo.create!(
        user: user,
        name: "estate user name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      Seeding::AttachmentService.attach(record: estate_condo, relation: :image_attachments, number: 2)

      estate_hotel = EstateHotel.create!(
        user: user,
        name: "estate hotel name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      Seeding::AttachmentService.attach(record: estate_hotel, relation: :image_attachments, number: 2)

      estate_house = EstateHouse.create!(
        user: user,
        name: "estate house name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      Seeding::AttachmentService.attach(record: estate_house, relation: :image_attachments, number: 2)
    end
  end
end
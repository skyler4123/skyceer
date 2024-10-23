# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



return if ENV['RAILS_ENV'] == 'production'
# REDIS.set('time', Date.current.to_s)

# DESTROY ALL
User.destroy_all
Session.destroy_all
Address.destroy_all

VehicleUser.destroy_all
VehicleStore.destroy_all
VehicleCar.destroy_all

ChatUser.destroy_all
ChatConversation.destroy_all

EnglishUser.destroy_all

ArticleUser.destroy_all
ArticlePost.destroy_all

EstateUser.destroy_all
EstateCondo.destroy_all
EstateHotel.destroy_all

# Run generator for development
5.times do |n|
  address = Address.create(
    unit_number: SecureRandom.hex(3),
    street_number: Faker::Address.street_address,
    address_line_1: Faker::Movies::HarryPotter.character,
    address_line_2: Faker::Movies::HarryPotter.character,
    city: Faker::Address.city,
    country_code: COUNTRY.pluck(:alpha_2_code).sample,
    postal_code: Faker::Address.postcode,
  )
  user = User.create(
    email: "email#{n}@gmail.com",
    password: "password1234",
    password_confirmation: "password1234",
    verified: true,
    name: "user name #{Faker::Movies::HarryPotter.character}",
    address: address
  )
  (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
    file_name, file_type = file.path.split('/').last.split('.')
    user.avatar.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
  end
end

AutoGenerator::SeedService.run(seed_record: 10, seed_image: 50)
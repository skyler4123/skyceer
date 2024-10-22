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

# Run generator
5.times do |n|
  user = User.create(
    email: "email#{n}@gmail.com",
    password: "password1234",
    password_confirmation: "password1234",
    verified: true,
    name: "user name #{Faker::Movies::HarryPotter.character}"
  )
end
AutoGenerator::SeedService.run(seed_number: 10)
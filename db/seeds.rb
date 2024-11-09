# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create!(name: "Luke", movie: movies.first)



return if ENV['RAILS_ENV'] == 'production'
# REDIS.set('time', Date.current.to_s)

# DESTROY ALL
User.destroy_all
Session.destroy_all
Address.destroy_all

VehicleStore.destroy_all
VehicleCar.destroy_all

ChatConversation.destroy_all

ArticlePost.destroy_all

EstateCondo.destroy_all
EstateHotel.destroy_all

EducationSchool.destroy_all
EducationTeacher.destroy_all
EducationStudent.destroy_all
EducationRoom.destroy_all
EducationClass.destroy_all

# Run generator for development
5.times do |n|
  user = User.create!(
    email: "email#{n}@gmail.com",
    password: "password1234",
    password_confirmation: "password1234",
    verified: true,
    name: "user name #{Faker::Movies::HarryPotter.character}",
    address: Address.create_random_vietnam,
  )
  (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
    file_name, file_type = file.path.split('/').last.split('.')
    user.avatar.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
  end
end

AutoGenerator::SeedService.run(seed_record: 10, seed_image: 50)
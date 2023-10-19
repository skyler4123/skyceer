# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# return if ENV['RAILS_ENV'] == 'production'
User.destroy_all
Post.destroy_all
Comment.destroy_all
Laptop.destroy_all
Blogger.destroy_all

ActiveRecord::Base.transaction do
  5.times do |n|
    User.create(
      email: "email#{n + 1}@gmail.com",
      password: "password",
      password_confirmation: "password"
    )
  end
  15.times do |n|
    Post.create(
      content: Faker::Quote.famous_last_words,
      user: User.all.sample,
    )
  end
  50.times do |n|
    Comment.create(
      content: Faker::Quote.robin,
      user: User.all.sample,
      post: Post.all.sample,
    )
  end
  5.times do |n|
    Laptop.create(
      name: Faker::Commerce.product_name,
      brand: Faker::Commerce.brand,
      model: Faker::Device.model_name,
      unit_price: Faker::Commerce.price,
      quantity: Faker::Number.decimal_part(digits: 4),
      color: Faker::Commerce.color,
      hard_disk: [128, 256, 512, 1024, 2048].sample,
      cpu: ["intel", 'amd'].sample,
      ram: [1, 2, 4, 8, 16, 32, 64, 128].sample,
      os: Faker::Computer.platform,
      graphic_card: ["intel", 'ndivia', 'amd'].sample,
      screen_size: [13, 14, 15.6, 17].sample,
    )
  end
  User.all.each do |user|
    Blogger.create(
      nickname: Faker::FunnyName.name,
      user_id: user.id,
    )
  end
end
15.times do |n|
  (Dir.glob("/rails/faker/images/laptop/*.*").sample(2).map {|dir| File.open(dir)}).each_with_index do |file, index|
    file_name, file_type = file.path.split('/').last.split('.')
    Laptop.all.sample.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
  end
end
puts "db:seed done!"
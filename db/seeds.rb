# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.transaction do
  User.delete_all
  Post.delete_all
  Comment.delete_all
  
  5.times do |n|
    User.create(
      email: "email#{n + 1}@gmail.com",
      password: "password",
      password_confirmation: "password"
    )
  end
  5.times do |n|
    Post.create(
      content: Faker::Quote.famous_last_words,
      user: User.all.sample,
    )
  end
  10.times do |n|
    Comment.create(
      content: Faker::Quote.robin,
      user: User.all.sample,
      post: Post.all.sample,
    )
  end
end

puts "db:seed done!"
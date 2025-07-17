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
Category.destroy_all

ChatConversation.destroy_all

ArticlePost.destroy_all

EducationOwner.destroy_all
CalendarOwner.destroy_all
ReportOwner.destroy_all
PaymentOwner.destroy_all


# Run generator for development
Seeding::SeedService.run
puts "db:seed doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!"
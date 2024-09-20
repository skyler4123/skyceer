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

RsUser.destroy_all
RsCondo.destroy_all
RsHotel.destroy_all

# APPLICATION PACKAGE
10.times do |n|
  user = User.create(
    email: "email#{n + 1}@gmail.com",
    password: "password1234",
    password_confirmation: "password1234",
    verified: true,
    name: "user name #{n + 1}"
  )
end
User.first(10).each do |user|
  # Session.create!(
  #   name: user.name,
  #   email: user.email,
  #   user_id: user.id,
  #   vehicle_user_id: user.vehicle_user.id,
  #   chat_user_id: ChatUser.find_by(user_id: user.id).id,
  #   english_user_id: EnglishUser.find_by(user_id: user.id).id,
  #   article_user_id: ArticleUser.find_by(user_id: user.id).id,
  # )
end

# Vehicle Package
ActiveRecord::Base.transaction do
  # User.first(10).each do |user|
  #   VehicleUser.create(user: user)
  # end
  VehicleUser.all.each do |vehicle_user|
    2.times do
      vehicle_store = VehicleStore.create(
        name: "vehicle store name #{SecureRandom.uuid}",
        vehicle_user_id: vehicle_user.id,
        coordinates: [rand(-10e6..10e6), rand(-10e6..10e6)],
      )
      1.times do
        VehicleCar.create(
          name: "vehicle car name #{SecureRandom.uuid}",
          model: "model_#{SecureRandom.uuid}",
          brand: ['tesla', 'toyota', 'honda'].sample,
          vehicle_store: vehicle_store,
          vehicle_user: vehicle_user,
          price: rand(1..1000),
          year: rand(1900..2024),
          post_purpose: [0, 1, 2].sample,
          version: "version_#{SecureRandom.uuid}",
          coordinates: vehicle_store.coordinates,
          released_at: rand(10.years).seconds.from_now,
          verified: true,
          expired: false,
        )
      end
    end
  end
end


# CALENDAR PACKAGE
# CalendarUser.destroy_all
# ActiveRecord::Base.transaction do
#   User.first(10).each_with_index do |user, index|
#     CalendarUser.create(name: "calendar_user_#{index}", user: user)
#   endq
#   CalendarUser.all.each_with_index do |calendar_user|
#     2.times do |n|
#       CalendarSchedule.create(
#         calendar_user: calendar_user,
#         name: "calendar_schedule_#{n}",
#         color: '#' + SecureRandom.hex(3),
#         background_color: '#' + SecureRandom.hex(3),
#         drag_background_color: '#' + SecureRandom.hex(3),
#         border_color: '#' + SecureRandom.hex(3),
#         )
#     end
#   end
# end


# EDUCATION PACKAGE
# EducationUser.destroy_all
# EducationSchool.destroy_all
# EducationTeacher.destroy_all
# EducationStudent.destroy_all
# EducationRoom.destroy_all
# EducationClass.destroy_all

# ActiveRecord::Base.transaction do
#   User.first(10).each_with_index do |user, index|
#     EducationUser.create(name: "education_user_#{index}", user: user)
#   end

#   EducationUser.all.each_with_index do |user, index|
#     if index < 2
#       school = EducationSchool.create(name: "education_school_#{index}", education_user: user)
#       5.times do |n|
#         EducationRoom.create(name: "education_room_#{n}", education_school: school)
#       end
#       5.times do |n|
#         EducationClass.create(name: "education_class_#{n}", education_school: school)
#       end
#     end
#     school = EducationSchool.all.sample
#     if index >=2 && index < 6
#       EducationTeacher.create(name: "education_teacher_#{index}", education_user: user, education_school: school)
#     end
#     if index >= 6
#       EducationStudent.create(name: "education_student_#{index}", education_user: user, education_school: school, education_class: school.education_classes.sample)
#     end
#   end
# end


# AGRICULTURE PACKAGE
# AgricultureUser.destroy_all
# ActiveRecord::Base.transaction do
#   User.first(10).each_with_index do |user, index|
#     AgricultureUser.create(name: "agriculture_user_#{index}", user: user)
#   end
#   AgricultureUser.all.each_with_index do |user, index|
#     if (index % 2 == 0)
#       AgricultureFarmer.create(name: "agriculture_farmer_#{index}", agriculture_user: user)
#     else
#       AgricultureMerchant.create(name: "agriculture_merchant_#{index}", agriculture_user: user)
#     end
#   end
#   AgricultureFarmer.all.each_with_index do |farmer, index|
#     AgricultureFarm.create(name: "agriculture_farm_#{index}", agriculture_farmer: farmer)
#   end
# end


# CHAT PACKAGE
ChatUser.each do |user|
  # ChatConversation.create(chat_user_ids: ChatUser.pluck(:id).sample((2..5).to_a.sample).map(&:to_s))
  ChatConversation.create(chat_user_ids: ChatUser.pluck(:id).sample((2..2).to_a.sample).map(&:to_s))
end
50.times do |n|
  chat_conversation = ChatConversation.all.sample
  chat_user_ids = chat_conversation.chat_user_ids
  chat_conversation.chat_messages << ChatMessage.new(chat_user_id: chat_user_ids.sample, content: "content_#{n}")
end


# ARTICLE package
ArticleUser.each_with_index do |user, user_index|
  1.times do |n|
    content = {
      blocks: [{
        id: "oUq2g_tl8y",
        type: "header",
        data: {
           text: "content_#{user_index}",
           level: 2
        }
     }],
    }
    ArticlePost.create(article_user: user, package: 'vehicle', title: "title_#{n}", content: content)
  end
end
10.times do |n|
  article_post = ArticlePost.all.sample
  article_user = ArticleUser.all.sample
  article_post.article_comments << ArticleComment.new(article_user_id: article_user.id, content: "comment_#{n}")
end

# ENGLISH Package

# REAL ESTATE
# User.first(10).each do |user|
#   RsUser.create(user: user)
# end

RsUser.all.each_with_index do |rs_user, index|
  rs_user.rs_condos.create(
    name: "name #{index}",
    address: "address #{index}",
    longitude: rand(-180..180),
    latitude: rand(-90..90),
    price_cents: rand(1000..9999),
  )
  rs_user.rs_hotels.create(
    name: "name #{index}",
    address: "address #{index}",
    longitude: rand(-180..180),
    latitude: rand(-90..90),
    price_cents: rand(1000..9999),
  )
end


# UPLOAD IMAGE
# 15.times do |n|
#   (Dir.glob("/rails/faker/images/laptop/*.*").sample(2).map {|dir| File.open(dir)}).each_with_index do |file, index|
#     file_name, file_type = file.path.split('/').last.split('.')
#     Laptop.all.sample.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
#   end
# end



puts "db:seed done!"
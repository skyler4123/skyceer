# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



return if ENV['RAILS_ENV'] == 'production'
REDIS.set('time', Date.current.to_s)



# DESTROY ALL
User.destroy_all

CarUser.destroy_all
CarStore.destroy_all
CarCar.destroy_all

ChatUser.destroy_all
ChatConversation.destroy_all

EnglishUser.destroy_all

# APPLICATION PACKAGE

ActiveRecord::Base.transaction do
  10.times do |n|
    User.create(
      email: "email#{n + 1}@gmail.com",
      password: "password1234",
      password_confirmation: "password1234",
      verified: true,
      name: "name_#{n + 1}"
    )
  end
end


# Car Package
ActiveRecord::Base.transaction do
  # User.all.each do |user|
  #   CarUser.create(user: user)
  # end
  CarUser.all.each do |car_user|
    2.times do
      car_store = CarStore.create(
        name: "car_store_#{SecureRandom.uuid}",
        car_user_id: car_user.id,
        coordinates: [rand(-20e6..20e6), rand(-20e6..20e6)],
      )
      1.times do
        CarCar.create(
          name: "name_#{SecureRandom.uuid}",
          model: "model_#{SecureRandom.uuid}",
          brand: ['Tesla', 'Toyota', 'Honda'].sample,
          car_store: car_store,
          car_user: car_user,
          price: rand(1..1000),
          version: "version_#{SecureRandom.uuid}",
          coordinates: car_store.coordinates,
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
#   User.all.each_with_index do |user, index|
#     CalendarUser.create(name: "calendar_user_#{index}", user: user)
#   end
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
#   User.all.each_with_index do |user, index|
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
#   User.all.each_with_index do |user, index|
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

# ENGLISH Package


# UPLOAD IMAGE
# 15.times do |n|
#   (Dir.glob("/rails/faker/images/laptop/*.*").sample(2).map {|dir| File.open(dir)}).each_with_index do |file, index|
#     file_name, file_type = file.path.split('/').last.split('.')
#     Laptop.all.sample.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
#   end
# end



puts "db:seed done!"
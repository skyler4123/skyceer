# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



return if ENV['RAILS_ENV'] == 'production'
REDIS.set('time', Date.current.to_s)




# APPLICATION PACKAGE
User.destroy_all
ActiveRecord::Base.transaction do
  3.times do |n|
    User.create(
      email: "email#{n + 1}@gmail.com",
      password: "password1234",
      password_confirmation: "password1234",
      verified: true
    )
  end
end

# CALENDAR PACKAGE
CalendarUser.destroy_all
ActiveRecord::Base.transaction do
  User.all.each_with_index do |user, index|
    CalendarUser.create(name: "calendar_user_#{index}", user: user)
  end
  CalendarUser.all.each_with_index do |calendar_user|
    2.times do |n|
      CalendarSchedule.create(
        calendar_user: calendar_user,
        name: "calendar_schedule_#{n}",
        color: '#' + SecureRandom.hex(3),
        background_color: '#' + SecureRandom.hex(3),
        drag_background_color: '#' + SecureRandom.hex(3),
        border_color: '#' + SecureRandom.hex(3),
        )
    end
  end
end


# EDUCATION PACKAGE
# School.destroy_all
# Teacher.destroy_all
# Student.destroy_all
# ActiveRecord::Base.transaction do
#   10.times do |n|
#     School.create(name: "school_#{n}")
#   end
#   User.all.each_with_index do |user, index|
#     teacher_or_student = ['teacher', 'student'].sample
#     user.teacher.create(name: "teacher_#{index}", school: School.all.sample) if teacher_or_student == 'teacher'
#     user.student.create(name: "student_#{index}", school: School.all.sample) if teacher_or_student == 'student'
#   end
#   School.count*10.times do |n|
#     SchoolClass.create(name: "school_class_#{n}", school: School.all.sample)
#     SchoolRoom.create(name: "school_room_#{n}", school: School.all.sample)
#   end
# end

# CHAT PACKAGE
# ChatUser.destroy_all
# ChatConversation.destroy_all
# User.all.each do |user|
#   ChatUser.create(
#     user_id: user.id,
#   )
# end
# ChatUser.each do |user|
#   ChatConversation.create(chat_user_ids: ChatUser.pluck(:id).sample((2..5).to_a.sample))
# end
# 50.times do |n|
#   chat_conversation = ChatConversation.all.sample
#   chat_user_id = chat_conversation.chat_user_ids.sample
#   chat_conversation.chat_messages << ChatMessage.new(chat_user_id: chat_user_id, content: "content_#{n}")
# end


# 15.times do |n|
#   (Dir.glob("/rails/faker/images/laptop/*.*").sample(2).map {|dir| File.open(dir)}).each_with_index do |file, index|
#     file_name, file_type = file.path.split('/').last.split('.')
#     Laptop.all.sample.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
#   end
# end

puts "db:seed done!"
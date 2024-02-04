# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



return if ENV['RAILS_ENV'] == 'production'
REDIS.set('time', Date.current.to_s)
User.destroy_all
ChatConversation.destroy_all



ActiveRecord::Base.transaction do
  10.times do |n|
    User.create(
      email: "email#{n + 1}@gmail.com",
      password: "password1234",
      password_confirmation: "password1234",
      verified: true
    )
  end
end

# 15.times do |n|
#   (Dir.glob("/rails/faker/images/laptop/*.*").sample(2).map {|dir| File.open(dir)}).each_with_index do |file, index|
#     file_name, file_type = file.path.split('/').last.split('.')
#     Laptop.all.sample.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
#   end
# end

# MongoDB
User.all.each do |user|
  ChatUser.create(
    user_id: user.id,
  )
end

ChatUser.each do |user|
  ChatConversation.create(chat_user_ids: ChatUser.pluck(:id).sample((2..5).to_a.sample))
end

50.times do |n|
  # ChatConversation.all.sample.chat_messages << ChatMessage.new(chat_user_id: ChatUser.all.sample.id, content: "content_#{n}")
  chat_conversation = ChatConversation.all.sample
  chat_user_id = chat_conversation.chat_user_ids.sample
  chat_conversation.chat_messages << ChatMessage.new(chat_user_id: chat_user_id, content: "content_#{n}")
end
# 10.times do |n|
#   Blog.create(
#     content: Faker::Quote.matz,
#     blog_user: BlogUser.all.sample,
#   )
# end
# User.all.each do |user|
#   ChatUser.create(
#     user_id: user.id,
#   )
# end
# 10.times do |n|
#   chat_user_ids = ChatUser.all.take(rand(2..5)).pluck(:id)
#   chat_room = ChatRoom.create(
#     chat_user_ids: chat_user_ids
#   )
#   10.times do |n|
#     chat_room.chat_messages << ChatMessage.new(chat_user_id: chat_user_ids.sample, content: "chat message #{n}")
#   end
# end



puts "db:seed done!"
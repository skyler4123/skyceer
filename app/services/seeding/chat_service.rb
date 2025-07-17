class Seeding::ChatService
  # def self.run
  #   User.all.each do |user|
  #     ChatConversation.create!(user_ids: [user.id, User.where.not(id: user.id).first(2).pluck(:id)].flatten)
  #   end
    
  #   ChatConversation.all.each_with_index do |chat_conversation, n|
  #     user_ids = chat_conversation.user_ids
  #     2.times do |n_1|
  #       chat_conversation.chat_messages << ChatMessage.new(user_id: user_ids.sample, content: "content #{Time.now.to_i}_#{n}_#{n_1}")
  #     end
  #   end
  # end
end

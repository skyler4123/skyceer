class Seeding::ChatService
  def self.run
    10.times do |n|
      nosql_user_ids = NosqlUser.pluck(:id).sample(rand(2..5))
      chat_conversation = ChatConversation.find_or_create_between_users(nosql_user_ids)

      2.times do |n_1|
        chat_conversation.chat_messages.create!(
          nosql_user_id: nosql_user_ids.sample,
          content: "content #{Time.now.to_i}_#{n}_#{n_1}"
        )
      end
    end
  end
end

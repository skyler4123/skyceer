# Seeding::ChatService.run

class Seeding::ChatService
  def self.run
    ChatConversation.destroy_all
    ChatBucket.destroy_all

    self.chat_conversation
    self.chat_bucket
    self.chat_message
  end

  def self.chat_conversation
    nosql_users = NosqlUser.first(10)
    10.times do |n|
      nosql_user_ids = nosql_users.sample(rand(2..5)).pluck(:id)
      chat_conversation = ChatConversation.find_or_create_between_users(nosql_user_ids)

      # 2.times do |n_1|
      #   chat_conversation.chat_messages.create!(
      #     nosql_user_id: nosql_user_ids.sample,
      #     content: "content #{Time.now.to_i}_#{n}_#{n_1}"
      #   )
      # end
    end
  end

  def self.chat_bucket
    ChatConversation.all.each do |chat_conversation|
      chat_conversation.chat_bucket
    end
  end

  def self.chat_message
    # C
  end
end

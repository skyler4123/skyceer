json.extract! chat_conversation, :id, :created_at, :updated_at
json.messages chat_conversation.chat_messages, :chat_user_id, :content
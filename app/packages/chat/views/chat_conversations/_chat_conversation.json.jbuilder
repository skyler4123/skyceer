json.extract! chat_conversation, :id, :created_at, :updated_at
json.url chat_conversation_url(chat_conversation, format: :json)

json.extract! chat_message, :id, :created_at, :updated_at
json.url chat_message_url(chat_message, format: :json)

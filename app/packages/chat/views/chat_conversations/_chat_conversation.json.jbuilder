json.extract! chat_conversation, :id, :chat_user_ids, :created_at, :updated_at
json.signed_stream_name Turbo::StreamsChannel.signed_stream_name(chat_conversation.id)
json.chat_messages chat_conversation.chat_messages, :chat_user_id, :content

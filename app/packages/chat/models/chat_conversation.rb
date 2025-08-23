# app/models/chat_conversation.rb
class ChatConversation
  include Mongoid::Document
  include Mongoid::Timestamps

  field :nosql_user_ids, type: Array, default: []

  embeds_many :chat_messages, class_name: "ChatMessage"

  # Validations
  validates :nosql_user_ids, presence: true, length: { minimum: 2 }
  # validate :nosql_user_ids_must_be_unique

  # Indexes
  index({ nosql_user_ids: 1 }, { unique: true })

  # Callbacks
  before_validation :normalize_nosql_user_ids

  # Class methods
  def self.find_or_create_between_users(nosql_user_ids)
    normalized_ids = nosql_user_ids.map(&:to_s).sort
    find_or_create_by(nosql_user_ids: normalized_ids)
  end

  # Find all conversations that include a specific user
  def self.for_user(nosql_user_id)
    where(nosql_user_ids: nosql_user_id.to_s)
  end

  # Find conversations between a user and other users (returns relation)
  def self.between_user_and_others(nosql_user_id, other_nosql_user_ids)
    normalized_nosql_user_id = nosql_user_id.to_s
    normalized_other_ids = other_nosql_user_ids.map(&:to_s)

    where(nosql_user_ids: normalized_nosql_user_id)
      .in(nosql_user_ids: normalized_other_ids)
  end

  # Find a specific conversation between two users
  def self.between_users(nosql_user_id1, nosql_user_id2)
    normalized_ids = [ nosql_user_id1.to_s, nosql_user_id2.to_s ].sort
    where(nosql_user_ids: normalized_ids).first
  end

  # Check if a conversation exists for a user
  def self.exists_for_user?(nosql_user_id)
    where(nosql_user_ids: nosql_user_id.to_s).exists?
  end

  # Instance methods
  def other_nosql_user_id(current_nosql_user_id)
    (nosql_user_ids - [ current_nosql_user_id.to_s ]).first
  end

  def latest_message
    chat_messages.order_by(created_at: :desc).first
  end

  # Check if user is part of this conversation
  def includes_user?(nosql_user_id)
    nosql_user_ids.include?(nosql_user_id.to_s)
  end

  # Get recent messages with  limit and offset
  def recent_messages(limit = 10, offset = 0)
    chat_messages.desc(:created_at).skip(offset).limit(limit).to_a.reverse
  end

  # Get messages in reverse order (for pagination)
  def messages_with_pagination(page = 1, per_page = 10)
    offset = (page - 1) * per_page
    chat_messages.desc(:created_at).skip(offset).limit(per_page).to_a.reverse
  end

  # Get messages before a specific message (for infinite scroll)
  def messages_before(message_id, limit = 10)
    target_message = chat_messages.find(message_id)
    chat_messages
      .where(:created_at.lt => target_message.created_at)
      .desc(:created_at)
      .limit(limit)
      .to_a
      .reverse
  end

  # Get messages after a specific message
  def messages_after(message_id, limit = 10)
    target_message = chat_messages.find(message_id)
    chat_messages
      .where(:created_at.gt => target_message.created_at)
      .asc(:created_at)
      .limit(limit)
  end

  # Get total message count
  def total_messages_count
    chat_messages.count
  end

  # Check if there are more messages to load
  def has_more_messages?(offset, limit = 10)
    total_messages_count > (offset + limit)
  end

  private

  def normalize_nosql_user_ids
    self.nosql_user_ids = nosql_user_ids.map(&:to_s).sort.uniq if nosql_user_ids.present?
  end

  def nosql_user_ids_must_be_unique
    return unless nosql_user_ids.present?

    errors.add(:nosql_user_ids, "must contain unique values") if nosql_user_ids.length != nosql_user_ids.uniq.length
  end
end

# # Find all conversations for a specific user
# user_conversations = ChatConversation.for_user("user_123")

# # Find conversation between two specific users
# conversation = ChatConversation.between_users("user_123", "user_456")

# # Find conversations where user_123 is talking to any of the other users
# other_users = ["user_456", "user_789"]
# conversations = ChatConversation.between_user_and_others("user_123", other_users)

# # Check if user has any conversations
# has_conversations = ChatConversation.exists_for_user?("user_123")

# # Check if a specific conversation includes a user
# conversation = ChatConversation.first
# is_participant = conversation.includes_user?("user_123")

# # Get conversations for a user ordered by latest message
# user_conversations = ChatConversation.for_user("user_123")
#                                    .includes(:chat_messages)
#                                    .sort_by(&:latest_message)
#                                    .reverse

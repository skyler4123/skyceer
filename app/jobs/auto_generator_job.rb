class AutoGeneratorJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :solid_queue

  def perform
    time_key = Time.now.to_i
    seed_number = 1
    # APPLICATION PACKAGE
    seed_number.times do |n|
      user = User.create(
        email: "email#{time_key}@gmail.com",
        password: "password1234",
        password_confirmation: "password1234",
        verified: true,
        name: "user name #{Faker::Movies::HarryPotter.character}"
      )
    end

    # Vehicle Package
    vehicle_user = VehicleUser.all.sample
    1.times do
      vehicle_store = VehicleStore.create(
        name: "vehicle store name #{Faker::Movies::HarryPotter.character}",
        vehicle_user_id: vehicle_user.id,
        coordinates: [rand(-10e6..10e6), rand(-10e6..10e6)],
      )
      1.times do
        VehicleCar.create(
          name: "vehicle car name #{Faker::Movies::HarryPotter.character}",
          model: "model #{Faker::Movies::HarryPotter.character}",
          brand: ['tesla', 'toyota', 'honda'].sample,
          vehicle_store: vehicle_store,
          vehicle_user: vehicle_user,
          price: rand(1..1000),
          year: rand(1900..2024),
          post_purpose: [0, 1, 2].sample,
          version: "version_#{time_key}",
          coordinates: vehicle_store.coordinates,
          released_at: rand(10.years).seconds.from_now,
          verified: true,
          expired: false,
        )
      end
    end
    
    # CHAT PACKAGE
    chat_user = ChatUser.all.sample
    ChatConversation.create(chat_user_ids: [chat_user.id.to_s, ChatUser.where.not(id: chat_user.id).first(seed_number - 1).sample.id.to_s])
    
    10.times do |n|
      chat_conversation = ChatConversation.all.sample
      chat_user_ids = chat_conversation.chat_user_ids
      chat_conversation.chat_messages << ChatMessage.new(chat_user_id: chat_user_ids.sample, content: "content #{time_key}")
    end
    
    
    # ARTICLE package
    ArticleUser.all.sample(2).each_with_index do |user, user_index|
      1.times do |n|
        content = {
          blocks: [{
            id: "oUq2g_tl8y",
            type: "header",
            data: {
               text: Faker::Movies::HarryPotter.quote,
               level: 2
            }
         }],
        }
        ArticlePost.create(article_user: user, package: 'vehicle', title: Faker::Movies::HarryPotter.character, content: content)
      end
    end
    seed_number.times do |n|
      article_post = ArticlePost.all.sample
      article_user = ArticleUser.all.sample
      article_post.article_comments << ArticleComment.new(article_user_id: article_user.id, content: "comment #{time_key}")
    end
    
    
    EstateUser.all.sample(1).each_with_index do |estate_user, index|
      estate_user.estate_condos.create(
        name: "estate user name #{Faker::Movies::HarryPotter.character}",
        address: "address #{time_key}",
        longitude: rand(-180..180),
        latitude: rand(-90..90),
        price_cents: rand(1000..9999),
      )
      estate_user.estate_hotels.create(
        name: "estate hotel name #{Faker::Movies::HarryPotter.character}",
        address: "address #{time_key}",
        longitude: rand(-180..180),
        latitude: rand(-90..90),
        price_cents: rand(1000..9999),
      )
      estate_user.estate_houses.create(
        name: "estate house name #{Faker::Movies::HarryPotter.character}",
        address: "address #{time_key}",
        longitude: rand(-180..180),
        latitude: rand(-90..90),
        price_cents: rand(1000..9999),
      )
    end
    
  end
end
